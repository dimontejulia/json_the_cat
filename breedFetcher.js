const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    if (error) {
      throw new Error(error.message);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Cat not found", null);
    } else {
      //cat exists
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
