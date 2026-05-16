import { useTranslation } from 'react-i18next'
import { EnvelopeSimple } from '@phosphor-icons/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { breadcrumbSchema, SITE_URL } from '../lib/schema'

export default function Contact() {
  const { t } = useTranslation()
  const email = t('pages.contact.email')
  return (
    <>
      <Seo
        title={t('pages.contact.title')}
        description={t('pages.contact.description')}
        path="/contact"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Contact', url: `${SITE_URL}/contact` },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <section className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-wider text-primary">
            {t('pages.contact.eyebrow')}
          </span>
          <h1 className="mt-4 font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t('pages.contact.headline')}
          </h1>
          <p className="mt-5 text-lg text-on-surface-variant">{t('pages.contact.body')}</p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={`mailto:${email}`} className="btn-primary">
              <EnvelopeSimple size={18} weight="bold" />
              {t('pages.contact.emailCta')}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-mono text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
