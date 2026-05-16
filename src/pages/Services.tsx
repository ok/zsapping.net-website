import { useTranslation } from 'react-i18next'
import { CurrencyBtc, Broadcast, HardDrives } from '@phosphor-icons/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { breadcrumbSchema, SITE_URL } from '../lib/schema'

const services = [
  { id: 'bitcoin', Icon: CurrencyBtc },
  { id: 'nostr', Icon: Broadcast },
  { id: 'relay', Icon: HardDrives },
] as const

export default function Services() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t('pages.services.title')}
        description={t('pages.services.description')}
        path="/services"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Services', url: `${SITE_URL}/services` },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <span className="font-headline text-xs font-semibold uppercase tracking-wider text-primary">
              {t('pages.services.eyebrow')}
            </span>
            <h1 className="mt-4 font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {t('pages.services.headline')}
            </h1>
            <p className="mt-5 text-lg text-on-surface-variant">
              {t('pages.services.subhead')}
            </p>
          </header>

          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map(({ id, Icon }) => (
              <li
                key={id}
                id={id}
                className="ambient-shadow rounded-2xl bg-surface-container-low p-7 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={24} weight="bold" />
                </span>
                <h2 className="mt-5 font-headline text-xl font-bold tracking-tight">
                  {t(`pages.services.items.${id}.name`)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {t(`pages.services.items.${id}.summary`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
