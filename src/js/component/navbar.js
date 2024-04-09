import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);


    return (
        <nav className="navbar navbar-light bg-white mb-5 p-4">
            <Link to="/">
                <img src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" width={50} height={50} className="photo"/>
            </Link>
            <div className="ml-auto">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites {store.favorites.length > 0 ? store.favorites.length : "0"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                        {store.favorites.length > 0 && store.favorites.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="dropdown-item" onClick={() => actions.removeFavorite(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};