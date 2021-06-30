const request = require("request");

const forecast = (longlitude, langtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ce8a75dbdce2a5cd59cab3165ff270e4&query=${langtitude},${longlitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature} degrees out.It feels like ${body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
