const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			person: {},
			starships: [],
			ship: {},
			planets: [],
			planet: {}
		},


		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(data => setStore({ people: data }))
				.catch(error => console.log('Error', error));
			},
			getPerson: (uid) => {
				fetch( `https://www.swapi.tech/api/people/${uid}`)
				.then(response => response.json())
				.then(data => setStore({ person: data.result.properties }))
				.catch(error => console.log('Error', error));
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then(response => response.json())
				.then(data => setStore({ starships: data }))
				.catch(error => console.log('Error', error));
			},
			getShip: (uid) => {
				fetch( `https://www.swapi.tech/api/starships/${uid}`)
				.then(response => response.json())
				.then(data => setStore({ ship: data.result.properties }))
				.catch(error => console.log('Error', error));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => setStore({ planets: data }))
				.catch(error => console.log('Error', error));
			},
			getPlanet: (uid) => {
				fetch( `https://www.swapi.tech/api/planets/${uid}`)
				.then(response => response.json())
				.then(data => setStore({ planet: data.result.properties }))
				.catch(error => console.log('Error', error));
			}
		}
	};
};

export default getState;
