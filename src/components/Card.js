import React from "react";

export default function Card(props) {
  let spent = (
    (props.cardData.spent.value / props.cardData.available_to_spend.value) *
    100
  ).toFixed(0);

  if (props.cardData.spent.value > props.cardData.available_to_spend.value) {
    spent = 50;
  }
  const spentBarStyle = {
    flex: `0 1 ${spent}%`,
  };
  const availableBarStyle = {
    flex: `0 1 ${100 - spent}%`,
  };

  return (
    <>
      <div className="card-box">
        <div className="card-header flex jsb aic">
          <div className="card-content">
            <h3>{props.cardData.name}</h3>
            <p>Rajesh • Sales Singapore</p>
          </div>
          <div className="card-header-icon flex jcc aic">
            <ion-icon
              name={
                `${props.cardData.card_type}` === "burner"
                  ? "flame-outline"
                  : "refresh-circle-outline"
              }
            ></ion-icon>
          </div>
        </div>
        <div className="card-type-date flex jsb aic">
          <div className="card-category">{props.cardData.card_type}</div>
          <p>{props.cardData.expiry}</p>
        </div>
        <div className="card-status-bar flex">
          <div className="spent-bar" style={spentBarStyle}></div>
          <div className="available-bar" style={availableBarStyle}></div>
        </div>
        <div className="card-stats">
          <div className="spent-stats flex jsb aic">
            <div className="spent-stats-left flex aic">
              <div className="spent-stats-bullet"></div>
              <span>Spent</span>
            </div>
            <p>{`${props.cardData.spent.value} ${props.cardData.spent.currency}`}</p>
          </div>
          <div className="available-stats flex jsb aic">
            <div className="available-stats-left flex aic">
              <div className="available-stats-bullet"></div>
              <span>Available to spend</span>
            </div>
            <p>{`${props.cardData.available_to_spend.value}  ${props.cardData.available_to_spend.currency}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
