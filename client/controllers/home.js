/*
    /client/controllers/items-index.js
    The logic for items-index partial, will connect the factory with the template
*/
app.controller("mainController", function (mainFactory, $scope) {
    console.log("Created main Index Controller");

    mainFactory.getuser(function(response){
      $scope.username = response
    })



  });
