import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App' // If Figma used .tsx, leave it exactly as it was originally

const container = document.getElementById('root')!

if (container.hasChildNodes()) {
  hydrateRoot(container, <React.StrictMode><App /></React.StrictMode>)
} else {
  createRoot(container).render(<React.StrictMode><App /></React.StrictMode>)
}
