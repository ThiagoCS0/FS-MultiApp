import React from 'react';
import Navegacao from './components/Navegacao';
import Login from './components/Login'
import { Outlet } from 'react-router-dom';

export default function App() {
  const autentico = localStorage.getItem('autentico');
  return (
    <>
      <Navegacao />
      {autentico == "true" ? <Outlet /> : <Login />}
    </>
  )
}