import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SCOPES = ['user-read-currently-playing', 'user-read-playback-state'].join(' ')

/**
 * Step 1: Visit this URL on your deployed site (after setting SPOTIFY_REDIRECT_URI).
 * You'll be sent to Spotify, then back to /api/spotify/callback with a refresh token to copy.
 */
export async function GET(request: Request) {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI?.trim()
  const setupSecret = process.env.SPOTIFY_SETUP_SECRET

  if (setupSecret) {
    const { searchParams } = new URL(request.url)
    if (searchParams.get('secret') !== setupSecret) {
      return NextResponse.json(
        { error: 'Invalid or missing ?secret= (must match SPOTIFY_SETUP_SECRET)' },
        { status: 401 }
      )
    }
  }

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      {
        error:
          'Set SPOTIFY_CLIENT_ID and SPOTIFY_REDIRECT_URI in env. Redirect URI must match Spotify Dashboard exactly (e.g. https://yourdomain.com/api/spotify/callback).',
      },
      { status: 500 }
    )
  }

  const url = new URL('https://accounts.spotify.com/authorize')
  url.searchParams.set('client_id', clientId)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('scope', SCOPES)
  url.searchParams.set('show_dialog', 'true')

  return NextResponse.redirect(url.toString())
}
