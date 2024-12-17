import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Menu from './Menu';
import Home from './Home';
import Counter from './Counter';
import Thumbnails from './Thumbnails';
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
      { path: '/thumbnails', element: <Thumbnails /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />  
}