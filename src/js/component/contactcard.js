import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contactcard = ({ contact }) => {
  const { actions } = useContext(Context);
  

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="card mb-5" style={{ maxWidth: "20rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="img-fluid rounded-start" alt="Contact Avatar" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1>{contact.full_name}</h1>
            <h3>Email: {contact.email}</h3>
            <h4>Phone: {contact.phone}</h4>
            <h2>Agenda_slug {contact.agenda_slug}</h2>
            <h2>Address: {contact.address}</h2>
            <div className="d-flex justify-content-end">
              <button onClick={handleDelete} className="btn btn-danger m-1">Borrar Contacto</button>
              <Link to={`/contact/${contact.id}`}>
                <button className="btn btn-primary m-1">
                  Edit Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


