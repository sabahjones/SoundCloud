/*
    /client/factories/item.js
    The "Client Side DB" / connection between the client and the server (where the client can request additional data)
*/
app.factory("mainFactory", function ($http) {

    console.log("Created main Factory");

    var factory = {};
    var username = ""
    var songs = []

    factory.login = function(loginname){
      console.log("factory login value received is ", loginname)
      username = loginname
    }

    factory.getuser = function(callback){
      callback(username)
      console.log("current factory username is ", username)
      return username
    }

///// get songs below:

    factory.getsongs = function(callback){
      $http({method: 'GET', url: 'songs'})
      .then(function(response){
        callback(response.data)
        songs = response.data
      })
    }

//// make songs:

    factory.upload = function(upload){
      console.log("factory upload value ", upload)
    }

    return factory;

});
