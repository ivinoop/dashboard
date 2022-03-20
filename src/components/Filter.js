import React from 'react';

export default function Filter({ searchData, searchString }) {
  return (
    <>
    <section className="search-and-filter">
    <div className="container flex jcr aic">
      <div className="search flex aic">
        <input className='search-bar' type="text" placeholder='Search by card name..' onChange = {(e) => {
          searchData(e);
        }} value = {searchString}/>
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