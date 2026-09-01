import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer } from './components/Chrome'
import Home from './pages/Home'
import Competences from './pages/Competences'
import CompetenceDetail from './pages/CompetenceDetail'
import Realisations from './pages/Realisations'
import Mika from './pages/Mika'
import Coppelis from './pages/Coppelis'
import Parcours from './pages/Parcours'
import Profil from './pages/Profil'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname, hash } = useLocation()

  // Remonter en haut à chaque changement de page, sauf si une ancre est visée.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:outline focus:outline-2 focus:outline-accent"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/competences/:slug" element={<CompetenceDetail />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/mika" element={<Mika />} />
          <Route path="/realisations/coppelis" element={<Coppelis />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
