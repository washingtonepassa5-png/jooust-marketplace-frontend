import React, { useEffect, useState } from 'react';
import API from '../api';
import ProductCard from '../components/ProductCard';

export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    API.get('/products').then(r=> setProducts(r.data)).catch(()=>{});
  }, []);
  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <div>
          <h2>Products</h2>
          <div className="small">Randomized catalog — refresh to reshuffle</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="card small">Subscribe to get access to even lower prices — <a href="/subscribe">subscribe</a></div>
          <div className="card small" style={{marginTop:8}}><a href="/become-seller">Become a seller</a></div>
        </div>
      </div>
      <div className="grid">
        {products.map(p => <ProductCard p={p} key={p._id} />)}
      </div>
    </div>
  );
}
