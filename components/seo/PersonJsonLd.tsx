import { profile } from '@/data/profile'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.abhishekvaidya.com'

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.identity.name,
    url: siteUrl,
    jobTitle: 'Full Stack Developer',
    alumniOf: profile.identity.school,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: [profile.identity.links.github, profile.identity.links.linkedin, profile.identity.links.medium],
    knowsAbout: ['React', 'Next.js', 'Cybersecurity', 'Cloud Security', 'TypeScript'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
