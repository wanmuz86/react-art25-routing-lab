import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Replace the element of id root with the route  defined in router.tsx */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
