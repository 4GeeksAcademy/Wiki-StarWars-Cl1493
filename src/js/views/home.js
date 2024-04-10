import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import People from "../component/people.jsx";
import Starships from "../component/starships.jsx";
import Planets from "../component/planets.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getStarships();
        actions.getPlanets();
    }, []);

    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
                Characters
            </h1>
            <div className="container">
                <div className="row flex-row flex-nowrap overflow-auto">
                    {console.log('People', store.people)}
                    {
                    store.people.map((item, index) => (
                        <div key={index} className="col-md-4" style={{ marginBottom: "20px" }}>
                            <People name={item.name} id={item.uid}/>
                        </div>
                    ))}
                </div>
                <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
                    Planets
                </h1>
                <div className="row flex-row flex-nowrap overflow-auto">
                    {
                    store.planets.map((item, index) => (
                        <div key={index} className="col-md-4" style={{ marginBottom: "20px" }}>
                            <Planets title={item.name} id={item.uid}/>
                        </div>
                    ))}
                </div>
                <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
                    Starships
                </h1>
                <div className="row flex-row flex-nowrap overflow-auto">
                    {
                    store.starships.map((item, index) => (
                        <div key={index} className="col-md-4" style={{ marginBottom: "20px" }}>
                            <Starships title={item.name} id={item.uid}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
