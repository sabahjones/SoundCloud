/*
    /client/controllers/new-item.js
    The logic for new-item partial, will connect the factory with the template
*/
app.controller("visitorController", function (mainFactory, $scope) {
    console.log("Created visitor Controller");

mainFactory.getuser(function(response){
  $scope.username = response
})
if ($scope.username){
  $location.url('/home')
}

$scope.login = function(){
  mainFactory.login($scope.username)
  $location.url('/home')
}
});
