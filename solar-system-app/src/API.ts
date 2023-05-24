

export let planets:any = [];

export const fetchInfo = async () => {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true');
    const json = await response.json();
    for (let i = 0; i<json.bodies.length; i++) {
        planets.push(json.bodies[i]);
    }
    console.log(planets[1].discoveryDate);
}

export default planets
