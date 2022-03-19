import React from "react";
import { NavLink } from "react-router-dom";
export default function Sort() {
  return (
    <>
      <section className="sort section-padding">
        <div className="container">
          <div className="sort-types flex jsb aic">
            <div className="left-col">
              <NavLink
                to="your"
                className={`sort-btn`}
                activeClassName={`sort-btn sort-btn-active`}
                exact
              >
                Your
              </NavLink>
              <NavLink
                to="/"
                className={`sort-btn`}
                activeClassName={`sort-btn sort-btn-active`}
                exact
              >
                All
              </NavLink>
              <NavLink
                to="blocked"
                className={`sort-btn`}
                activeClassName={`sort-btn sort-btn-active`}
                exact
              >
                Blocked
              </NavLink>
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
  );
}