import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import "@fontsource/work-sans/300.css"; // Light
import "@fontsource/work-sans/400.css"; // Regular
import "@fontsource/work-sans/600.css"; // Semi-bold
import "@fontsource/work-sans/900.css"; // Black
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
