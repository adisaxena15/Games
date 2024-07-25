/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Instructions from './pages/Instructions';
/* import GamePage from './pages/GamePage.tsx'; */
import { AnimatePresence } from 'framer-motion';

const GamePage = lazy(() => import('./pages/GamePage.tsx'))
const router = createBrowserRouter([
  {
    path: '', 
    element: <AnimatePresence mode='wait'><HomePage /></AnimatePresence>,
    errorElement: <ErrorPage />,
    },
    {path: 'instructions', element: <Instructions />},
    {path: 'game', element: <Suspense fallback={<h1>Loading....</h1>}><GamePage /></Suspense>
    }
    ],
);

export default function App(){
  return <RouterProvider router={router} />;
}


