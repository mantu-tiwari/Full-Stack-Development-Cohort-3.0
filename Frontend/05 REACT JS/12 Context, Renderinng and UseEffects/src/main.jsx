import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RevStoreProvider } from './context/RevContext.jsx'

createRoot(document.getElementById('root')).render(
    
    <RevStoreProvider>
        <App/>
    </RevStoreProvider>
)