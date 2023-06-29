import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './components/Error';
import { ShopsPage } from './components/ShopsPage';
import { ShoppingCartPage } from './components/ShoppingCartPage';
import { Layout } from './components/Layout';
import { ThankYouPage } from './components/ThankYouPage';
// import { fetchAllFacts } from './fetchAllFacts';
// import { fetchFactsById, fetchFactsByIdRouted } from './fetchFactsById';
// import { ROUTES } from './routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <ShopsPage />,
            },
            {
                path: '/shoppingCart',
                element: <ShoppingCartPage />,
            },
            {
                path: '/thankYouPage',
                element: <ThankYouPage />

            }]
    }
])

const App = () => <RouterProvider router={router}></RouterProvider>

export default App;
