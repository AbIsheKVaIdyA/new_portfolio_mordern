import { NextResponse } from 'next/server'

import { getSpotifyRedirectUri } from '@/lib/spotify-redirect'

export const dynamic = 'force-dynamic'

const SCOPES = ['user-read-currently-playing', 'user-read-playback-state'].join(' ')

/**
 * Step 1: Visit this URL on your deployed site.
 * Add the exact redirect URI (see getSpotifyRedirectUri) to Spotify Dashboard.
 * You'll be sent to Spotify, then back to /api/spotify/callback with a refresh token to copy.
 */
export async function GET(request: Request) {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const redirectUri = getSpotifyRedirectUri(request)
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

  if (!clientId) {
    return NextResponse.json(
      {
        error:
          'Set SPOTIFY_CLIENT_ID in env. Optionally set SPOTIFY_REDIRECT_URI to match Spotify Dashboard exactly (e.g. https://yourdomain.com/api/spotify/callback); if omitted, origin + /api/spotify/callback is used.',
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
