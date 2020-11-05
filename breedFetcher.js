const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?q=sibe",
  (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
  }
);

//body is a string type
//data is an object time
