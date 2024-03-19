import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

const todos = [
    {
        id: 1,
        title: 'Learn React',
        completed: false
    },
    {
        id: 2,
        title: 'Learn TypeScript',
        completed: false
    },
    {
        id: 3,
        title: 'Learn GraphQL',
        completed: false
    }
];

ReactDOM.createRoot(document.getElementById('root')).render(<App todoList={ todos } />);
