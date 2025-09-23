import React from 'react';
import API from '../api';

export default function Subscribe(){
  // For now we simulate payment flow. In production trigger mpesa STK push.
  const pay = async () => {
    alert('In production this triggers MPESA STK push for 100 KES. Here simulated.');
    // After success call API to mark subscription start/end for user
    // API.post('/subscribe', { amount: 100 })
  };
  return (
    <div className="container">
      <h2>Subscribe for discounted prices (100 KES / year)</h2>
      <p>Subscribers see discountedPrice for items when logged in.</p>
      <button className="btn" onClick={pay}>Pay 100 KES (mpesa)</button>
    </div>
  );
}
