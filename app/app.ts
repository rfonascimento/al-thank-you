require('bootstrap-css-only');
require('particles.js');
import './assets/styles/main.scss';
import './assets/configs/particlesjs-config';


(function(){'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('alThankYou', []);

   particlesJS.load('body', require('./assets/configs/particlesjs-config.json'), function() {
      console.log('callback2 - particles.js config loaded');
   });

   myapp.controller('mainCtrl', ['$rootScope', '$scope', ($rootScope: angular.IRootScopeService, $scope: angular.IScopeService) =>{
      const key = 'myMainController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

   }]);

})();