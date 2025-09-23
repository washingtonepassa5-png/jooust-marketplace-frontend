import React, {useState} from 'react';
import API, { setAuthToken } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
  const [data,setData] = useState({ mpesaPhone:'', password:'' });
  const [err,setErr] = useState('');
  const nav = useNavigate();
  const submit = async e => {
    e.preventDefault();
    try{
      const res = await API.post('/auth/login', data);
      localStorage.setItem('token', res.data.token);
      setToken && setToken(res.data.token);
      setAuthToken(res.data.token);
      nav('/');
    }catch(err){
      setErr(err.response?.data?.message || 'Error');
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit} className="card" style={{maxWidth:400}}>
        <input placeholder="Mpesa phone" value={data.mpesaPhone} onChange={e=>setData({...data,mpesaPhone:e.target.value})}/>
        <input placeholder="Password" type="password" value={data.password} onChange={e=>setData({...data,password:e.target.value})}/>
        {err && <div style={{color:'red'}}>{err}</div>}
        <button className="btn" type="submit">Login</button>
        <div style={{marginTop:8}}><a href="/reset-verify">Forgot password?</a></div>
      </form>
    </div>
  );
}
