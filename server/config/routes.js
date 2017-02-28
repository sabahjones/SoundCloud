/*
    /server/config/routes.js
    Configure the routes (Listen for routes, connect to controllers)
*/
console.log("Loaded /server/config/routes.js");

var SoundcloudController = require("../controllers/soundcloudController");
var multer = require('multer')
var upload = multer({dest: 'uploads/'})

module.exports = function (app) {

    app.get("/items",  SoundcloudController.index)  // Controller get items
    app.post("/upload", upload.single('songfile'), SoundcloudController.create)  // Controller create items

};
