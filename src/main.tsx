import { Buffer } from 'buffer'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// gray-matter (used to parse newsletter frontmatter) calls Buffer.from(),
// which only exists natively in Node — polyfill it for the browser bundle.
;(globalThis as typeof globalThis & { Buffer?: typeof Buffer }).Buffer ??= Buffer

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
