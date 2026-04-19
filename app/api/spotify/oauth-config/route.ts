import { NextResponse } from 'next/server'

import { getSpotifyRedirectUri } from '@/lib/spotify-redirect'

export const dynamic = 'force-dynamic'

/**
 * GET — returns the redirect URI used for OAuth (no secrets).
 * Use this to copy the exact string into Spotify Dashboard → Redirect URIs.
 */
export async function GET(request: Request) {
  const redirectUri = getSpotifyRedirectUri(request)
  return NextResponse.json({
    redirectUri,
    hasClientId: Boolean(process.env.SPOTIFY_CLIENT_ID?.trim()),
    hint:
      'In Spotify Developer Dashboard → your app → Settings: add redirectUri under "Redirect URIs", click Add, then Save. It must match character-for-character (https, www vs apex, path, no trailing slash).',
  })
}
