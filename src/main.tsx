import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { SanityProvider } from './sanity/SanityContext'
import './index.css'
import './styles-extra.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SanityProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </SanityProvider>
    </BrowserRouter>
  </StrictMode>,
)
