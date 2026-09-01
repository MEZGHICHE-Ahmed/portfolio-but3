import { useParams, Link, Navigate } from 'react-router-dom'
import { competences, competenceBySlug } from '../data/competences'
import {
  PageHead, Enter, SectionTitle, Sommaire, Indexed, Renvoi, Puce,
} from '../components/Primitives'

const COULEUR = { c1: 'var(--color-c1)', c2: 'var(--color-c2)', c6: 'var(--color-c6)' }

export default function CompetenceDetail() {
  const { slug } = useParams()
  const c = competenceBySlug(slug)
  if (!c) return <Navigate to="/competences" replace />

  const accent = COULEUR[c.id]
  const i = competences.findIndex((x) => x.id === c.id)
  const next = competences[(i + 1) % competences.length]

  const sections = [
    { id: 'objectif', titre: 'L’objectif' },
    ...(c.cadrage ? [{ id: 'cadrage', titre: 'Une précision importante' }] : []),
    { id: 'projets', titre: 'Mes projets' },
    { id: 'bilan', titre: 'Bilan et progression' },
  ]

  return (
    <article className="sheet pb-8">
      <PageHead
        ariane={[['Accueil', '/'], ['Compétences', '/competences'], [c.code, null]]}
        kicker={`${c.code} · Niveau ${c.niveauNum} sur 3`}
        title={c.titre}
        lead={c.tagline}
        accent={accent}
        meta={[
          ['Intitulé officiel', c.titreOfficiel],
          ['Savoir-faire visés', String(c.apprentissages.length)],
          ['Projets associés', String(c.traces.length)],
          ['Niveau atteint', `${c.niveauNum} · ${c.niveau}`],
        ]}
      />

      <div className="mt-14 gap-12 lg:grid lg:grid-cols-[13rem_1fr] xl:gap-16">
        <Sommaire sections={sections} accent={accent} />

        <div className="min-w-0">
          {/* ---------- Objectif ---------- */}
          <section id="objectif" className="scroll-mt-28">
            <SectionTitle eyebrow="L’objectif" title="Ce que cette compétence recouvre" />

            <p className="measure mt-7 text-[1.05rem] leading-[1.7] text-fg-2">{c.definition}</p>

            <div
              className="mt-8 rounded-2xl border p-6"
              style={{ borderColor: accent, background: `color-mix(in srgb, ${accent} 8%, transparent)` }}
            >
              <p className="code font-semibold" style={{ color: accent }}>
                Attendu en 3ᵉ année
              </p>
              <p className="mt-2 text-[1.08rem] font-semibold leading-snug">« {c.niveauTitre} »</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="card p-6">
                <h3 className="text-[1.02rem] font-bold">Les savoir-faire visés</h3>
                <ol className="mt-5 space-y-4">
                  {c.apprentissages.map((a, j) => (
                    <li key={a}>
                      <Indexed n={`0${j + 1}`} accent={accent}>
                        <span className="text-[0.95rem] leading-relaxed text-fg-2">{a}</span>
                      </Indexed>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card p-6">
                <h3 className="text-[1.02rem] font-bold">Dans quel cadre</h3>
                <ul className="mt-5 space-y-2.5">
                  {c.composantes.map((ce) => (
                    <Puce key={ce} accent={accent}>{ce}</Puce>
                  ))}
                </ul>

                <h3 className="mt-7 border-t border-line pt-6 text-[1.02rem] font-bold">
                  Situations concernées
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.casUsage.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Cadrage ---------- */}
          {c.cadrage && (
            <Enter as="section" id="cadrage" className="mt-20 scroll-mt-28">
              <div
                className="rounded-2xl border p-7"
                style={{ borderColor: accent, background: `color-mix(in srgb, ${accent} 8%, transparent)` }}
              >
                <p className="code font-semibold" style={{ color: accent }}>
                  Une précision importante
                </p>
                <p className="measure mt-3 text-[1rem] leading-[1.7] text-fg-2">{c.cadrage}</p>
              </div>
            </Enter>
          )}

          {/* ---------- Projets ---------- */}
          <section id="projets" className="mt-20 scroll-mt-28">
            <SectionTitle
              eyebrow="Mes projets"
              title="Comment je l’ai mise en pratique"
              lead="Pour chaque projet : ce que j’ai fait, pourquoi j’ai décidé ainsi, et ce que j’en retiens."
            />

            <div className="mt-10 space-y-5">
              {c.traces.map((t, j) => (
                <Enter key={t.titre} delay={j * 0.05}>
                  <article className="card p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="code rounded-md px-2 py-1 font-semibold"
                        style={{ background: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span className="chip">{t.type}</span>
                    </div>

                    <h3 className="mt-4 text-[1.25rem] font-bold leading-snug">{t.titre}</h3>
                    <p className="mt-1 text-[0.92rem] text-fg-3">{t.contexte}</p>

                    <p className="measure mt-5 text-[0.98rem] leading-[1.72] text-fg-2">
                      {t.analyse}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                      {t.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>

                    {t.preuves?.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        {t.preuves.map((p) =>
                          !p.url ? (
                            <span key={p.label} className="text-[0.86rem] text-fg-3">
                              {p.label}
                            </span>
                          ) : p.url.startsWith('/') ? (
                            <Link
                              key={p.label}
                              to={p.url}
                              className="text-[0.88rem] font-semibold"
                              style={{ color: accent }}
                            >
                              {p.label} →
                            </Link>
                          ) : (
                            <a
                              key={p.label}
                              href={p.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[0.88rem] font-semibold"
                              style={{ color: accent }}
                            >
                              {p.label} ↗
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </article>
                </Enter>
              ))}
            </div>
          </section>

          {/* ---------- Bilan ---------- */}
          <section id="bilan" className="mt-20 scroll-mt-28">
            <SectionTitle eyebrow="Bilan" title="Où j’en suis, et ce qui me reste" />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="card p-7">
                <h3 className="text-[1.05rem] font-bold">Ce que j’en retire</h3>
                <p className="mt-4 text-[1rem] leading-[1.7] text-fg-2">{c.bilan}</p>
              </div>

              <div className="card p-7">
                <h3 className="text-[1.05rem] font-bold">Ce que je veux approfondir</h3>
                <ol className="mt-4 space-y-3.5">
                  {c.pistes.map((p, j) => (
                    <li key={p}>
                      <Indexed n={`0${j + 1}`} accent={accent}>
                        <span className="text-[0.95rem] leading-relaxed text-fg-2">{p}</span>
                      </Indexed>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* ---------- Suite ---------- */}
          <section className="mt-20">
            <SectionTitle eyebrow="Suite" title="Continuer la visite" />
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <Renvoi
                to={`/competences/${next.slug}`}
                code={next.code}
                titre={next.titre}
                texte={next.tagline}
                action="Voir la compétence"
                accent={COULEUR[next.id]}
              />
              <Renvoi
                to="/realisations/mika"
                code="Projet"
                titre="Mika"
                texte="Une plateforme mobile, web et serveur, conçue seul et mise en production."
                action="Voir le projet"
              />
              <Renvoi
                to="/realisations/coppelis"
                code="Projet"
                titre="Agent vocal Coppelis"
                texte="Un agent téléphonique qui décide de l’accès à des sites industriels."
                action="Voir le projet"
              />
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
