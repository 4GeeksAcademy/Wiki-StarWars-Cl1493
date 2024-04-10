import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);


    const favorite = () => {
        actions.favoriteCheck(props.title);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://starwars-visualguide.com/assets/img/planets/9.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link to={`/planetDetail/${props.id}`} 
                className="btn btn-primary">View Details
                </Link>
                <button type="button" className={isFavorite ? "btn btn-danger" : "btn btn-outline-warning"} onClick={favorite}>❤</button>
            </div>
        </div>
    );
};

Planets.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
};

export default Planets;
