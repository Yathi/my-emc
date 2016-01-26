'use strict';

angular.module('emcApp', [])
    .controller('MovieController', ['$scope', function($scope) {
    
        
        var movie = [
            {
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            },
            {
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            },{
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            },{
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            },{
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            },{
                name: 'Katyar',
                language: 'Marathi',
                image: 'img/movie/katyar.png'
            }
            
        ];
        
        $scope.movie = movie;
    
    
}]);