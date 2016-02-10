'use strict';

angular.module('emcApp')

        .controller('MovieController', ['$scope', 'movieFactory', function($scope, movieFactory) {
        
        $scope.tab = 1;
        $scope.filtText = 'now';
    
        $scope.selectedMovie = '';
            
        $scope.movies = movieFactory.getMovies();
        
        $scope.members = [
            {
                name: 'Madhan Selvaraj',
                title: 'President',
                image: 'images/portraits/1.jpg'
            },
            {
                name: 'Loki',
                title: 'Vice-President',
                image: 'images/portraits/2.jpg'
            },
            {
                name: 'Bibaswan Ghosal',
                title: 'Secretary',
                image: 'images/portraits/3.jpg'
            },
            {
                name: 'Janani Sridhar',
                title: 'Vice Secretary',
                image: 'images/portraits/11.jpg'
            },
            {
                name: 'Kaustav Mazumder',
                title: 'Treasurer',
                image: 'images/portraits/4.jpg'
            },
            {
                name: 'Rengarajan Vaiyapuri',
                title: 'Vice-Treasurer',
                image: 'images/portraits/5.jpg'
            },
            {
                name: 'Savithri Machiragu',
                title: 'Public Relations',
                image: 'images/portraits/6.jpg'
            },
            {
                name: 'Angana Samanta',
                title: 'Public Relations',
                image: 'images/portraits/7.jpg'
            },
            {
                name: 'Mayukh Banarjee',
                title: 'Board Member',
                image: 'images/portraits/9.jpg'
            },
            {
                name: 'Nagarajan Babu',
                title: 'Board Member',
                image: 'images/portraits/nag.png'
            },
            {
                name: 'Subhadyuti Chanda',
                title: 'Vice Board Member',
                image: 'images/portraits/10.jpg'
            },
            {
                name: 'Anupama Deshpande',
                title: 'Vice Board Member',
                image: 'images/portraits/anupama.jpg'
            },
            {
                name: 'Rajasekar Sengodan',
                title: 'Fort Mc Representative',
                image: 'images/portraits/rajasekar.png'
            },
            {
                name: 'Oindrala Basu',
                title: 'Calgary Representative',
                image: 'images/portraits/oindrala.png'
            },
            {
                name: 'Anupreeti Ramadoss',
                title: 'Logistics Coordinator',
                image: 'images/portraits/anu.png'
            },
            {
                name: 'Yathi',
                title: 'Webmaster',
                image: 'images/portraits/me.png'
            }
        ]
        
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
    }])
    .controller('MovieDetailController', ['$scope', '$stateParams', 'movieFactory', function($scope, $stateParams, movieFactory) {
        
            $scope.showMovie = false;
            $scope.message = "Loading ...";
            console.log("Movie Detail controller called");
            $scope.movie = movieFactory.getMovie(parseInt($stateParams.id,10));
            
            
            
        }]);
