import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(store.favorites.some(item => item.id === props.id));
    }, [store.favorites, props.id]);

    const favorite = () => {
        actions.favorite(props);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link to={`/planets/${props.id}`} 
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
