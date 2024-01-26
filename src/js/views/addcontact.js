import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";


export const Addcontact = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [newContact, setnewContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		agenda_slug: "angel-agenda",
		address: ""
	});

	const handleChange = (e) => {
		setnewContact({ ...newContact, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.createContact(newContact);

		navigate("/contact");
	};

	return (
		<div className="container mt-5">
			<div className="justify-content-center">
				<div className="">
					<form onSubmit={handleSubmit}>
						<div className="">
							<label htmlFor="inputName" className="form-label">Full Name</label>
							<input type="text" className="form-control" id="inputName" value={newContact.full_name} placeholder="" onChange={handleChange} name="full_name" />
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
							<input type="email" className="form-control" id="exampleInputEmail1" value={newContact.email} aria-describedby="emailHelp" placeholder="" onChange={handleChange} name="email" />
						</div>
						<div className="">
							<label htmlFor="inputPhone" className="form-label">Phone Number</label>
							<input type="text" className="form-control" id="inputPhone" value={newContact.phone} placeholder="" onChange={handleChange} name="phone" />
						</div>
						<div className="col-12 mb-3">
							<label htmlFor="inputAddress" className="form-label">Address</label>
							<input type="text" className="form-control" id="inputAddress" value={newContact.address} placeholder="" onChange={handleChange} name="address" />
						</div>
						<button type="submit" className="btn btn-primary">Agregar Contacto</button>
						<nav className="navbar navbar-light bg-light mb-3">
							<div className="container">
								<Link to="/contact">or get back to contacts</Link>
							</div>
						</nav>
					</form>
				</div>
			</div>
		</div>
	)
}