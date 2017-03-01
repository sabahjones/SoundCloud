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
    password: String
});

var SongSchema = mongoose.Schema({
    title: String,
    artist: String,
    likes: Number,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}],
    filepath: String
});

var PlaylistSchema = mongoose.Schema({
  title: String,
  songs: [{type: mongoose.Schema.Types.ObjectId, ref:"Song"}],
  _user: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
});

mongoose.model("Song", SongSchema);
mongoose.model("User", UserSchema);
mongoose.model("Playlist", PlaylistSchema);
mongoose.model("Comment", CommentSchema);
