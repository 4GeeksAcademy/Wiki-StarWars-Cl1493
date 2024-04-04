import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const People = (props) => {
    const { store, actions } = useContext(Context);

	return (
		<div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button type="button" className="btn btn-outline-warning">❤</button>
            </div>
        </div>
	);
};

People.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
  };

export default People;