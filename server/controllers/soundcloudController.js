/*
    /server/controllers/items.js
    Main logic for connecting http requests with database requests, delivering responses
*/
console.log("Loaded: /server/controllers/soundcloudController.js");

var mongoose = require('mongoose')
var Song = mongoose.model('Song')

module.exports = {

    getsongs: function (request, response) {
        Song.find({}, function(err, results){
          if (err){
            console.log("unable to get songs from db")
          }
          else {
            console.log("successfully retrieved songs")
            response.json(results)
          }
        })
    },

    save: function (request, response) {
        var newsong = new Song({
          title: request.body.info.title,
          artist: request.body.info.artist,
          likes: 0,
          filepath: request.file.path,
          filename: request.file.filename,
        })
        newsong.save(function(err){
          if(err){
            console.log("did not save song")
          }
          else {
            console.log("successfully saved song to db")
            response.json(newsong)
          }
        })
      }
    }
