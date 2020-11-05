const { fetchBreedDescription } = require("./breedFetcher");
const args = process.argv;
let breedName = args.slice(2, args.length).join();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
