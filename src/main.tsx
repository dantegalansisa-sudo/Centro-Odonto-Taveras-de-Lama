import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { ContentProvider } from './supabase/ContentContext'
import './index.css'
import './styles-extra.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContentProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ContentProvider>
    </BrowserRouter>
  </StrictMode>,
)
