import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
    };

    const removeFromFavorites = (index) => {
        const newFavorites = [...favorites];
        newFavorites.splice(index, 1);
        setFavorites(newFavorites);
    };

    return (
        <nav className="navbar navbar-light bg-white mb-5 p-4">
            <Link to="/">
                <img src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" width={50} height={50} className="photo"/>
            </Link>
            <div className="ml-auto">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                        {favorites.map((favorite, index) => (
                            <li key={index}>
                                <button className="dropdown-item" onClick={() => removeFromFavorites(index)}>{favorite.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};