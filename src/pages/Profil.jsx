import { profil, competencesTechniques, atouts, langues, contact } from '../data/site'
import { PageHead, Enter, SectionTitle, Puce } from '../components/Primitives'

export default function Profil() {
  return (
    <div className="sheet pb-8">
      <PageHead
        ariane={[['Accueil', '/'], ['À propos', null]]}
        kicker="À propos"
        title="Qui je suis"
        lead={`${profil.titre} — ${profil.sousTitre}`}
        meta={[
          ['Localisation', profil.localisation],
          ['Formation', 'BUT Informatique — parcours A'],
          ['Alternance', 'Cloud Inspire'],
          ['Courriel', contact.email],
        ]}
      />

      {/* Présentation */}
      <section className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Présentation" title="Mon parcours en quelques mots" />
            <div className="measure mt-8 space-y-5 text-[1.02rem] leading-[1.7] text-fg-2">
              {profil.bio.map((p, i) => (
                <Enter key={i} delay={i * 0.06} as="p">{p}</Enter>
              ))}
            </div>
          </div>

          <Enter delay={0.1}>
            <div className="card p-7">
              <h3 className="text-[1.05rem] font-bold">Objectif professionnel</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-2">{profil.objectif}</p>

              <h3 className="mt-8 border-t border-line pt-6 text-[1.05rem] font-bold">Langues</h3>
              <dl className="mt-4 space-y-3">
                {langues.map((l) => (
                  <div key={l.langue} className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.95rem]">{l.langue}</dt>
                    <dd className="text-[0.88rem] text-fg-3">{l.niveau}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Enter>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16">
        <SectionTitle eyebrow="Stack" title="Les technologies que j’utilise" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Atouts */}
      <section className="py-16">
        <SectionTitle eyebrow="Points forts" title="Ce sur quoi je m’appuie" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {atouts.map((a, i) => (
            <Enter key={a} delay={i * 0.05}>
              <li className="card flex items-start gap-3 p-5">
                <span
                  aria-hidden
                  className="mt-1.5 size-2 shrink-0 rounded-full"
                  style={{ background: 'var(--color-brand)' }}
                />
                <span className="text-[0.96rem] leading-relaxed">{a}</span>
              </li>
            </Enter>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="py-16">
        <Enter>
          <div
            className="card p-10 text-center sm:p-14"
            style={{ background: 'var(--color-surface-2)' }}
          >
            <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] font-bold">Me contacter</h2>
            <p className="mx-auto mt-4 max-w-lg text-[1rem] text-fg-2">
              Disponible pour échanger sur une opportunité, un projet ou simplement discuter
              technique.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${contact.email}`} className="btn btn-primary">
                {contact.email}
              </a>
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  LinkedIn ↗
                </a>
              )}
              {contact.github && (
                <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </Enter>
      </section>
    </div>
  )
}
