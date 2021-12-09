const accents = require('remove-accents');
const normalize = (str) => {
  return str ? accents.remove(str).replace(/[()]/g, ' ') : '';
}

const normalize0 = (str) => {
  console.log('---', str)
  return str ? accents.remove(str).replace(/[()]/g, ' ') : '';
}
module.exports = {
  normalize,
  normalize0,
};

