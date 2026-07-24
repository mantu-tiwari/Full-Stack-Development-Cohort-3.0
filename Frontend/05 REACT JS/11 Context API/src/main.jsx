import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyShopContextProvider } from './context/MyWebsite.jsx'
// import TestComponents from './TestComponents.jsx'
// import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    <MyShopContextProvider>
        <App />
    </MyShopContextProvider>
)
// createRoot(document.getElementById('root')).render(
//     <ContextProvider>
//         <TestComponents/>
//     </ContextProvider>
// )
