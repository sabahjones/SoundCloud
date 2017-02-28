/*
    /server/models/item.js
    Create database schema for "Item"
*/
console.log("Loaded: /server/models/soundcloud.js");

var mongoose = require("mongoose");


var CommentSchema = mongoose.Schema({
    text: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
});

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
});

var SongSchema = mongoose.Schema({
    title: String,
    _artist: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    album: String,
    likes: Number,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}],
    filepath: String
});

var AlbumSchema = mongoose.Schema({
  title: String,
  songs: [{type: mongoose.Schema.Types.ObjectId, ref:"Song"}],
  _artist: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model("Song", SongSchema);
module.exports = mongoose.model("User", UserSchema);
