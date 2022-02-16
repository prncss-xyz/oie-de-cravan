const accents = require('remove-accents');

const typo_ajust = (str) => {
  if (typeof str === 'string') return str.replace(/'/g, '’');
  return str;
};

const normalize = (str) => {
  return str ? accents.remove(str).replace(/[()]/g, ' ') : '';
};

const normalize0 = (str) => {
  console.log('---', str);
  return str ? accents.remove(str).replace(/[()]/g, ' ') : '';
};
module.exports = {
  typo_ajust,
  normalize,
  normalize0,
};
