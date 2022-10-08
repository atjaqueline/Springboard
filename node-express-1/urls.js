const fs = require("fs");
const process = require("process");
const axios = require("axios");


function getURLs(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    let data = data.split(/\r?\n/);
    for (let url of data) {
      if (url) {
        try {
          getFromURL(url);
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

function getFromURL(url) {
  try {
    axios.get(url).then(function (resp) {
      console.log(`Writing to file: ${resp.request.host}`);
      fs.writeFile(resp.request.host, resp.data, function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
}

getURLs(process.argv[2]);



