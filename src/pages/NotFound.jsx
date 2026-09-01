import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="sheet grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="text-[clamp(4rem,14vw,8rem)] font-extrabold leading-none text-gradient">
          404
        </p>
        <h1 className="mt-4 text-[1.6rem] font-bold">Cette page n’existe pas</h1>
        <p className="mx-auto mt-3 max-w-md text-fg-2">
          Le lien est peut-être erroné, ou la page a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">Retour à l’accueil</Link>
          <Link to="/realisations" className="btn btn-ghost">Voir mes projets</Link>
        </div>
      </div>
    </div>
  )
}
