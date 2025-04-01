
import ReactDOM from 'react-dom/client'

import './index.scss'
import { BrowserRouter} from 'react-router-dom'

import './styles/main.scss'
import { LanguageProvider } from './context/LanguageContext.tsx'
import App from './App.tsx'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
)