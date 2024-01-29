import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Contactcard } from "../component/contactcard";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchContacts();
		actions.deleteContact();
		actions.updateContact();
	}, []);

	const handleUpdateContact = () => {
		actions.updateContact(contact.id);
	  };

	const handleDeleteContact = (contactId) => {
		actions.deleteContact(contactId);
	};


	return (
		<div className="">
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<Link to="/addcontact">
						<button className="btn bg-success"><h6 className="text-white">Add New Contact</h6></button>
					</Link>
				</div>
			</nav>
			<div className="container">
				{store.contactos.map(
					(contact) =>
					(
							<Contactcard
								key={contact.id}
								contact={contact}
								onDeleteContact={handleDeleteContact}
								onUpdateContact={handleUpdateContact}
							/>
						)
				)}
			</div>
		</div>
	)
}

