import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { Route, Switch } from "react-router-dom";

export default function DisplayCards() {
  const [cardData, setCardData] = useState([]);
  const [ownerId, setOwnerId] = useState(12345);
  const [page, setPage] = useState(2);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://6234ac14debd056201ea61ac.mockapi.io/api/v1/cards?page=1&limit=10`
    );
    setCardData(await response.json());
  };

  const moreData = async () => {
    const response = await fetch(
      `https://6234ac14debd056201ea61ac.mockapi.io/api/v1/cards?page=${page}&limit=10`
    );
    const newData = await response.json();
    setCardData([...cardData, ...newData]);
    setPage(page + 1);
    setIsFetching(false);
  };
  const isScrolling = () => {
    if (
      Math.round(window.innerHeight + document.documentElement.scrollTop) !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setIsFetching(true);
  };
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (isFetching) {
      moreData();
    }
  }, [isFetching]);

  if (cardData.length === 0) {
    return <h1 className="tac padding-y">Fetching Cards..</h1> 
  }

  return (
    <>
      <section className="display-cards section-padding">
        <div className="container flex jsb wrap">
          <Switch>
            <Route path="/" exact>
              {cardData &&
                cardData.map((data) => {
                  return <Card cardData={data} key={data.owner_id} />;
                })}
            </Route>
            <Route path="/your" exact>
              {cardData &&
                cardData.map((data) => {
                  if (data.owner_id === ownerId) {
                    return <Card cardData={data} key={data.owner_id} />;
                  }
                })}
            </Route>
            <Route path="/blocked" exact>
              {cardData &&
                cardData.map((data) => {
                  if (data.status !== "active") {
                    return <Card cardData={data} key={data.owner_id} />;
                  }
                })}
            </Route>
          </Switch>
        </div>
      </section>
    </>
  );
}
