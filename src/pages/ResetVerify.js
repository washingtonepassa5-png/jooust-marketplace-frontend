import React, {useState} from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function ResetVerify(){
  const [form,setForm] = useState({ firstName:'', email:'', mpesaPhone:''});
  const nav = useNavigate();
  const submit = async e => {
    e.preventDefault();
    try{
      const res = await API.post('/auth/verify-reset', form);
      // redirect to reset page with short token
      nav(`/reset-password?token=${res.data.token}`);
    }catch(err){
      alert(err.response?.data?.message || 'Error');
    }
  };
  return (
    <div className="container">
      <h2>Verify Account</h2>
      <form onSubmit={submit} className="card" style={{maxWidth:480}}>
        <input placeholder="First name" onChange={e=>setForm({...form,firstName:e.target.value})}/>
        <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Mpesa phone" onChange={e=>setForm({...form,mpesaPhone:e.target.value})}/>
        <button className="btn" type="submit">Verify</button>
      </form>
    </div>
  );
}
