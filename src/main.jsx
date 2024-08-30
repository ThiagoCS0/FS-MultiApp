import React from 'react';
import ReactDOM from 'react-dom/client'
import EstiloGlobal from './components/EstiloGlogal'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Filmes from './components/Filmes';
import IPInfor from './components/IPInfor';
import Tradutor from './components/Tradutor';
import QRCode from './components/QRCode';
import Login from './components/Login'
import Erro from './components/Erro';
import App from './App'

const autentico = localStorage.getItem('autentico');

const rotas = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <Erro />, children: [
      { path: '/FS-MultiApp', element: <App /> },
      { path: '/login', element: <Login /> },
      { path: '/FS-MultiApp/login', element: <Login /> },
      { path: '/FS-MultiApp/filmes', element: <Filmes /> },
      { path: '/filmes', element: <Filmes /> },
      { path: '/FS-MultiApp/ipinfor', element: <IPInfor /> },
      { path: '/ipinfor', element: <IPInfor /> },
      { path: '/FS-MultiApp/qrcode', element: <QRCode /> },
      { path: '/qrcode', element: <QRCode /> },
      { path: '/FS-MultiApp/tradutor', element: <Tradutor /> }
      { path: '/tradutor', element: <Tradutor /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
      <RouterProvider router={rotas} />
  </React.StrictMode>
)