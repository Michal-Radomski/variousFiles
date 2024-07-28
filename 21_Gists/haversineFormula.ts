//* Haversine formula to calculate distance between two coordinates https://en.wikipedia.org/wiki/Haversine_formula
//* Based on getTriadicColors (TC-Webapp)

interface Coordinate {
  lat: number;
  lon: number;
}

const haversineFormulaDistance = (coord1: Coordinate, coord2: Coordinate): number => {
  const R = 6371e3; // Earth's radius in meters
  const lat1: number = (coord1.lat * Math.PI) / 180;
  const lat2: number = (coord2.lat * Math.PI) / 180;
  const deltaLat: number = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const deltaLon: number = ((coord2.lon - coord1.lon) * Math.PI) / 180;

  const a: number =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const haversineDistance: number = R * c;
  return haversineDistance;
};

const coord1 = { lat: 54.3475, lon: 18.645278 }; // Gdansk
const coord2 = { lat: 52.408333, lon: 16.934167 }; // Poznan

const distanceGdanskPoznan = haversineFormulaDistance(coord1, coord2) / 1000; // [km]
console.log("distanceGdanskPoznan [km]: ", distanceGdanskPoznan); // 243.65601723952363
