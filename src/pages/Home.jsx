import { Link } from 'react-router-dom'
import { profil, competencesTechniques, chiffresCles } from '../data/site'
import { projets } from '../data/projets'
import { experiences } from '../data/parcours'
import { competences } from '../data/competences'
import { Enter, SectionTitle, Renvoi, Puce } from '../components/Primitives'

const COULEUR = { c1: 'var(--color-c1)', c2: 'var(--color-c2)', c6: 'var(--color-c6)' }

export default function Home() {
  const vedettes = projets.filter((p) => p.vedette)
  const actuelle = experiences.find((e) => e.actuel)

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="sheet pb-16 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.06]">
              Ahmed Mezghiche,
              <br />
              <span className="text-gradient">développeur & apprenti cloud.</span>
            </h1>

            <p className="measure mt-7 text-[1.12rem] leading-[1.65] text-fg-2">
              Étudiant en 3ᵉ année de BUT Informatique à l'IUT de Créteil-Vitry, en alternance chez
              Cloud Inspire où je conçois et déploie des applications d'intelligence artificielle
              hébergées chez le client. Je porte mes projets de bout en bout : du besoin métier
              jusqu'à la mise en production.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/realisations" className="btn btn-primary">
                Voir mes projets →
              </Link>
              <Link to="/parcours" className="btn btn-ghost">
                Mon parcours
              </Link>
            </div>

            {/* Chiffres clés */}
            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {chiffresCles.map((c) => (
                <div key={c.label}>
                  <dt className="text-[1.9rem] font-bold leading-none text-gradient">
                    {c.valeur}
                  </dt>
                  <dd className="mt-2 text-[0.84rem] leading-snug text-fg-3">{c.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Carte d'identité */}
          <Enter delay={0.1}>
            <div className="card p-7">
              <div className="flex items-center gap-4">
                <span
                  className="grid size-16 shrink-0 place-items-center rounded-md text-[1.3rem] font-bold"
                  style={{ background: 'var(--color-fg)', color: 'var(--color-bg)' }}
                >
                  {profil.initiales}
                </span>
                <div className="min-w-0">
                  <p className="text-[1.05rem] font-bold">{profil.nomComplet}</p>
                  <p className="text-[0.9rem] text-fg-2">{profil.sousTitre}</p>
                </div>
              </div>

              <dl className="mt-7 space-y-4 border-t border-line pt-6">
                {[
                  ['Poste actuel', actuelle ? `${actuelle.titre.replace(' — Alternance', '')} · ${actuelle.lieu}` : '—'],
                  ['Formation', 'BUT Informatique — parcours A'],
                  ['Localisation', profil.localisation],
                  ['Poursuite', 'Cycle ingénieur — Télécom SudParis'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <dt className="code text-fg-3">{k}</dt>
                    <dd className="text-right text-[0.9rem] font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                {['Python', 'FastAPI', 'React Native', 'Vue.js', 'PostgreSQL', 'Docker', 'Ansible'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Enter>
        </div>
      </section>

      {/* ===================== PROJETS PHARES ===================== */}
      <section className="sheet py-20">
        <SectionTitle
          eyebrow="Projets"
          title="Ce que j’ai construit en entreprise"
          lead="Quatre missions menées en alternance chez Cloud Inspire — des produits en production aux preuves de concept éprouvées sur le terrain."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {vedettes.map((p, i) => {
            const Wrapper = p.etudeDeCas ? Link : 'div'
            const wrapperProps = p.etudeDeCas
              ? { to: p.etudeDeCas, className: 'card-link group flex h-full flex-col p-7' }
              : { className: 'card flex h-full flex-col p-7' }
            return (
              <Enter key={p.id} delay={i * 0.08}>
                <Wrapper {...wrapperProps}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip">{p.categorie}</span>
                    {p.enProduction && (
                      <span className="chip" style={{ color: 'var(--color-c6)' }}>
                        <span className="size-1.5 rounded-full bg-c6" /> En production
                      </span>
                    )}
                    {p.confidentiel && <span className="chip">Confidentiel</span>}
                  </div>

                  <h3 className="mt-5 text-[1.6rem] font-bold">{p.titre}</h3>
                  <p className="mt-1 text-[0.95rem] text-fg-3">{p.sousTitre}</p>
                  <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-fg-2">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.slice(0, 6).map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  {p.etudeDeCas && (
                    <p className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand">
                      Voir le projet
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  )}
                </Wrapper>
              </Enter>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/realisations" className="btn btn-ghost">
            Tous mes projets ({projets.length})
          </Link>
        </div>
      </section>

      {/* ===================== EXPÉRIENCE ===================== */}
      <section className="sheet py-20">
        <SectionTitle
          eyebrow="Expérience"
          title="Deux ans en entreprise"
          lead="D’une équipe constituée chez SNCF Voyageurs à l’autonomie complète chez Cloud Inspire."
        />

        <div className="mt-12 space-y-5">
          {experiences.map((e, i) => (
            <Enter key={e.titre} delay={i * 0.07}>
              <article className="card p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[1.25rem] font-bold">{e.titre.replace(' — Alternance', '')}</h3>
                      {e.actuel && (
                        <span className="chip" style={{ color: 'var(--color-c6)' }}>
                          <span className="size-1.5 rounded-full bg-c6" /> En cours
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[1rem] font-medium text-brand">{e.lieu}</p>
                  </div>
                  <span className="chip">{e.periode}</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {e.points.map((p) => (
                    <Puce key={p}>{p}</Puce>
                  ))}
                </ul>
              </article>
            </Enter>
          ))}
        </div>
      </section>

      {/* ===================== COMPÉTENCES TECHNIQUES ===================== */}
      <section className="sheet py-20">
        <SectionTitle
          eyebrow="Stack"
          title="Les technologies que j’utilise"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencesTechniques.map((g, i) => (
            <Enter key={g.famille} delay={i * 0.05}>
              <div className="card h-full p-6">
                <h3 className="text-[1.02rem] font-bold">{g.famille}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="tag">{it}</span>
                  ))}
                </div>
              </div>
            </Enter>
          ))}
        </div>
      </section>

      {/* ===================== COMPÉTENCES DU DIPLÔME ===================== */}
      <section className="sheet py-20">
        <SectionTitle
          eyebrow="Formation"
          title="Les compétences de mon diplôme"
          lead="Le BUT Informatique s’articule autour de six compétences. Trois d’entre elles sont approfondies jusqu’au niveau le plus avancé dans mon parcours."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {competences.map((c, i) => (
            <Enter key={c.id} delay={i * 0.07}>
              <Link
                to={`/competences/${c.slug}`}
                className="card-link group flex h-full flex-col p-7"
                style={{ borderTop: `3px solid ${COULEUR[c.id]}` }}
              >
                <p className="code font-semibold" style={{ color: COULEUR[c.id] }}>
                  {c.code} · Niveau {c.niveauNum}
                </p>
                <h3 className="mt-3 text-[1.2rem] font-bold leading-snug">{c.titre}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-fg-2">{c.tagline}</p>
                <p
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold"
                  style={{ color: COULEUR[c.id] }}
                >
                  En savoir plus
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </Enter>
          ))}
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="sheet py-20">
        <Enter>
          <div
            className="card overflow-hidden p-10 text-center sm:p-14"
            style={{ background: 'var(--color-surface-2)' }}
          >
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold">
              Travaillons ensemble
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.02rem] text-fg-2">
              Une question sur mon parcours, une opportunité d’alternance ou de stage ?
              Je réponds rapidement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profil.email || 'ahmedmez94320@gmail.com'}`} className="btn btn-primary">
                M’envoyer un message
              </a>
              <Link to="/profil" className="btn btn-ghost">
                En savoir plus sur moi
              </Link>
            </div>
          </div>
        </Enter>
      </section>
    </>
  )
}
