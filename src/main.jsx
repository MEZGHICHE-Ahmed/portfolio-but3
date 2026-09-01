import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Sur GitHub Pages le site vit sous /<dépôt>/ : le routeur doit connaître ce
// préfixe, sinon tous les liens pointent à côté. Vite l'expose via BASE_URL,
// qui vaut "/" en local et sur un hébergement à la racine.
const base = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
