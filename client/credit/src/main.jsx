import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { CardProvider } from './context/CardContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Router>
    <CardProvider>
    <App />
    </CardProvider>
    </Router>
    
  </StrictMode>,
)
