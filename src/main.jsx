import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Stats from './components/Stats';
import UsersSidebar from './components/UsersSidebar';
import AddNote from './components/AddNote';

// 1. Install react-router-dom
// npm install react-router-dom

// 2. Create router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '',
                element: <AuthForm />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <Navigation />,
                children: [
                    {
                        index: true,
                        element: <Stats />
                    },
                    {
                        path: 'users',
                        element: <UsersSidebar />,
                        children: [
                            {
                                path: 'add',
                                element: <AddNote />
                            },
                            {
                                path: 'edit',
                                element: <div>Edit User</div>
                            }
                        ]
                    },
                    {
                        path: 'notes',
                        element: <div>Notes</div>
                    }
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
