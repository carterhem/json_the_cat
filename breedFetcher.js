const request = require("request");
// const args = process.argv.slice(2);
// const breed = args[0];

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (err, response, body) => {
      if (err) {
        return callback(err, null);
      }
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback("breed not found");
       
      }
    });
};

// fetchBreedDescription(breed);

module.exports = { fetchBreedDescription };