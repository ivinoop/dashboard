import React from 'react';

export default function Header() {
  return (
    <>
       <header>
      <div className="container">
      <div className="header flex jsb aic">
        <div className="left-col flex aic">
          <h1>Virtual Cards</h1>
          <a href="" className="learn-more-btn flex aic">
            <ion-icon name="videocam-outline"></ion-icon>
            <span>Learn More</span>
          </a>
        </div>
        <div className="right-col">
          <button className="add-card-btn flex aic">
            <ion-icon name="add-outline"></ion-icon>
            <span>Virtual Card</span>
          </button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}
