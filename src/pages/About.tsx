import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { breadcrumbSchema, SITE_URL } from '../lib/schema'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t('pages.about.title')}
        description={t('pages.about.description')}
        path="/about"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'About', url: `${SITE_URL}/about` },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-wider text-primary">
            {t('pages.about.eyebrow')}
          </span>
          <h1 className="mt-4 font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t('pages.about.headline')}
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-on-surface-variant">
            <p>{t('pages.about.body.p1')}</p>
            <p>{t('pages.about.body.p2')}</p>
            <p>{t('pages.about.body.p3')}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
