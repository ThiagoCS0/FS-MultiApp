import React from 'react';
import Navegacao from './components/Navegacao';
import Login from './components/Login'
import { Outlet } from 'react-router-dom';

export default function App() {
  let autentico=false;
  if(localStorage.length>0){
    autentico = localStorage.getItem('autentico');
  }else{
    localStorage.setItem('autentico',false);}
  return (
    <>
      {autentico == "true" ? <Outlet /> : <Login />}
    </>
  )
}