import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './About';
import Home from './Home';
import MyMenu from './MyMenu';
import PageNotFound from './PageNotFound';
import Destinations from './Destinations';
import Destination from './Destination';

function AppLayout() {
    return (
        <>
            <MyMenu />         { /* Always display my common menu here (for example) */ }
            <Outlet />         { /* Display the current route component here */ } 
        </>
    )
}

const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
            { path: '/',                element: <Home /> },
            { path: '/destinations',    element: <Destinations /> },
            { path: '/destination/:id', element: <Destination /> },
            { path: '/about',           element: <About /> },
            { path: '*',                element: <PageNotFound /> },
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />    
}