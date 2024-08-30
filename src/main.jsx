import ReactDOM from 'react-dom/client'
import React, { StrictMode, useContext } from 'react'
import EstiloGlobal from './components/EstiloGlogal'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Filmes from './components/Filmes';
import IPInfor from './components/IPInfor';
import Tradutor from './components/Tradutor';
import QRCode from './components/QRCode';
import Login from './components/Login'
import Erro from './components/Erro';
import App from './App'
import { ProverTema } from './context/Tema';

const autentico = localStorage.getItem('autentico');

const rotas = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <Erro />, children: [
      { path: '/login', element: <Login /> },
      { path: '/filmes', element: <Filmes /> },
      { path: '/ipinfor', element: <IPInfor /> },
      { path: '/qrcode', element: <QRCode /> },
      { path: '/tradutor', element: <Tradutor /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
    <ProverTema>
      <RouterProvider router={rotas} />
    </ProverTema>
  </React.StrictMode>
)