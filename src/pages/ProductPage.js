import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function ProductPage() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  useEffect(()=> {
    API.get(`/products/${id}`).then(r=>setP(r.data)).catch(()=>{});
  }, [id]);
  if(!p) return <div className="container">Loading...</div>;
  return (
    <div className="container">
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:2}}>
          <img src={p.image || 'https://via.placeholder.com/600x400'} alt={p.name} style={{width:'100%'}}/>
        </div>
        <div style={{flex:1}}>
          <h2>{p.name}</h2>
          <div>Seller: {p.seller?.firstName || 'Seller'}</div>
          <div style={{marginTop:8}}>Price: <strong>{p.sellPrice} KES</strong></div>
          <div style={{marginTop:8}}>Stock: {p.stock}</div>
          <p style={{marginTop:12}}>{p.description}</p>
          <div style={{marginTop:12}}>
            <button className="btn">Order / Add to basket</button>
          </div>
        </div>
      </div>
      <div style={{marginTop:24}}><h4>You may also like</h4></div>
    </div>
  );
}
