import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
import { getState } from "../store/flux.js";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<People />
		<h1>Starships</h1>
		<Card />
		<h1>Planets</h1>
		<Card />
	</div>
);
