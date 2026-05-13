import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import AddProduct from '../pages/AddProduct'

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home/>
   },
   {
      path: "/add",
      element: <AddProduct/>
   }
])

export default router