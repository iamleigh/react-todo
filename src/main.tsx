import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const rootElement = document.getElementById( 'root' );

if ( rootElement ) {
	rootElement.classList.add( 'rocketui-page--full' );
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
