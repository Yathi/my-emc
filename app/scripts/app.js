'use strict';

angular.module('emcApp', ['ui.router', 'ngResource', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'MovieController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.moviedetails', {
                url:'moviedetails/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/movie-details.html',
                        controller  : 'MovieDetailController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.events', {
                url: 'events',
                views: {
                    'content@': {
                        templateUrl : 'views/events.html',
                        controller  : 'EventController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    });