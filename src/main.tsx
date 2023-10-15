import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '@/pages/home'
import { APP_URLS } from '@/constants/appUrls'
import { CustomThemeProvider } from '@/theme'

const router = createBrowserRouter([
  {
    path: APP_URLS.HOME,
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </React.StrictMode>,
)
