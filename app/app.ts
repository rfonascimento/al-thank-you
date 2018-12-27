require('bootstrap-css-only');
require('particles.js');
import './assets/styles/main.scss';


(function(){'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('alThankYou', []);

   particlesJS.load('body', require('./assets/configs/particlesjs-config.json'), function() {
      console.log('callback22 - particles.js config loaded');
   });

   myapp.controller('mainCtrl', ['$rootScope', '$scope', ($rootScope: angular.IRootScopeService, $scope: angular.IScopeService) =>{
      const key = 'myMainController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

   }]);

})();