/* utils.js - Utility functions */

/**
 * Converts degrees to radians
 * @param {number} angle - Angle in degrees
 * @returns {number} Angle in radians
 */
function convertDegreesToRadians(angle) {
  return (angle * Math.PI) / 180;
}

/**
 * Converts polar coordinates to cartesian coordinates
 * @param {number} angle - Angle in degrees
 * @param {number} distance - Distance from origin
 * @returns {Array<number>} [x, y] coordinates
 */
function convertPolarToCartesian(angle, distance) {
  const angleInRadians = convertDegreesToRadians(angle);
  const x = Math.cos(angleInRadians) * distance;
  const y = Math.sin(angleInRadians) * distance;
  return [x, y];
}

/**
 * Picks a random element from an array
 * @param {Array} arr - Array to pick from
 * @returns {*} Random element from array
 */
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}