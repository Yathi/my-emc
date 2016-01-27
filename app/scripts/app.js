'use strict';

angular.module('emcApp', [])
    .controller('MovieController', ['$scope', function($scope) {
        
        $scope.tab = 1;
        $scope.filtText = 'now';
    
        $scope.movie = [
            {
                name: 'Wazir',
                language: 'Hindi',
                status: 'now',
                image: 'images/movie/wazir.png',
            },
            {
                name: 'Katyar',
                language: 'Marathi',
                status: 'now',
                image: 'images/movie/katyar.png'
            },{
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'now',
                image: 'images/movie/vedhalam.png'
            },{
                name: 'Nanuku Prematho',
                language: 'Telugu',
                status: 'now',
                image: 'images/movie/nanaku.png'
            },{
                name: 'Natasamrat',
                language: 'Hindi',
                status: 'now',
                image: 'images/movie/natasamrat.png'
            },{
                name: 'Natasamrat',
                language: 'Hindi',
                status: 'now',
                image: 'images/movie/natasamrat.png'
            },{
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'soon',
                image: 'images/movie/vedhalam.png'
            },{
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'soon',
                image: 'images/movie/vedhalam.png'
            },{
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'old',
                image: 'images/movie/katyar.png'
            }
            
        ];
        
        $scope.select = function(setTab) {
                $scope.tab = setTab;
            
            if (setTab === 1)
                    $scope.filtText = "now";
                else if (setTab === 2)
                    $scope.filtText = "soon";
                else if (setTab === 3)
                    $scope.filtText = "old";
                else
                    $scope.filtText = "invalid";
                
            };
        
        $scope.isSelected = function(checkTab) {
            return ($scope.tab == checkTab);
        };
            
    
}]);