"use strict";
require('bootstrap-css-only');
require('particles.js');
require('./assets/styles/main.scss');
(function () {
    'use strict';
    var angular = require('angularjs');
    var myapp = angular.module('alThankYou', []);
    particlesJS.load('body', require('./assets/configs/particles.json'), function () {
        console.log('callback222222222223333332 - particles.js config loaded');
    });
    myapp.controller('mainCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
            var key = 'myMainController';
            var myscope = $scope[key] = (function ($scope) {
                return {
                    loadInProgress: false,
                    data: {},
                    title: 'Altice Labes - thank you'
                };
            })($scope);
        }]);
})();
