'use strict';

var ciApp = angular.module('ciApp',['ui.router','homeMod']).config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
        .state('home', 
               { url:'/home', 
                templateUrl:'/templates/home/home.html', 
                controller: 'homeCtrl'
               });
    $urlRouterProvider.otherwise('/home');
    
});