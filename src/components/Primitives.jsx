import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ---------------------------------------------------------------------------
   Briques de mise en page communes à toutes les pages.
--------------------------------------------------------------------------- */

/** Surtitre de section : filet coloré + libellé en capitales. */
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

/** Titre de section, avec surtitre et chapô optionnels. */
export function SectionTitle({ eyebrow, title, lead, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold">{title}</h2>
      {lead && <p className="measure mt-4 text-[1.02rem] text-fg-2">{lead}</p>}
    </div>
  )
}

/** Apparition au défilement : opacité + léger décalage, une seule fois. */
export function Enter({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(14px)',
        transition: `opacity .55s ease ${delay}s, transform .55s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Fil d'Ariane. */
export function Ariane({ items }) {
  return (
    <nav aria-label="Fil d’Ariane">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.84rem] text-fg-3">
        {items.map(([label, to], i) => (
          <li key={label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-line-2">/</span>}
            {to ? (
              <Link to={to} className="transition-colors hover:text-fg">{label}</Link>
            ) : (
              <span aria-current="page" className="text-fg-2">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * En-tête de page : fil d'Ariane, surtitre, titre, chapô, et une rangée de
 * repères chiffrés. `accent` colore le surtitre (couleur de la compétence).
 */
export function PageHead({ ariane, kicker, title, lead, meta, accent }) {
  return (
    <header className="pt-10 sm:pt-14">
      {ariane && <Ariane items={ariane} />}

      {kicker && (
        <p className="eyebrow mt-7" style={accent ? { color: accent } : undefined}>
          {kicker}
        </p>
      )}

      <h1 className="mt-5 text-[clamp(2.1rem,5.4vw,3.5rem)] font-bold leading-[1.08]">
        {title}
      </h1>

      {lead && <p className="measure mt-6 text-[1.1rem] leading-[1.62] text-fg-2">{lead}</p>}

      {meta && (
        <dl className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k} className="card-2 px-5 py-4">
              <dt className="code text-fg-3">{k}</dt>
              <dd className="mt-1.5 text-[0.95rem] font-medium leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  )
}

/** Entrée numérotée : pastille à gauche, contenu à droite. */
export function Indexed({ n, children, accent, className = '' }) {
  return (
    <div className={`indexed ${className}`}>
      <span
        className="code pt-[0.15em] font-semibold"
        style={{ color: accent || 'var(--color-brand)' }}
      >
        {n}
      </span>
      <div>{children}</div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Sommaire d'une page longue : fixé dans la marge sur grand écran, replié en
   bandeau sur petit écran. Surligne la section en cours de lecture.
--------------------------------------------------------------------------- */
export function Sommaire({ sections, accent }) {
  const [actif, setActif] = useState(sections[0]?.id)
  const [ouvert, setOuvert] = useState(false)
  const teinte = accent || 'var(--color-brand)'

  useEffect(() => {
    const cibles = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!cibles.length) return

    const onScroll = () => {
      const limite = 150
      let courant = cibles[0].id
      for (const el of cibles) {
        if (el.getBoundingClientRect().top <= limite) courant = el.id
        else break
      }
      setActif(courant)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <>
      {/* Grand écran */}
      <nav
        aria-label="Sommaire de la page"
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
      >
        <p className="code text-fg-3">Sommaire</p>
        <ol className="mt-4 space-y-1">
          {sections.map((s, i) => {
            const on = s.id === actif
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? 'true' : undefined}
                  className="flex gap-2.5 rounded-lg px-3 py-2 text-[0.85rem] leading-snug transition-colors"
                  style={
                    on
                      ? { background: 'var(--color-surface-2)', color: teinte }
                      : { color: 'var(--color-fg-3)' }
                  }
                >
                  <span className="code shrink-0 pt-[0.1em] opacity-70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s.titre}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Petit écran */}
      <nav
        aria-label="Sommaire de la page"
        className="sticky top-16 z-40 mb-8 lg:hidden"
      >
        <div className="card overflow-hidden">
          <button
            type="button"
            onClick={() => setOuvert((v) => !v)}
            aria-expanded={ouvert}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          >
            <span className="min-w-0">
              <span className="code block text-fg-3">Sommaire</span>
              <span className="block truncate text-[0.9rem] font-medium">
                {sections.find((s) => s.id === actif)?.titre}
              </span>
            </span>
            <span aria-hidden className="code shrink-0 text-fg-3">{ouvert ? '▲' : '▼'}</span>
          </button>

          {ouvert && (
            <ol className="border-t border-line px-2 py-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOuvert(false)}
                    className="flex gap-2.5 rounded-lg px-2 py-2 text-[0.9rem]"
                    style={{ color: s.id === actif ? teinte : 'var(--color-fg-2)' }}
                  >
                    <span className="code shrink-0 pt-[0.15em] text-fg-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{s.titre}</span>
                  </a>
                </li>
              ))}
            </ol>
          )}
        </div>
      </nav>
    </>
  )
}

/** Carte de renvoi : un bloc cliquable, lisible d'un coup d'œil. */
export function Renvoi({ to, code, titre, texte, action = 'Consulter', accent }) {
  const teinte = accent || 'var(--color-brand)'
  return (
    <Link to={to} className="card-link group flex h-full flex-col p-6">
      {code && (
        <p className="code font-semibold" style={{ color: teinte }}>
          {code}
        </p>
      )}
      <h3 className="mt-2.5 text-[1.1rem] font-bold leading-snug">{titre}</h3>
      {texte && <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-fg-2">{texte}</p>}
      <p
        className="mt-5 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold"
        style={{ color: teinte }}
      >
        {action}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </p>
    </Link>
  )
}

/** Puce de liste colorée. */
export function Puce({ children, accent }) {
  return (
    <li className="flex gap-3 text-[0.95rem] leading-relaxed text-fg-2">
      <span
        aria-hidden
        className="mt-[0.6em] size-1.5 shrink-0 rounded-full"
        style={{ background: accent || 'var(--color-brand)' }}
      />
      <span>{children}</span>
    </li>
  )
}
