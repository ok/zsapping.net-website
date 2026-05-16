import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-variant bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_repeat(3,_1fr)]">
        <div>
          <Link to="/" className="text-xl">
            <BrandLogo />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-on-surface-variant">
            {t('footer.tagline')}
          </p>
        </div>

        <FooterColumn title={t('footer.columns.site')}>
          <FooterLink to="/">{t('nav.home')}</FooterLink>
          <FooterLink to="/services">{t('nav.services')}</FooterLink>
          <FooterLink to="/about">{t('nav.about')}</FooterLink>
          <FooterLink to="/contact">{t('nav.contact')}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t('footer.columns.services')}>
          <FooterLink to="/services#bitcoin">{t('footer.services.bitcoin')}</FooterLink>
          <FooterLink to="/services#nostr">{t('footer.services.nostr')}</FooterLink>
          <FooterLink to="/services#relay">{t('footer.services.relay')}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t('footer.columns.legal')}>
          <FooterLink to="/legal/privacy">{t('footer.legal.privacy')}</FooterLink>
          <FooterLink to="/legal/terms">{t('footer.legal.terms')}</FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-outline-variant">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-on-surface-variant sm:px-8">
          {t('footer.copyright', { year })}
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-headline text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-on-surface transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  )
}
