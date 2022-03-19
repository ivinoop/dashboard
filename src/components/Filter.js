import React from 'react';

export default function Filter() {
  return (
    <>
    <section className="search-and-filter">
    <div className="container flex jcr aic">
      <div className="search">
        <ion-icon name="search" className="search-btn"></ion-icon>
      </div>
      <button className="filter flex aic filter-btn">
        <ion-icon name="filter"></ion-icon>
        <span>Filter</span>
      </button>
    </div>
  </section>
    </>
  )
}