const request = require("request");
const args = process.argv.slice(2);
const breed = args[0];
//filename /

const breedCheck = function(breed) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (err, response, body) => {
      // const data = JSON.parse(body);
      // console.log(breed)
      // console.log(data[0])
      if (err) {
        return console.log(err);
      }
      const data = JSON.parse(body);
      if (!data[0]) {
        return console.log("breed not found");
      } else {
        console.log(data[0].description);
        process.exit();
      }
    }
  );
};

// const confirmError = ((errorMsg) => {
//   if (errorMsg) {
//     console.log(`Error: ${errorMsg}`);
//   }
// });

breedCheck(breed);

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
//   //how to take in a parameter in the call?
//   //find the codes for each animal, declare them, and then somehow insert them into the URL
//   //change URL takein to breed?
// // const breed = url;
// // `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

// //Chartreux into the 3 digit code so that it recognizes
// const data = JSON.parse(body);
// if (breed === undefined) {
//   return console.log("breed not found");
// } else {
//   console.log('description', data[0].description);
// }

//   // if (err) {
//   //     return console.log("Error: ", err.message);
//   //   }
//       // console.log(typeof body)
//       // console.log(`${body}`);
//       // const data = JSON.parse(body);
//       // console.log('data', data);
//       // console.log('typeof data', typeof data);
//       // console.log('first entry in array', data[0]);
//       // console.log('description', data[0].description);

//       process.exit();
//     });

//how to take in a parameter in the call?
//find the codes for each animal, declare them, and then somehow insert them into the URL
//change URL takein to breed?
// const breed = url;
// `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

//Chartreux into the 3 digit code so that it recognizes

// if (err) {
//     return console.log("Error: ", err.message);
//   }
// console.log(typeof body)
// console.log(`${body}`);
// const data = JSON.parse(body);
// console.log('data', data);
// console.log('typeof data', typeof data);
// console.log('first entry in array', data[0]);
// console.log('description', data[0].description);

// request(url, (err, response, body) => {
//   if (err) {
//     return console.log("Error: ", err.message);
//   }

//   fs.writeFile(filepath, body,(err) => {
//     if (err) {
//       return console.log("Error: ", err.message);
//     }
//     console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
//     process.exit();
//   });
//
