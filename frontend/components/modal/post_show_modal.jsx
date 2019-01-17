import React from 'react';

export default function({ modalUrl, currentUser }){
  return (
    <div className="post-show-container">
        <img className="post-show" src={ modalUrl }></img>
        <div className="post-show-sidebar"> 
          <header className="post-show-header">{currentUser}</header>
          <section className="post-show-comment-container">
            <div className="post-show-comments"></div>
            <div className="post-show-actions"></div>
            <div className="post-show-add-comment"></div>
          </section>
        </div>
    </div>
  );
}
