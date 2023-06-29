import { useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";
import React from "react";
import MapContainer from "./maps";

const CardsPage = () => {
  const { id } = useParams();
  const card = useCard(id);

  return (
    <>
      {card != null ? (
        <>
          <h1 className="text-center mt-5">{card.bizName}</h1>
          <div className="mr-20  d-flex align-items-center  justify-content-center">
            <div className="card mb-3" style={{ width: "50rem" }}>
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img
                    src={card.bizImage}
                    className="card-img"
                    alt={card.bizName}
                  ></img>
                </div>
                <div className="col-md-7 text-center">
                  <div className="card-body">
                    <h5 className="card-title">{card.bizName}</h5>
                    <p className="card-text">{card.bizDescription}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Addrees: {card.bizAddress}
                        <br />
                        Phone: {card.bizPhone}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        console.log("null")
      )}
      <MapContainer
        apiKey={"Enter Your Api Key"}
        address={
          card && card.bizAddress ? card.bizAddress : console.log("null")
        }
      />
    </>
  );
};

export default CardsPage;
