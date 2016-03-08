'use strict';

angular.module('emcApp')

        .controller('MovieController', ['$scope', 'movieFactory', function($scope, movieFactory) {
        
        $scope.tab = 1;
        $scope.filtText = 'now_showing';
    
        $scope.selectedMovie = '';
            
        $scope.movies = movieFactory.getMovies();
            
        $scope.$on('locationChange', function(){
            $scope.movies = movieFactory.getMovies();
        })
        
        $scope.members = [
            {
                name: 'Madhan Selvaraj',
                title: 'President',
                image: 'images/portraits/1.jpg'
            },
            {
                name: 'Lokesh Bhaskararajan',
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
                name: 'Savithri Manchiraju',
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
                    $scope.filtText = "now_showing";
                else if (setTab === 2)
                    $scope.filtText = "year";
                else if (setTab === 3)
                    $scope.filtText = "old";
                else
                    $scope.filtText = "invalid";
                
            };
        
        $scope.isSelected = function(checkTab) {
            return ($scope.tab == checkTab);
        };
            
        $scope.myFilter = function(movie) {
            console.log(movie);
            return movie.when.edmonton[0];
        };
    }])
    .controller('MovieDetailController', ['$scope', '$stateParams', 'movieFactory', function($scope, $stateParams, movieFactory) {
        
            $scope.showMovie = false;
            $scope.message = "Loading ...";
            $scope.movie = movieFactory.getMovie(parseInt($stateParams.id,10));
            
            
            
        }])
    .controller('EventController', ['$scope', '$stateParams', 'eventFactory', function($scope, $stateParams, $eventFactory) {
        
        $scope.showEvent = false;
        $scope.message = "Loading.. ";
        $scope.events = $eventFactory.getEvents();
    }])

    .controller('HeaderController', ['$scope','movieFactory', function($scope, movieFactory) {
        $scope.tab = 1;
        
        $scope.loc = movieFactory.getLoc();
        
        $scope.isSelected = function(checkTab) {
            return ($scope.tab == checkTab);
        };
        
        $scope.select = function(setTab) {
                $scope.tab = setTab;
        }
        
        $scope.setLoc = function(locat){
            movieFactory.setLoc(locat);
            $scope.loc = locat;
        }
        
        
    }])



;
