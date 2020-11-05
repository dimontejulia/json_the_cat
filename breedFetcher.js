const request = require("request");
const args = process.argv;
let breedName = args.slice(2, args.length).join();

const fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    if (error) {
      throw new Error(error.message);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Cat not found :(");
    } else {
      //cat exists
      callback(data);
    }
  });
};

module.exports = { fetchBreedDescription };
