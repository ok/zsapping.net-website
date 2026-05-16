import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

export default function BrandLogo({ className = '' }: Props) {
  const { t } = useTranslation()
  return (
    <span
      className={`font-headline font-extrabold tracking-tight text-on-surface ${className}`}
    >
      {t('brand')}
      <span className="brand-accent">{t('brandSuffix')}</span>
    </span>
  )
}
