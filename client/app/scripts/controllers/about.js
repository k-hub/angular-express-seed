'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AboutCtrl', ['$http', function ($http) {
  	var req   = $http.get('/api/about');
  	var scope = this;

  	req.then(function(res) {
  		scope.aboutInfo = res.data; // returns an object
  	});
  }]); 
