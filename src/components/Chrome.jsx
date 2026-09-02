import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profil, contact } from '../data/site'

const NAV = [
  ['/competences', 'Compétences'],
  ['/realisations', 'Réalisations'],
  ['/parcours', 'Parcours'],
  ['/profil', 'Profil'],
]

/** Monogramme : les initiales à l'encre, comme un cachet. */
function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className="grid size-9 place-items-center rounded-md text-[0.82rem] font-bold"
        style={{ background: 'var(--color-fg)', color: 'var(--color-bg)' }}
      >
        {profil.initiales}
      </span>
      <span className="hidden text-[0.95rem] font-bold sm:block">{profil.nomComplet}</span>
    </Link>
  )
}

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [avancee, setAvancee] = useState(0)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Avancement de lecture, affiché en filet sous la barre.
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setAvancee(h > 0 ? Math.min(1, window.scrollY / h) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="sheet flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `rounded-md px-4 py-2 text-[0.9rem] font-medium transition-colors ${
                      isActive
                        ? 'bg-surface-2 text-fg'
                        : 'text-fg-2 hover:bg-surface/70 hover:text-fg'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`mailto:${contact.email}`} className="btn btn-primary hidden lg:inline-flex">
          Me contacter
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="grid size-10 place-items-center rounded-md border border-line bg-surface md:hidden"
        >
          <span aria-hidden className="text-[1.05rem]">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav id="nav-mobile" className="border-t border-line bg-surface md:hidden">
          <ul className="sheet py-3">
            {NAV.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block rounded-md px-4 py-3 text-[0.98rem] font-medium ${
                      isActive ? 'bg-surface-2 text-fg' : 'text-fg-2'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="px-4 pt-3">
              <a href={`mailto:${contact.email}`} className="btn btn-primary w-full">
                Me contacter
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-0.5 origin-left transition-transform duration-150"
        style={{
          transform: `scaleX(${avancee})`,
          background: 'var(--color-brand)',
        }}
      />
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-28 border-t border-line bg-surface/40">
      <div className="sheet grid gap-10 py-14 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-[1.15rem] font-bold">{profil.nomComplet}</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-2">
            Portfolio de fin de BUT Informatique
            <br />
            IUT de Créteil-Vitry · 2023–2026
          </p>
        </div>

        <ul className="flex flex-wrap gap-3">
          <li>
            <a href={`mailto:${contact.email}`} className="chip hover:text-fg">Courriel</a>
          </li>
          {contact.linkedin && (
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="chip hover:text-fg">
                LinkedIn
              </a>
            </li>
          )}
          {contact.github && (
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer" className="chip hover:text-fg">
                GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}
