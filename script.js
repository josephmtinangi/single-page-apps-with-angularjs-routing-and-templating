// script.js

   // create the module and name it mtinangiApp
   var mtinangiApp = angular.module('mtinangiApp', []);

   // create the controller and inject Angular's $scope
   mtinangiApp.controller('mainController', function($scope) {

      // create a message to display in our view
      $scope.message = 'Everyone come and see how good I look!';
   });