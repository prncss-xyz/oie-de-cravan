const accents = require('remove-accents');
const normalize = (str) => str ? accents.remove(str).replace(/'/g, ' ') : '';

module.exports = {
  normalize,
};
