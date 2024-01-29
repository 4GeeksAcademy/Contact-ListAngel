const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactos: [],
			contact: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/angel-agenda", {
					method: 'GET'
				})
				.then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					setStore({contactos: data});
				})
				.catch(error => {
                    console.log(error)
				})
			},

			createContact: (newContact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					  },
					  body: JSON.stringify(newContact),
					}
				)
			    .then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					getActions().fetchContacts()
				})
				.catch(error => {
                    console.log(error)
				})
			},

			deleteContact: (contactId) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					  },
				})
				.then(response => {
					if (response.ok) {
						console.log(`Contacto con ID ${contactId} eliminado exitosamente.`);
						actions.fetchContacts();
					} else {
						console.error("Error al borrar el contacto.");
					}
				})
				.then(data => {
					getActions().fetchContacts()
				})
				.catch(error => {
					console.error("Error al realizar la solicitud DELETE:", error);
				});
			},

			updateContact: (contactId) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					  },
				})
				.then(response => {
					if (response.ok) {
						console.log(`Contacto con ID ${contactId} editado exitosamente.`);
						actions.fetchContacts();
					} else {
						console.error("Error al editar el contacto.");
					}
				})
				.then(data => {
					getActions().fetchContacts()
				})
				.catch(error => {
					console.error("Error al realizar la solicitud EDITAR:", error);
				});
			},


			seeContact: (contact) => {
				setStore ({contact:contact})
			  }
		}
	}
};

export default getState;
