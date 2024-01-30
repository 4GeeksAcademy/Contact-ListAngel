import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	
	<div className="container">
		<div className="text-center mt-5">
			<h1 className="text-success">Angel Jimenez <strong>contact list</strong></h1>
		</div>
		<div className="text-center mt-5">
			<button><Link className="display-8" to="/contact">Go to Contact List</Link></button>
		</div>
	</div>
);
