'use client'

import { useEffect, useState } from 'react'
import { Cloud, Github, Music2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type WeatherPayload = {
  ok: boolean
  label?: string
  temperatureC?: number
}

type SpotifyPayload = {
  ok: boolean
  configured?: boolean
  playing?: boolean
  track?: { name: string; artists: string; url: string; image: string | null }
  message?: string
}

type GitHubPayload = {
  ok: boolean
  profile?: { login: string; followers: number; publicRepos: number; htmlUrl: string; avatarUrl: string }
}

function SkeletonBar() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-[88px] animate-pulse rounded-xl border border-border/40 bg-muted/30"
        />
      ))}
    </div>
  )
}

export function SignalBar() {
  const [weather, setWeather] = useState<WeatherPayload | null>(null)
  const [spotify, setSpotify] = useState<SpotifyPayload | null>(null)
  const [github, setGithub] = useState<GitHubPayload | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const [w, s, g] = await Promise.all([
          fetch('/api/weather').then((r) => r.json()),
          fetch('/api/spotify').then((r) => r.json()),
          fetch('/api/github').then((r) => r.json()),
        ])
        if (!cancelled) {
          setWeather(w)
          setSpotify(s)
          setGithub(g)
        }
      } catch {
        if (!cancelled) {
          setWeather({ ok: false })
          setSpotify({ ok: false })
          setGithub({ ok: false })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) return <SkeletonBar />

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10 grid gap-3 sm:grid-cols-3"
    >
      {/* Weather — Open-Meteo, no key */}
      <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card/60 px-4 py-3 backdrop-blur-sm transition hover:border-primary/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="flex items-start gap-3">
          <Cloud className="mt-0.5 size-5 shrink-0 text-sky-400" aria-hidden />
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">env.weather</p>
            {weather?.ok && weather.temperatureC != null ? (
              <>
                <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                  {Math.round(weather.temperatureC)}°C
                </p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">{weather.label}</p>
              </>
            ) : (
              <p className="mt-1 font-mono text-xs text-muted-foreground">Signal unavailable</p>
            )}
          </div>
        </div>
      </div>

      {/* Spotify */}
      <a
        href={
          spotify?.playing && spotify.track?.url
            ? spotify.track.url
            : 'https://open.spotify.com/'
        }
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative block overflow-hidden rounded-xl border border-primary/20 bg-card/60 px-4 py-3 backdrop-blur-sm transition hover:border-primary/40',
          !spotify?.playing && 'pointer-events-auto'
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="flex items-start gap-3">
          {spotify?.playing && spotify.track?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spotify.track.image}
              alt=""
              className="size-12 shrink-0 rounded border border-border/50 object-cover"
            />
          ) : (
            <Music2 className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">spotify.now</p>
            {spotify?.configured === false ? (
              <p className="mt-1 font-mono text-[11px] leading-snug text-muted-foreground">
                Add Spotify env vars for live playback
              </p>
            ) : spotify?.playing && spotify.track ? (
              <>
                <p className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground">
                  {spotify.track.name}
                </p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">{spotify.track.artists}</p>
              </>
            ) : (
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {spotify?.message || 'Nothing playing'}
              </p>
            )}
          </div>
        </div>
      </a>

      {/* GitHub */}
      <a
        href={github?.profile?.htmlUrl || 'https://github.com/AbIsheKVaIdyA'}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card/60 px-4 py-3 backdrop-blur-sm transition hover:border-primary/40"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="flex items-start gap-3">
          {github?.ok && github.profile?.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={github.profile.avatarUrl}
              alt=""
              className="size-12 shrink-0 rounded-full border border-border/50"
            />
          ) : (
            <Github className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden />
          )}
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">github.live</p>
            {github?.ok && github.profile ? (
              <>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground">{github.profile.login}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {github.profile.followers} followers · {github.profile.publicRepos} repos
                </p>
              </>
            ) : (
              <p className="mt-1 font-mono text-xs text-muted-foreground">API unavailable</p>
            )}
          </div>
        </div>
      </a>
    </motion.div>
  )
}
