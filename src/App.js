import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';


// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// )
// const router = createBrowserRouter(routerDefinition)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
