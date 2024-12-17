import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import MyMenu from './MyMenu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Products from './Products';
import Product from './ProductV1';
import ProductsWithNestedRoutes from './ProductsWithNestedRoutes';
import ProductUnselected from './ProductUnselected';
import ProductSummary from './ProductSummary';
import TsAndCs, { TsAndCsForRegion, getDataForRegion } from './TsAndCs';

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
            /* Routes for Section 1 - Getting Started with SPAs and Routing */
            { path: '/',        element: <Home /> },
            { path: '/about',   element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '*',        element: <PageNotFound /> },

            /* Routes for Section 2 - Parameterized Routes */
            { path: 'products',    element: <Products /> },
            { path: 'product/:id', element: <Product /> },

            /* Routes for Section 3 - Nested Routes*/
            { 
                path: '/products-with-nested-routes', element: <ProductsWithNestedRoutes />,
                children: [
                    { index: true,     element: <ProductUnselected /> }, 
                    { path: ':id',     element: <Product /> }, 
                    { path: 'summary', element: <ProductSummary /> }
                ]
            },

            /* Routes for Section 4 - Loading Data for a Route */ 
            { path: '/ts-and-cs',     element: <TsAndCs /> },
            { path: '/ts-and-cs/:id', element: <TsAndCsForRegion />, loader: getDataForRegion }
        ]
    }
])


export default function App() {
    return <RouterProvider router={router} />    
}