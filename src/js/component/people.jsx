import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const People = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);


    const favorite = () => {
        actions.favoriteCheck(props.name);
    };
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link to={`/personDetail/${props.id}`} 
                className="btn btn-primary">View Details
                </Link>
                <button type="button" className={isFavorite ? "btn btn-danger" : "btn btn-outline-warning"} onClick={favorite}>❤</button>
            </div>
        </div>
    );
};

People.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default People;
