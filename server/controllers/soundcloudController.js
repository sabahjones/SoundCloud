/*
    /server/controllers/items.js
    Main logic for connecting http requests with database requests, delivering responses
*/
console.log("Loaded: /server/controllers/soundcloudController.js");

module.exports = {
    index: function (request, response) {
        console.log("Items Index");
    },
    create: function (request, response) {
        request.file.filename = request.body.song
        console.log(request.body)
        console.log(request.file)

      // artists = request.body.artist.split(",");
      // for (i in artists){
      //   artists[i] = artists[i].trim();
      }
    }
