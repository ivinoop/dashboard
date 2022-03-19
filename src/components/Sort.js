import React from 'react'

export default function Sort() {
  return (
    <>
  <section className="sort section-padding">
    <div className="container">
      <div className="sort-types flex jsb aic">
        <div className="left-col">
          <button className="sort-btn">Your</button>
          <button className="sort-btn sort-btn-active">All</button>
          <button className="sort-btn">Blocked</button>
        </div>
        <div className="right-col flex jcc aic">
          <div className="grid-display-btn">
            <ion-icon name="grid"></ion-icon>
          </div>
          <div className="list-display-btn">
            <ion-icon name="menu"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}