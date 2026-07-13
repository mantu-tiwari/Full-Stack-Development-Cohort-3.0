import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Web from './Web.jsx'
import Form from './Form.jsx'

// createRoot(document.getElementById('root')).render ( <App />)
// createRoot(document.getElementById('root')).render( <Web/>)
createRoot(document.getElementById('root')).render( <Form/>)
