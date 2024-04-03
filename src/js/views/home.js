import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { getState } from "../store/flux.js";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<Card />
		
	</div>
);
