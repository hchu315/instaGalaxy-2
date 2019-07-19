import React from 'react';

export default function({ modalUrl, currentUser }){
  return (
    <div className="post-show-container">
        <div className="post-show">
          <img className="post-show-image" src={ modalUrl }></img>
        </div>
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
