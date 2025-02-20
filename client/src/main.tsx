import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { RouterProvider, useLocation } from 'react-router-dom'
import Router from './router/router.tsx'
import './styles/main.scss'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Router}></RouterProvider>

)
