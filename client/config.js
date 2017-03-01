/*
    /client/config.js
    Configure client routes, and really anything
*/
var app = angular.module('app', ['ngRoute', 'ngFileUpload']);
console.log("Creating App");

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/visitor.html",
        controller: "visitorController"
    }).when("/home", {
        templateUrl: "partials/home.html",
        controller: "mainController"
    }).when("/upload", {
        templateUrl: "partials/upload.html",
        controller: "uploadController",
    })
    ;
    console.log("Configuring Routes");
});
