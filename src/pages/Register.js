import React, {useState} from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register({ setToken }) {
  const [form,setForm] = useState({ firstName:'', secondName:'', email:'', mpesaPhone:'', password:'', confirmPassword:''});
  const [err,setErr] = useState('');
  const nav = useNavigate();
  const submit = async (e)=>{
    e.preventDefault();
    try{
      const res = await API.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      setToken && setToken(res.data.token);
      nav('/');
    }catch(err){
      setErr(err.response?.data?.message || 'Error');
    }
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={submit} className="card" style={{maxWidth:500}}>
        <input placeholder="First name" value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})}/>
        <input placeholder="Second name" value={form.secondName} onChange={e=>setForm({...form,secondName:e.target.value})}/>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Mpesa phone" value={form.mpesaPhone} onChange={e=>setForm({...form,mpesaPhone:e.target.value})}/>
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
        <input placeholder="Confirm password" type="password" value={form.confirmPassword} onChange={e=>setForm({...form,confirmPassword:e.target.value})}/>
        {err && <div style={{color:'red'}}>{err}</div>}
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
}
