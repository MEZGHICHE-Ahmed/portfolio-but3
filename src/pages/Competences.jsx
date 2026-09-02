import { Link } from 'react-router-dom'
import { competences, toutesLesCompetences, competencesNiveau2 } from '../data/competences'
import { PageHead, Enter, SectionTitle } from '../components/Primitives'

const COULEUR = { c1: 'var(--color-c1)', c2: 'var(--color-c2)', c6: 'var(--color-c6)' }

/** Jauge de niveau : trois segments, remplis jusqu'au niveau atteint. */
function Jauge({ niveau, accent }) {
  return (
    <div className="flex gap-1" aria-hidden>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className="h-1.5 w-7 rounded-full"
          style={{ background: n <= niveau ? accent : 'var(--color-line)' }}
        />
      ))}
    </div>
  )
}

export default function Competences() {
  return (
    <div className="sheet pb-8">
      <PageHead
        ariane={[['Accueil', '/'], ['Compétences', null]]}
        kicker="Formation"
        title="Les compétences de mon diplôme"
        lead="Le BUT Informatique s’articule autour de six compétences, développées sur trois ans. Dans mon parcours, trois d’entre elles sont poussées jusqu’au niveau le plus avancé."
        meta={[
          ['Diplôme', 'BUT Informatique'],
          ['Spécialité', 'Réalisation d’applications'],
          ['Compétences', '6'],
          ['Au niveau avancé', '3'],
        ]}
      />

      {/* Les trois compétences principales */}
      <section className="py-16">
        <SectionTitle
          eyebrow="Spécialisation"
          title="Mes trois compétences principales"
          lead="Pour chacune : les savoir-faire visés, mes projets qui les illustrent, et mon analyse."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {competences.map((c, i) => (
            <Enter key={c.id} delay={i * 0.07}>
              <Link
                to={`/competences/${c.slug}`}
                className="card-link group flex h-full flex-col p-7"
                style={{ borderTop: `3px solid ${COULEUR[c.id]}` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="code font-semibold" style={{ color: COULEUR[c.id] }}>
                    {c.niveau}
                  </span>
                  <Jauge niveau={c.niveauNum} accent={COULEUR[c.id]} />
                </div>

                <h3 className="mt-5 text-[1.3rem] font-bold leading-snug">{c.titre}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-2">{c.tagline}</p>

                <ul className="mt-6 space-y-3 border-t border-line pt-5">
                  {c.apprentissages.map((a) => (
                    <li key={a} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[0.55em] size-1.5 shrink-0 rounded-full"
                        style={{ background: COULEUR[c.id] }}
                      />
                      <span className="text-[0.88rem] leading-snug text-fg-2">{a}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold"
                  style={{ color: COULEUR[c.id] }}
                >
                  Voir le détail et {c.traces.length} projets
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </Enter>
          ))}
        </div>
      </section>

      {/* Vue d'ensemble */}
      <section className="py-16">
        <SectionTitle
          eyebrow="Vue d’ensemble"
          title="Les six compétences du diplôme"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toutesLesCompetences.map((c, i) => {
            const teinte = c.focus ? COULEUR[c.id] : 'var(--color-fg-3)'
            const inner = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="code font-semibold" style={{ color: teinte }}>
                    {c.niveau}
                  </span>
                  <Jauge niveau={c.niveauNum} accent={teinte} />
                </div>
                <h3 className="mt-4 text-[1.02rem] font-bold leading-snug">{c.titre}</h3>
                <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-fg-3">
                  {c.plain.replace(/^Niveau \d — /, '')}
                </p>
                {c.focus && (
                  <p className="mt-4 text-[0.85rem] font-semibold" style={{ color: teinte }}>
                    Voir le détail →
                  </p>
                )}
              </>
            )

            return (
              <Enter key={c.titre} delay={(i % 3) * 0.05}>
                {c.focus ? (
                  <Link to={`/competences/${c.slug}`} className="card-link flex h-full flex-col p-6">
                    {inner}
                  </Link>
                ) : (
                  <div className="card flex h-full flex-col p-6 opacity-75">{inner}</div>
                )}
              </Enter>
            )
          })}
        </div>
      </section>

      {/* Compétences complémentaires */}
      <section className="py-16">
        <SectionTitle
          eyebrow="Complémentaire"
          title="Ce que je mobilise aussi au quotidien"
          lead="Ces trois compétences ne sont pas ma spécialisation, mais elles interviennent dans chacun de mes projets."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {competencesNiveau2.map((c, i) => (
            <Enter key={c.titre} delay={i * 0.06}>
              <article className="card flex h-full flex-col p-6">
                <h3 className="text-[1.05rem] font-bold leading-snug">{c.titre}</h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-fg-2">
                  {c.reinvesti}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {c.ressources.map((r) => (
                    <span key={r} className="tag">{r}</span>
                  ))}
                </div>
              </article>
            </Enter>
          ))}
        </div>
      </section>
    </div>
  )
}
