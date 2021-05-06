const request = require('request');
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    err && callback(err);
    let data = JSON.parse(body);
    data.length ? callback(null, data[0].description) : callback("Breed not found.", null);
  });
};

module.exports = { fetchBreedDescription };