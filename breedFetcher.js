const request = require('request');
const arg = process.argv[2];

request(`https://api.thecaatapi.com/v1/breeds/search?q=${arg}`, (err, res, body) => {
  if (err) throw new Error(err);
  //console.log(res)
  let data = JSON.parse(body);
  
  data.length ? console.log(data[0].description) : console.log("Error. Breed not found.");
});

