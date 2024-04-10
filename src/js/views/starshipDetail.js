import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const StarShipDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getShip(id);
  }, []);

  return (
    
    
      <div className="container">
        <h4 className="text-center mt-5" style={{ color: "red" }}>
          {store.ship.name}
        </h4>

        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row ">
            <div className="col-md-4">
              <img
                src="https://starwars-visualguide.com/assets/img/starships/10.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col">
              <div className="card-body">
                <p>
                  <strong>Model: </strong> {store.ship.model}
                </p>
                <p>
                  {" "}
                  <strong>Class: </strong> {store.ship.starship_class}
                </p>
                <p>
                  {" "}
                  <strong>Manufacturer: </strong> {store.ship.manufacturer}
                </p>
                <p>
                {" "}
                  <strong>Crew: </strong> {store.ship.crew}
                </p>
             
                <p><strong>Consumables: </strong> {store.ship.consumables}</p>
                {" "}
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ marginRight: "60px", padding: "30px" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    );
  
}