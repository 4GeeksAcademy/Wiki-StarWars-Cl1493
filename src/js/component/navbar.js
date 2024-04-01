import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white mb-5 p-4">
			<Link to="/">
				<img src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" width={50} height={50} className="photo"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					</button>
					<ul class="dropdown-menu dropdown-menu-end p-3">
					<li><a class="dropdown-item" href="#">Dropdown link</a></li>
					<li><a class="dropdown-item" href="#">Dropdown link</a></li>
					</ul>
				</div>
				</Link>
			</div>
		</nav>
	);
};
