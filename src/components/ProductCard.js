import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({p}) {
  return (
    <div className="card">
      <img src={p.image || 'https://via.placeholder.com/300x200'} alt={p.name} style={{width:'100%',height:150,objectFit:'cover'}}/>
      <h4>{p.name}</h4>
      <div className="small">{p.seller?.firstName || 'Seller'}</div>
      <div style={{marginTop:8}}>
        <strong>{p.sellPrice} KES</strong>
        {p.discountedPrice && <span style={{marginLeft:8,color:'green'}}>{p.discountedPrice} KES (subscribers)</span>}
      </div>
      <div style={{marginTop:8,display:'flex',justifyContent:'space-between'}}>
        <Link to={`/product/${p._id}`} className="btn small">View</Link>
      </div>
    </div>
  );
}
