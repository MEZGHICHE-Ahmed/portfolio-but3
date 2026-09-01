import { formation, experiences, frise } from '../data/parcours'
import { PageHead, Enter, SectionTitle, Puce } from '../components/Primitives'

/** Une entrée de chronologie, avec pastille sur le rail vertical. */
function Etape({ it, accent }) {
  return (
    <li className="relative pb-8 pl-10 last:pb-0">
      {/* rail */}
      <span aria-hidden className="absolute left-[7px] top-2 h-full w-px bg-line" />
      {/* pastille */}
      <span
        aria-hidden
        className="absolute left-0 top-1.5 grid size-4 place-items-center rounded-full border-2 bg-bg"
        style={{ borderColor: accent }}
      >
        {it.actuel && <span className="size-1.5 rounded-full" style={{ background: accent }} />}
      </span>

      <div className="card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[1.15rem] font-bold">
                {it.titre.replace(' — Alternance', '')}
              </h3>
              {it.actuel && (
                <span className="chip" style={{ color: 'var(--color-c6)' }}>
                  <span className="size-1.5 rounded-full bg-c6" /> En cours
                </span>
              )}
            </div>
            <p className="mt-1 text-[0.98rem] font-medium" style={{ color: accent }}>
              {it.lieu}
            </p>
          </div>
          <span className="chip">{it.periode}</span>
        </div>

        {it.description && (
          <p className="mt-4 text-[0.95rem] leading-relaxed text-fg-2">{it.description}</p>
        )}

        {it.points && (
          <ul className="mt-4 space-y-2">
            {it.points.map((p) => (
              <Puce key={p} accent={accent}>{p}</Puce>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Parcours() {
  return (
    <div className="sheet pb-8">
      <PageHead
        ariane={[['Accueil', '/'], ['Parcours', null]]}
        kicker="Parcours"
        title="Mon parcours"
        lead="Trois ans de BUT Informatique, dont deux en alternance : d’abord au sein d’une équipe constituée chez SNCF Voyageurs, puis en autonomie complète chez Cloud Inspire."
        meta={[
          ['Formation', 'BUT Informatique'],
          ['Parcours', 'A — Réalisation d’applications'],
          ['Établissement', 'IUT de Créteil-Vitry'],
          ['Alternance', '2 ans'],
        ]}
      />

      {/* Expériences */}
      <section className="py-16">
        <SectionTitle eyebrow="Expérience" title="En entreprise" />
        <ol className="mt-10">
          {experiences.map((it, i) => (
            <Enter key={it.titre} delay={i * 0.06} as="div">
              <Etape it={it} accent="var(--color-c1)" />
            </Enter>
          ))}
        </ol>
      </section>

      {/* Formation */}
      <section className="py-16">
        <SectionTitle eyebrow="Diplômes" title="Formation" />
        <ol className="mt-10">
          {formation.map((it, i) => (
            <Enter key={it.titre} delay={i * 0.06} as="div">
              <Etape it={it} accent="var(--color-c2)" />
            </Enter>
          ))}
        </ol>
      </section>

      {/* Progression année par année */}
      <section className="py-16">
        <SectionTitle
          eyebrow="Progression"
          title="Ce que chaque année a construit"
          lead="Du travail encadré à la responsabilité directe sur ce qui est livré."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {frise.map((a, i) => (
            <Enter key={a.annee} delay={i * 0.07}>
              <article className="card flex h-full flex-col p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="code text-brand">{a.semestres}</span>
                  <span className="code text-fg-3">{a.competences.join(' · ')}</span>
                </div>

                <h3 className="mt-3 text-[1.25rem] font-bold">{a.annee}</h3>
                <p className="text-[0.92rem] italic text-fg-3">{a.titre}</p>

                <p className="mt-4 text-[0.95rem] leading-relaxed text-fg-2">{a.contenu}</p>

                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {a.marquants.map((m) => (
                    <Puce key={m}>{m}</Puce>
                  ))}
                </ul>
              </article>
            </Enter>
          ))}
        </div>
      </section>
    </div>
  )
}
