import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

type SpotifyTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}

type SpotifyCurrentlyPlaying = {
  is_playing: boolean
  item: {
    name: string
    external_urls: { spotify: string }
    artists: { name: string }[]
    album: {
      name: string
      images: { url: string; height: number }[]
    }
    duration_ms: number
  } | null
}

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret) {
    return NextResponse.json({
      ok: false,
      configured: false,
      message: 'Add SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET',
    })
  }

  if (!refreshToken) {
    return NextResponse.json({
      ok: false,
      configured: false,
      needsRefreshToken: true,
      message:
        'Open /api/spotify/auth on your deployed site once to get SPOTIFY_REFRESH_TOKEN (see .env.example).',
      setupPath: '/api/spotify/auth',
    })
  }

  try {
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    })

    if (!tokenRes.ok) {
      const err = await tokenRes.text()
      console.error('Spotify token error', tokenRes.status, err)
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          error: 'Spotify token refresh failed — check refresh token and app settings',
        },
        { status: 401 }
      )
    }

    const tokenJson = (await tokenRes.json()) as SpotifyTokenResponse
    const accessToken = tokenJson.access_token

    const npRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (npRes.status === 204) {
      return NextResponse.json({
        ok: true,
        configured: true,
        playing: false,
        message: 'Nothing playing right now',
      })
    }

    if (!npRes.ok) {
      return NextResponse.json({
        ok: true,
        configured: true,
        playing: false,
        message: 'Playback unavailable',
      })
    }

    const np = (await npRes.json()) as SpotifyCurrentlyPlaying
    const item = np.item

    if (!item) {
      return NextResponse.json({ ok: true, configured: true, playing: false })
    }

    const image = item.album.images?.[0]?.url || item.album.images?.[1]?.url || null

    return NextResponse.json(
      {
        ok: true,
        configured: true,
        playing: np.is_playing,
        track: {
          name: item.name,
          artists: item.artists.map((a) => a.name).join(', '),
          album: item.album.name,
          url: item.external_urls.spotify,
          image,
        },
      },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'Spotify request failed' }, { status: 500 })
  }
}
