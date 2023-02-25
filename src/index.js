import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Ticket from './pages/Ticket';
import TicketCreate from './pages/TicketCreate';
import Customer from './pages/Customer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter ([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'/ticket',
        element: <Ticket/>
      },
      {
        path:'/ticket/create',
        element: <TicketCreate/>
      },
      {
        path:'/clientes',
        element: <Customer/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);