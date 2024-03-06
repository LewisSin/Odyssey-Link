// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { ApolloProvider } from '@apollo/client';
// import client from './apollo-client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render( 
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import App from './App.jsx';
import "./styles/Homepage.css"
import Login from "./components/Login.jsx"
import "./styles/Login.css"
import Register from "./components/Register.jsx"
import "./styles/Register.css"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Homepage />
            }, {
            //     path: '/dashboard',
            //     element: <Dashboard />
            // }, {
            //     path: '/user',
            //     element: <User />
            }, {
                path: '/register',
                element: <Register />
            }, {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)


