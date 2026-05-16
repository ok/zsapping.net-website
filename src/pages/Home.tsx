import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import { organizationSchema, websiteSchema } from '../lib/schema'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t('pages.home.title')}
        description={t('pages.home.description')}
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
