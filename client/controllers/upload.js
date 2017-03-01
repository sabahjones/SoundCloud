



app.controller("uploadController", function (mainFactory, $scope, Upload) {
    console.log("Created main Index Controller");

// get username
    mainFactory.getuser(function(response){
      $scope.username = response
      console.log($scope.username)
    })

//get songs

    mainFactory.getsongs(function(response){
      $scope.songs = response   
    })


    $scope.uploadsong = function(file){
      info = $scope.song
      if (file) {
        console.log("upload.upload detected songfile")
        Upload.upload({
          url: '/upload',
          data: {file: file, info: $scope.song}
          })
        }
      //mainFactory.upload($scope.song)
      console.log($scope.song)
      }


}) //end controller
