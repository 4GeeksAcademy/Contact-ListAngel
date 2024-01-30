import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contactcard = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleUpdateContact = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };

  const handleDeleteContact = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="card m-auto d-inline-flex" style={{ maxWidth: "20rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="img-fluid rounded-start" alt="Contact Avatar" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6><b>Nombre:</b> {contact.full_name}</h6>
            <h6><b>Email:</b> {contact.email}</h6>
            <h6><b>Phone:</b> {contact.phone}</h6>
            <h6><b>Agenda_slug:</b> {contact.agenda_slug}</h6>
            <h6><b>Address:</b> {contact.address}</h6>
            <div className="d-flex justify-content-end">
              <button onClick={handleDeleteContact} className="btn btn-danger m-1">Borrar Contacto</button>
                <button onClick={() => {
                  actions.seeContact(contact);
                  navigate("/editcontact");
                }} className="btn btn-primary m-1">
                  Edit Contact
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


