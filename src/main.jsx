import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './components/About.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
const route = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/about',
        element: <About></About>,
    },
    {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>,
    },
    {
        path: '/updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={route}></RouterProvider>
    </StrictMode>
)
