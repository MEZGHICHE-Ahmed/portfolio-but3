import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projets } from '../data/projets'
import { PageHead, Enter, Puce } from '../components/Primitives'

const FILTRES = [
  ['tous', 'Tous'],
  ['pro', 'En entreprise'],
  ['uni', 'En formation'],
]

function Carte({ p }) {
  const cliquable = Boolean(p.etudeDeCas)
  const Wrapper = cliquable ? Link : 'div'
  const props = cliquable
    ? { to: p.etudeDeCas, className: 'card-link group flex h-full flex-col p-7' }
    : { className: 'card flex h-full flex-col p-7' }

  return (
    <Wrapper {...props}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip">{p.categorie}</span>
        {p.enProduction && (
          <span className="chip" style={{ color: 'var(--color-c6)' }}>
            <span className="size-1.5 rounded-full bg-c6" /> En production
          </span>
        )}
        {p.confidentiel && <span className="chip">Confidentiel</span>}
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[1.35rem] font-bold">{p.titre}</h3>
        <span className="code text-fg-3">{p.periode}</span>
      </div>
      <p className="mt-1 text-[0.92rem] text-fg-3">{p.sousTitre}</p>

      <p className="mt-4 text-[0.96rem] leading-relaxed text-fg-2">{p.description}</p>

      <ul className="mt-5 space-y-2">
        {p.points.slice(0, 4).map((pt) => (
          <Puce key={pt}>{pt}</Puce>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        {cliquable && (
          <p className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand">
            Voir le projet en détail
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </p>
        )}
        {!cliquable && p.lien?.github && (
          <a
            href={p.lien.github}
            target="_blank"
            rel="noreferrer"
            className="link mt-5 inline-block text-[0.9rem] font-semibold"
          >
            Voir le dépôt ↗
          </a>
        )}
      </div>
    </Wrapper>
  )
}

export default function Realisations() {
  const [filtre, setFiltre] = useState('tous')
  const liste = filtre === 'tous' ? projets : projets.filter((p) => p.type === filtre)

  return (
    <div className="sheet pb-8">
      <PageHead
        ariane={[['Accueil', '/'], ['Projets', null]]}
        kicker="Projets"
        title="Mes réalisations"
        lead="Les applications que j’ai conçues en entreprise, et les projets menés pendant ma formation. Les deux premiers sont détaillés dans une étude de cas complète."
        meta={[
          ['Projets', String(projets.length)],
          ['En entreprise', String(projets.filter((p) => p.type === 'pro').length)],
          ['En production', String(projets.filter((p) => p.enProduction).length)],
          ['Études de cas', '2'],
        ]}
      />

      {/* Filtres */}
      <div className="mt-12 flex flex-wrap gap-2">
        {FILTRES.map(([id, label]) => {
          const on = filtre === id
          const n = id === 'tous' ? projets.length : projets.filter((p) => p.type === id).length
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFiltre(id)}
              aria-pressed={on}
              className={`rounded-md border px-4 py-2 text-[0.88rem] font-medium transition-colors ${
                on
                  ? 'border-transparent bg-brand text-bg'
                  : 'border-line bg-surface text-fg-2 hover:border-line-2 hover:text-fg'
              }`}
            >
              {label} <span className="opacity-60">({n})</span>
            </button>
          )
        })}
      </div>

      {/* Grille */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {liste.map((p, i) => (
          <Enter key={p.id} delay={(i % 4) * 0.06}>
            <Carte p={p} />
          </Enter>
        ))}
      </div>
    </div>
  )
}
