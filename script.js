mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbmVzdGViYW4iLCJhIjoiY2xvOXFiYXdnMGo0NDJqcXByMWp5eGt2NCJ9.M4IK9Cm2MPbyj26ZXeukug';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-118.243683, 34.052235],
    zoom: 10,
});

fetch('https://api.metro.net/LACMTA/vehicle_positions/all')
    .then((response) =>{
        if (!response.ok) {
            throw new Error('No se pudo procesar la solicitud.')
        }
        return response.json();
    })

    .then((data) => {
    
    })

    .catch((error) => {
        console.error('No se pudo obtener datos.', error)
    })
