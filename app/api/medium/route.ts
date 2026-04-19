import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

export const dynamic = 'force-dynamic'

const parser = new Parser({
  timeout: 12000,
})

export async function GET() {
  const username = process.env.MEDIUM_USERNAME || 'abhishekcv.us'
  const feedUrl =
    process.env.MEDIUM_FEED_URL || `https://medium.com/feed/@${username.replace(/^@/, '')}`

  try {
    const feed = await parser.parseURL(feedUrl)

    const posts = (feed.items || []).slice(0, 8).map((item) => ({
      title: item.title || 'Untitled',
      link: item.link || '#',
      pubDate: item.pubDate || item.isoDate || '',
      snippet: (item.contentSnippet || '').replace(/\s+/g, ' ').slice(0, 220),
    }))

    return NextResponse.json(
      { ok: true, posts, feedTitle: feed.title || 'Medium' },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
        },
      }
    )
  } catch (e) {
    console.error('Medium RSS error', e)
    return NextResponse.json(
      { ok: false, error: 'Could not load Medium feed', posts: [] },
      { status: 502 }
    )
  }
}
