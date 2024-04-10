import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [item, setItem] = useState({});

	return (
		<div className="container">			
		<h4 className="text-center mt-5">Información detallada</h4>

			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text"></p>
							<p className="card-text">
								<small className="text-muted">Texto de prueba, para ver como queda...</small>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};