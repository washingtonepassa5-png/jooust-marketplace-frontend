import React from 'react';
import API from '../api';

export default function BecomeSeller(){
  const chooseOne = ()=> {
    alert('One-time seller flow: you will be charged 20 KES (simulate). After payment you can post one product.');
  };
  const chooseMerchant = ()=> {
    alert('Merchant flow: you will be charged 1000 KES (simulate). After payment you get merchant role and seller dashboard.');
  };
  return (
    <div className="container">
      <h2>Become a seller</h2>
      <div className="card">
        <h4>One-time seller</h4>
        <p>Pay 20 KES to post a single product.</p>
        <button className="btn" onClick={chooseOne}>Choose one-time (20 KES)</button>
      </div>
      <div className="card" style={{marginTop:12}}>
        <h4>Merchant (annual)</h4>
        <p>Pay 1000 KES yearly — unlimited product uploads.</p>
        <button className="btn" onClick={chooseMerchant}>Choose merchant (1000 KES)</button>
      </div>
    </div>
  );
}
