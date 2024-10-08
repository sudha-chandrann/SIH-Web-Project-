import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from './pages/Categories.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
          path:"",
          element:<Home/>
      },
      {
        path:'category',
        element:<Categories/>
      }


    ]

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
