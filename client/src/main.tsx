
import ReactDOM from 'react-dom/client'

import './index.scss'
import { RouterProvider} from 'react-router-dom'
import Router from './router/router.tsx'
import './styles/main.scss'
import { LanguageProvider } from './context/LanguageContext.tsx'






ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
  <RouterProvider router={Router}>
   
  </RouterProvider>
</LanguageProvider>
)
