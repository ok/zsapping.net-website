import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { breadcrumbSchema, SITE_URL } from '../lib/schema'

export default function Privacy() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t('pages.privacy.title')}
        description={t('pages.privacy.description')}
        path="/legal/privacy"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Legal', url: `${SITE_URL}/legal/privacy` },
            { name: 'Privacy', url: `${SITE_URL}/legal/privacy` },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t('pages.privacy.headline')}
          </h1>
          <p className="mt-3 text-sm text-on-surface-variant">{t('pages.privacy.updated')}</p>

          <div className="mt-10 space-y-10 text-on-surface-variant">
            <p className="text-lg leading-relaxed">{t('pages.privacy.body.intro')}</p>

            <LegalSection
              h={t('pages.privacy.body.what.h')}
              p={t('pages.privacy.body.what.p')}
            />
            <LegalSection
              h={t('pages.privacy.body.email.h')}
              p={t('pages.privacy.body.email.p')}
            />
            <LegalSection
              h={t('pages.privacy.body.cookies.h')}
              p={t('pages.privacy.body.cookies.p')}
            />
            <LegalSection
              h={t('pages.privacy.body.contact.h')}
              p={t('pages.privacy.body.contact.p')}
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
