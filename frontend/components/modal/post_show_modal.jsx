import React from 'react';

export default function({ modalUrl }){
  return (
    <div className="post-show-container">
        <img className="post-show" src={ modalUrl }></img>
    </div>
  );
}
