import React from 'react';

export default function({ logout, closeModal }){
  return (
    <div className="logout-modal-container">
      <button className="logout" onClick={ () => { logout(); closeModal(); } } >Log Out</button>
    </div>
  );
}
