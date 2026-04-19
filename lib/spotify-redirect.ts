/**
 * Spotify requires redirect_uri to match the Dashboard entry exactly for both
 * authorize and token exchange. Prefer SPOTIFY_REDIRECT_URI when set; otherwise
 * use the request origin so /auth and /callback stay in sync with the URL you visit.
 */
export function getSpotifyRedirectUri(request: Request): string {
  const explicit = process.env.SPOTIFY_REDIRECT_URI?.trim()
  if (explicit) return explicit
  const url = new URL(request.url)
  return `${url.origin}/api/spotify/callback`
}
