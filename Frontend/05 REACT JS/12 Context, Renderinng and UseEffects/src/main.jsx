import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RevStoreProvider } from './context/RevContext.jsx'
import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    
        <App/>
    // <ContextProvider>
    // </ContextProvider>
    
    // <RevStoreProvider>
    //     <App/>
    // </RevStoreProvider>
)