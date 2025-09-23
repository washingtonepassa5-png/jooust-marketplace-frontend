import React, {useState} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import API from '../api';

export default function ResetPassword(){
  const [sp] = useSearchParams();
  const token = sp.get('token');
  const [form,setForm] = useState({ newPassword:'', confirmPassword:''});
  const nav = useNavigate();
  const submit = async e => {
    e.preventDefault();
    try{
      await API.post('/auth/reset-password', { token, newPassword: form.newPassword, confirmPassword: form.confirmPassword });
      alert('Password reset. Login.');
      nav('/login');
    }catch(err){ alert(err.response?.data?.message||'Error'); }
  };
  return (
    <div className="container">
      <h2>Reset password</h2>
      <form onSubmit={submit} className="card" style={{maxWidth:480}}>
        <input placeholder="New password" type="password" onChange={e=>setForm({...form,newPassword:e.target.value})}/>
        <input placeholder="Confirm new password" type="password" onChange={e=>setForm({...form,confirmPassword:e.target.value})}/>
        <button className="btn" type="submit">Save</button>
      </form>
    </div>
  );
}
