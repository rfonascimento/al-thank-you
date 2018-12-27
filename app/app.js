"use strict";
require('bootstrap-css-only');
require('particles.js');
require('./assets/styles/main.scss');
require('./assets/configs/particlesjs-config');
(function () {
    'use strict';
    var angular = require('angularjs');
    var myapp = angular.module('alThankYou', []);
    particlesJS.load('body', require('./assets/configs/particlesjs-config.json'), function () {
        console.log('callback - particles.js config loaded');
    });
    myapp.controller('mainCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
            var key = 'myMainController';
            var myscope = $scope[key] = (function ($scope) {
                return {
                    loadInProgress: false,
                    data: {}
                };
            })($scope);
        }]);
})();
