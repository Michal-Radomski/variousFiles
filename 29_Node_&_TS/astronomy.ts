// Constants
const AU: number = 1.496e11; // Astronomical Unit in meters
const G: number = 6.6743e-11; // Gravitational constant in m^3 kg^-1 s^-2
const M_SUN: number = 1.989e30; // Mass of the Sun in kg

// Function to calculate mean anomaly
function calculateMeanAnomaly(period: number, timeElapsed: number): number {
  return ((2 * Math.PI) / period) * timeElapsed;
}

// Function to calculate eccentric anomaly using Newton's method
function calculateEccentricAnomaly(M: number, e: number): number {
  let E: number = M; // Initial guess for Eccentric Anomaly
  for (let i = 0; i < 10; i++) {
    // Iterate to refine E
    E = E + (M - (E - e * Math.sin(E))) / (1 - e * Math.cos(E));
  }
  return E;
}

// Function to calculate true anomaly from eccentric anomaly
function calculateTrueAnomaly(E: number, e: number): number {
  return 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
}

// Example parameters for Earth
const semiMajorAxis: number = AU; // Semi-major axis in meters
const eccentricity: number = 0.0167; // Eccentricity of Earth's orbit
const orbitalPeriod: number = 365.25 * 24 * 3600; // Orbital period in seconds (1 year)
const timeElapsed: number = 100 * 24 * 3600; // Time elapsed since perihelion in seconds

// Calculate Mean Anomaly
const M: number = calculateMeanAnomaly(orbitalPeriod, timeElapsed);
console.log(`Mean Anomaly (radians): ${M}`);

// Calculate Eccentric Anomaly
const E: number = calculateEccentricAnomaly(M, eccentricity);
console.log(`Eccentric Anomaly (radians): ${E}`);

// Calculate True Anomaly
const trueAnomaly: number = calculateTrueAnomaly(E, eccentricity);
console.log(`True Anomaly (radians): ${trueAnomaly}`);
