const request = require("request");
const args = process.argv;
let catType = args.slice(2, args.length).join();
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + catType;

const findCat = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      throw new Error(error.message);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Cat not found :(");
    } else {
      //cat exists
      console.log(data);
    }
  });
};

findCat(url);

//body is a string type
//data is an object time
