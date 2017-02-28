



app.controller("uploadController", function (mainFactory, $scope) {
    console.log("Created main Index Controller");

    mainFactory.getuser(function(response){
      $scope.username = response
      console.log($scope.username)
    })

    $scope.upload = function(){
      console.log($scope.song)
      console.log($scope.song.file)

    }
})
