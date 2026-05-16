import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="grid-backdrop absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-40 text-center sm:px-8 sm:pb-32 sm:pt-48 md:pt-56">
        <span className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container-low px-3 py-1 font-headline text-xs font-medium uppercase tracking-wider text-on-surface-variant">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px] shadow-primary-glow" />
          {t('hero.eyebrow')}
        </span>

        <h1 className="mt-8 font-headline text-5xl font-extrabold leading-[1.05] tracking-tight text-on-surface sm:text-6xl md:text-7xl">
          {t('hero.headline.lead')}{' '}
          <span className="brand-accent">{t('hero.headline.accent')}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant sm:text-xl">
          {t('hero.subhead')}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/services" className="btn-primary">
            {t('hero.ctaPrimary')}
            <ArrowRight size={18} weight="bold" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            <EnvelopeSimple size={18} weight="bold" />
            {t('hero.ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  )
}
