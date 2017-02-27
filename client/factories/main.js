/*
    /client/factories/item.js
    The "Client Side DB" / connection between the client and the server (where the client can request additional data)
*/
app.factory("mainFactory", function () {

    console.log("Created main Factory");

    var factory = {};
    var username = ""

    factory.login = function(loginname){
      console.log("factory login value received is ", loginname)
      username = loginname
    }
    
    factory.getuser = function(callback){
      callback(username)
      console.log("current factory username is ", username)
      return username
    }


    return factory;

});
