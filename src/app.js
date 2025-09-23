import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Subscribe from './pages/Subscribe';
import BecomeSeller from './pages/BecomeSeller';
import SellerDashboard from './pages/SellerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import { setAuthToken } from './api';

function App(){
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(()=> setAuthToken(token), [token]);

  return (
    <BrowserRouter>
      <Navbar token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setToken={setToken}/>}/>
        <Route path="/register" element={<Register setToken={setToken}/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/become-seller" element={<BecomeSeller/>}/>
        <Route path="/seller" element={<SellerDashboard/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/superadmin" element={<SuperAdminDashboard/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
