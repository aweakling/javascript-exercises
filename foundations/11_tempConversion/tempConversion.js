const convertToCelsius = function(temp) {

  let convert = (5 / 9) * (temp - 32);

  return convert.toFixed(1);
};

const convertToFahrenheit = function(temp) {

  let convert = (temp * 9 / 5) + 32;

  return convert.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
