import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { List, X } from '@phosphor-icons/react'
import BrandLogo from './BrandLogo'

const links = [
  { to: '/', key: 'home' as const },
  { to: '/services', key: 'services' as const },
  { to: '/about', key: 'about' as const },
  { to: '/contact', key: 'contact' as const },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-2 text-lg" onClick={closeMenu}>
          <BrandLogo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ to, key }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 font-headline text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-surface-container text-on-surface'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                  }`
                }
              >
                {t(`nav.${key}`)}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
          className="inline-flex items-center justify-center rounded-full border border-outline p-2 text-on-surface md:hidden"
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-outline-variant bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map(({ to, key }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-md px-4 py-3 font-headline text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-surface-container text-on-surface'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                    }`
                  }
                >
                  {t(`nav.${key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
