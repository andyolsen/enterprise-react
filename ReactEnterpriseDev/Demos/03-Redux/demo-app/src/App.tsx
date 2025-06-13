import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Menu from './Menu';
import Home from './Home';
import Counter from './Counter';
import Products from './Products';
import PageNotFound from './PageNotFound';

function AppLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/counter', element: <Counter /> },
      { path: '/products', element: <Products /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}