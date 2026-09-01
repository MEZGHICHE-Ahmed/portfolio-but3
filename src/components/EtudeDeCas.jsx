import { Link } from 'react-router-dom'
import {
  PageHead, Enter, SectionTitle, Sommaire, Indexed, Renvoi, Puce,
} from './Primitives'

/* ---------------------------------------------------------------------------
   Gabarit d'étude de cas. Les deux études partagent la charpente ; le contenu
   est propre à chaque projet. `accent` teinte toute la page.
--------------------------------------------------------------------------- */

export function EnTete(props) {
  return <PageHead {...props} title={props.titre} />
}

export function Corps({ sections, accent, children }) {
  return (
    <div className="mt-14 gap-12 lg:grid lg:grid-cols-[13rem_1fr] xl:gap-16">
      <Sommaire sections={sections} accent={accent} />
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export function Section({ id, n, titre, children }) {
  return (
    <section id={id} className="mt-20 scroll-mt-28 first:mt-0">
      <SectionTitle eyebrow={n} title={titre} />
      <div className="mt-8">{children}</div>
    </section>
  )
}

export function P({ children }) {
  return <p className="measure mt-5 text-[1rem] leading-[1.72] text-fg-2 first:mt-0">{children}</p>
}

/** Encadré de décision : le point réflexif d'une section. */
export function Encadre({ titre, accent, children }) {
  const teinte = accent || 'var(--color-brand)'
  return (
    <Enter>
      <div
        className="mt-8 rounded-2xl border p-7"
        style={{ borderColor: teinte, background: `color-mix(in srgb, ${teinte} 8%, transparent)` }}
      >
        <p className="code font-semibold" style={{ color: teinte }}>{titre}</p>
        <div className="measure mt-3 text-[0.98rem] leading-[1.7] text-fg-2">{children}</div>
      </div>
    </Enter>
  )
}

/** Liste de couples terme / description, en cartes. */
export function Definitions({ items }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map(([terme, desc], i) => (
        <Enter key={terme} delay={i * 0.04}>
          <div className="card h-full p-5">
            <h3 className="text-[0.98rem] font-bold">{terme}</h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-fg-2">{desc}</p>
          </div>
        </Enter>
      ))}
    </div>
  )
}

/** Suite d'étapes numérotées. */
export function Etapes({ items, accent }) {
  return (
    <ol className="mt-8 space-y-3">
      {items.map(([nom, desc], i) => (
        <Enter key={nom} delay={i * 0.03} as="li" className="card p-5">
          <Indexed n={String(i + 1).padStart(2, '0')} accent={accent}>
            <p className="text-[0.98rem] font-bold">{nom}</p>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-fg-2">{desc}</p>
          </Indexed>
        </Enter>
      ))}
    </ol>
  )
}

/** Problème rencontré : constat, puis réponse apportée. */
export function Incidents({ items, accent }) {
  const teinte = accent || 'var(--color-brand)'
  return (
    <ol className="mt-8 space-y-4">
      {items.map(([titre, cause, reponse], i) => (
        <Enter key={titre} delay={i * 0.04} as="li" className="card p-6">
          <div className="flex items-start gap-4">
            <span
              className="code mt-0.5 shrink-0 rounded-md px-2 py-1 font-semibold"
              style={{ background: `color-mix(in srgb, ${teinte} 14%, transparent)`, color: teinte }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="text-[1.05rem] font-bold leading-snug">{titre}</h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="code text-fg-3">Constat</dt>
                  <dd className="mt-1 text-[0.93rem] leading-relaxed text-fg-2">{cause}</dd>
                </div>
                <div>
                  <dt className="code" style={{ color: teinte }}>Réponse</dt>
                  <dd className="mt-1 text-[0.93rem] leading-relaxed text-fg-2">{reponse}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Enter>
      ))}
    </ol>
  )
}

const COULEUR = { C1: 'var(--color-c1)', C2: 'var(--color-c2)', C6: 'var(--color-c6)' }

/** Rattachement aux compétences, en fin d'étude. */
export function Rattachement({ id, n, competences }) {
  return (
    <Section id={id} n={n} titre="Les compétences mobilisées">
      <div className="grid gap-5 lg:grid-cols-3">
        {competences.map((c, i) => {
          const teinte = COULEUR[c.code] || 'var(--color-brand)'
          return (
            <Enter key={c.code} delay={i * 0.05}>
              <Link
                to={`/competences/${c.slug}`}
                className="card-link group flex h-full flex-col p-6"
                style={{ borderTop: `3px solid ${teinte}` }}
              >
                <span className="code font-semibold" style={{ color: teinte }}>{c.code}</span>
                <h3 className="mt-3 text-[1.05rem] font-bold leading-snug">{c.titre}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {c.points.map((p) => (
                    <Puce key={p} accent={teinte}>{p}</Puce>
                  ))}
                </ul>
                <p
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold"
                  style={{ color: teinte }}
                >
                  Voir la compétence
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </Enter>
          )
        })}
      </div>
    </Section>
  )
}

/** Renvois de fin d'étude. */
export function Suite({ liens }) {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Suite" title="Continuer la visite" />
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {liens.map((l) => (
          <Renvoi key={l.to} {...l} />
        ))}
      </div>
    </section>
  )
}

/**
 * Figure — illustration d'étude de cas.
 * Tant que `src` est absent, un cadre nomme l'illustration attendue : c'est un
 * repère de production, volontairement visible.
 */
export function Figure({ n, src, alt, legende, attendu, ratio = '16 / 10' }) {
  return (
    <Enter as="figure" className="mt-10">
      {src ? (
        <img
          src={src}
          alt={alt || legende}
          className="w-full rounded-2xl border border-line"
          loading="lazy"
        />
      ) : (
        <div
          role="img"
          aria-label={`Illustration à fournir — ${attendu}`}
          style={{ aspectRatio: ratio }}
          className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line-2 bg-surface/60 p-8 text-center"
        >
          <span className="chip">Illustration à intégrer</span>
          <p className="max-w-[46ch] text-[0.9rem] leading-relaxed text-fg-3">{attendu}</p>
        </div>
      )}
      <figcaption className="mt-3 flex gap-3 text-[0.85rem] leading-relaxed text-fg-3">
        <span className="code shrink-0">Fig.&nbsp;{n}</span>
        <span>{legende}</span>
      </figcaption>
    </Enter>
  )
}
