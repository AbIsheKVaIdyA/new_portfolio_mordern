import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function htmlPage(body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Spotify — refresh token</title>
  <style>
    body { font-family: ui-monospace, monospace; background: #0a0a0f; color: #e4e4e7; padding: 2rem; max-width: 52rem; margin: 0 auto; line-height: 1.6; }
    h1 { font-size: 1.1rem; color: #22d3ee; }
    pre { background: #18181b; border: 1px solid #27272a; padding: 1rem; overflow-x: auto; word-break: break-all; border-radius: 0.5rem; }
    .warn { color: #fbbf24; margin-top: 1.5rem; }
    a { color: #22d3ee; }
  </style>
</head>
<body>
${body}
</body>
</html>`
}

/**
 * Step 2: Spotify redirects here with ?code=… — we exchange it for tokens and show refresh_token.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  if (error) {
    return new NextResponse(
      htmlPage(
        `<h1>Spotify returned an error</h1><p>${error}</p><p>${errorDescription || ''}</p><p><a href="/">Back to site</a></p>`
      ),
      { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  if (!code) {
    return new NextResponse(htmlPage(`<h1>Missing code</h1><p>Open <a href="/api/spotify/auth">/api/spotify/auth</a> first.</p>`), {
      status: 400,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI?.trim()

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse(
      htmlPage(`<h1>Server misconfiguration</h1><p>SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REDIRECT_URI is missing.</p>`),
      { status: 500, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  const raw = await tokenRes.text()
  let json: { refresh_token?: string; access_token?: string; scope?: string }

  try {
    json = JSON.parse(raw) as { refresh_token?: string; access_token?: string; scope?: string }
  } catch {
    return new NextResponse(
      htmlPage(`<h1>Token response not JSON</h1><pre>${raw.slice(0, 2000)}</pre>`),
      { status: 502, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  if (!tokenRes.ok) {
    return new NextResponse(
      htmlPage(`<h1>Token exchange failed (${tokenRes.status})</h1><pre>${raw}</pre><p class="warn">Check that SPOTIFY_REDIRECT_URI matches the Redirect URI in Spotify Dashboard exactly (including https, path, no trailing slash mismatch).</p>`),
      { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  const refresh = json.refresh_token
  if (!refresh) {
    return new NextResponse(
      htmlPage(
        `<h1>No refresh_token in response</h1><pre>${JSON.stringify(json, null, 2)}</pre><p class="warn">Try again with show_dialog — or revoke app access at <a href="https://www.spotify.com/account/apps/">Spotify account apps</a> and re-run /api/spotify/auth.</p>`
      ),
      { status: 422, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  return new NextResponse(
    htmlPage(`<h1>Success — copy this into Vercel (or .env.local)</h1>
<p>Add as environment variable <strong>SPOTIFY_REFRESH_TOKEN</strong> (then redeploy).</p>
<pre>SPOTIFY_REFRESH_TOKEN=${refresh}</pre>
<p class="warn">Treat this like a password. Don’t share screenshots publicly. After saving in Vercel, you don’t need to open this page again.</p>
<p><a href="/">← Back to portfolio</a></p>`),
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}
