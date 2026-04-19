import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const UA = 'Portfolio/1.0 (github.com/AbIsheKVaIdyA)'

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'AbIsheKVaIdyA'

  try {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': UA }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers }),
      fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&type=owner&per_page=10`,
        { headers }
      ),
    ])

    if (!userRes.ok) {
      return NextResponse.json(
        { ok: false, error: `GitHub user: ${userRes.status}` },
        { status: 502 }
      )
    }

    const user = await userRes.json()
    const repos = reposRes.ok ? await reposRes.json() : []

    const slimRepos = (Array.isArray(repos) ? repos : []).map(
      (r: {
        name: string
        html_url: string
        description: string | null
        stargazers_count: number
        language: string | null
        updated_at: string
        fork: boolean
      }) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        stars: r.stargazers_count,
        language: r.language,
        updatedAt: r.updated_at,
        fork: r.fork,
      })
    )

    return NextResponse.json(
      {
        ok: true,
        profile: {
          login: user.login,
          name: user.name,
          avatarUrl: user.avatar_url,
          bio: user.bio,
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          htmlUrl: user.html_url,
        },
        repos: slimRepos.filter((r) => !r.fork),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    )
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'GitHub fetch failed' }, { status: 500 })
  }
}
