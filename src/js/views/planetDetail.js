import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanet(id);
  }, []);

  return (
    
    
      <div className="container">
        <h4 className="text-center mt-5" style={{ color: "red" }}>
          {store.planet.name}
        </h4>

        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row ">
            <div className="col-md-4">
              <img
                src="https://starwars-visualguide.com/assets/img/planets/9.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col">
              <div className="card-body">
                <p>
                  <strong>Climate: </strong> {store.planet.climate}
                </p>
                <p>
                  {" "}
                  <strong>Diameter:</strong> {store.planet.diameter}
                </p>
                <p>
                  {" "}
                  <strong>Terrain:</strong> {store.planet.terrain}
                </p>
                <p>
                {" "}
                  <strong>Population:</strong> {store.planet.population}
                </p>
             
                <p><strong>Orbital Period:</strong> {store.planet.orbital_period}</p>
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