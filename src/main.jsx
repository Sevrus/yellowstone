import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accueil from "./views/Accueil.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";
import Lore from "./views/Lore.jsx";
import Reglement from "./views/Reglement.jsx";
import Lois from "./views/Lois.jsx";
import Galerie from "./views/Galerie.jsx";
import Carte from "./views/Carte.jsx";
import Contact from "./views/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Accueil />
            },
            {
                path: "/lore",
                element: <Lore />
            },
            {
                path: "/reglement",
                element: <Reglement />
            },
            {
                path: "/lois",
                element: <Lois />
            },
            {
                path: "/galerie",
                element: <Galerie />
            },
            {
                path: "/carte",
                element: <Carte />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
