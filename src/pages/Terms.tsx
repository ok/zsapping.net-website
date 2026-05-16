import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { breadcrumbSchema, SITE_URL } from '../lib/schema'

export default function Terms() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t('pages.terms.title')}
        description={t('pages.terms.description')}
        path="/legal/terms"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Legal', url: `${SITE_URL}/legal/terms` },
            { name: 'Terms', url: `${SITE_URL}/legal/terms` },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t('pages.terms.headline')}
          </h1>
          <p className="mt-3 text-sm text-on-surface-variant">{t('pages.terms.updated')}</p>

          <div className="mt-10 space-y-10 text-on-surface-variant">
            <p className="text-lg leading-relaxed">{t('pages.terms.body.intro')}</p>

            <LegalSection h={t('pages.terms.body.use.h')} p={t('pages.terms.body.use.p')} />
            <LegalSection
              h={t('pages.terms.body.content.h')}
              p={t('pages.terms.body.content.p')}
            />
            <LegalSection
              h={t('pages.terms.body.warranty.h')}
              p={t('pages.terms.body.warranty.p')}
            />
            <LegalSection
              h={t('pages.terms.body.changes.h')}
              p={t('pages.terms.body.changes.p')}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

function LegalSection({ h, p }: { h: string; p: string }) {
  return (
    <section>
      <h2 className="font-headline text-xl font-bold tracking-tight text-on-surface">{h}</h2>
      <p className="mt-3 leading-relaxed">{p}</p>
    </section>
  )
}
