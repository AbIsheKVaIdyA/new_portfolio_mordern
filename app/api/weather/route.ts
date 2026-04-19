import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/** Dallas, TX defaults — override with WEATHER_LAT / WEATHER_LON in .env */
const DEFAULT_LAT = 32.7767
const DEFAULT_LON = -96.797

export async function GET() {
  const lat = Number(process.env.WEATHER_LAT) || DEFAULT_LAT
  const lon = Number(process.env.WEATHER_LON) || DEFAULT_LON
  const label = process.env.WEATHER_LABEL || 'Dallas, TX'

  try {
    const url = new URL('https://api.open-meteo.com/v1/forecast')
    url.searchParams.set('latitude', String(lat))
    url.searchParams.set('longitude', String(lon))
    url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m')
    url.searchParams.set('timezone', 'auto')

    const res = await fetch(url.toString())

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Weather API error' }, { status: 502 })
    }

    const data = await res.json()
    const c = data.current

    return NextResponse.json(
      {
        ok: true,
        label,
        temperatureC: c?.temperature_2m,
        humidity: c?.relative_humidity_2m,
        windKmh: c?.wind_speed_10m,
        code: c?.weather_code,
        time: c?.time,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
        },
      }
    )
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'Weather fetch failed' }, { status: 500 })
  }
}
