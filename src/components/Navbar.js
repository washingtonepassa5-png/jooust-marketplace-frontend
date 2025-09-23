import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ token, setToken }) {
  const navigate = useNavigate();
  const logout = ()=> { localStorage.removeItem('token'); setToken(null); navigate('/'); };
  return (
    <header>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link to="/" style={{fontWeight:'bold',fontSize:20}}>JOUST ONLINE MARKET</Link>
          <div style={{marginLeft:16}}>
            <Link to="/subscribe" className="small">Subscribe</Link> • <Link to="/become-seller" className="small">Become seller</Link>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link to="/cart">Basket</Link>
          {token ? (
            <>
              <Link to="/seller">Sell</Link>
              <button onClick={logout} className="btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/register" className="btn" style={{background:'#28a745'}}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
