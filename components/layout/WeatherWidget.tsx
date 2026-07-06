'use client'

import { useEffect, useState } from 'react'
import { Cloud, CloudRain, CloudSun, Loader2, Sun } from 'lucide-react'
import { useViewMode } from '@/contexts/ViewModeContext'
import { cn } from '@/lib/utils'

type WeatherPayload = {
  ok: boolean
  label?: string
  temperatureC?: number
  code?: number
}

function weatherIcon(code?: number) {
  if (code == null) return Cloud
  if (code === 0) return Sun
  if (code <= 3) return CloudSun
  if (code <= 67) return CloudRain
  return Cloud
}

function toFahrenheit(celsius: number) {
  return Math.round((celsius * 9) / 5 + 32)
}

export function WeatherWidget({ className }: { className?: string }) {
  const { view } = useViewMode()
  const isSecurity = view === 'security'
  const [weather, setWeather] = useState<WeatherPayload | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch('/api/weather')
      .then((r) => r.json())
      .then((data: WeatherPayload) => {
        if (!cancelled) setWeather(data)
      })
      .catch(() => {
        if (!cancelled) setWeather({ ok: false })
      })

    return () => {
      cancelled = true
    }
  }, [])

  const Icon = weather?.ok ? weatherIcon(weather.code) : Cloud
  const city = weather?.label?.split(',')[0] ?? 'Dallas'

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] backdrop-blur-sm transition-colors sm:text-xs',
        isSecurity
          ? 'border-primary/25 bg-card/60 text-foreground'
          : 'border-neutral-200/80 bg-white/70 text-neutral-800',
        className
      )}
      title={weather?.label ?? 'Local weather'}
      aria-label={
        weather?.ok && weather.temperatureC != null
          ? `Weather in ${weather.label}: ${toFahrenheit(weather.temperatureC)} degrees Fahrenheit`
          : 'Loading weather'
      }
    >
      {!weather ? (
        <Loader2 className="size-3.5 animate-spin text-muted-foreground" aria-hidden />
      ) : (
        <Icon
          className={cn('size-3.5 shrink-0', isSecurity ? 'text-primary' : 'text-violet-600')}
          aria-hidden
        />
      )}
      {weather?.ok && weather.temperatureC != null ? (
        <>
          <span className="font-medium tabular-nums">{toFahrenheit(weather.temperatureC)}°F</span>
          <span
            className={cn(
              'hidden text-muted-foreground sm:inline',
              !isSecurity && 'text-neutral-500'
            )}
          >
            {city}
          </span>
        </>
      ) : weather?.ok === false ? (
        <span className="text-muted-foreground">—</span>
      ) : (
        <span className="text-muted-foreground">…</span>
      )}
    </div>
  )
}
