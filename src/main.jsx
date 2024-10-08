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

const rotas = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <Erro />, children: [
      { path: '/FS-MultiApp/', element: <Filmes /> },
      { path: '/login', element: <Login /> },
      { path: '/FS-MultiApp/login', element: <Login /> },
      { path: '/filmes', element: <Filmes /> },
      { path: '/FS-MultiApp/filmes', element: <Filmes /> },
      { path: '/ipinfor', element: <IPInfor /> },
      { path: '/FS-MultiApp/ipinfor', element: <IPInfor /> },
      { path: '/qrcode', element: <QRCode /> },
      { path: '/FS-MultiApp/qrcode', element: <QRCode /> },
      { path: '/tradutor', element: <Tradutor /> },
      { path: '/FS-MultiApp/tradutor', element: <Tradutor /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
    <RouterProvider router={rotas} />
  </React.StrictMode>
)