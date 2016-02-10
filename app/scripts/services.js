'use strict';

angular.module('emcApp')
        .service('movieFactory', function() {
    
        var movies = [
            {
                id: 1,
                name: 'Wazir',
                language: 'Hindi',
                status: 'now',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/wazir.png',
                
            },
            {
                id: 2,
                name: 'Katyar',
                language: 'Marathi',
                status: 'now',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/katyar.png'
            },{
                id: 3,
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'now',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/vedhalam.png'
            },{
                id: 4,
                name: 'Nanuku Prematho',
                language: 'Telugu',
                status: 'now',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/nanaku.png'
            },{
                id: 5,
                name: 'Natasamrat',
                language: 'Hindi',
                status: 'now',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/natasamrat.png'
            },{
                id: 6,
                name: 'Natasamrat',
                language: 'Hindi',
                status: 'soon',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/natasamrat.png'
            },{
                id: 7,
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'soon',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/vedhalam.png'
            },{
                id: 8,
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'soon',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/vedhalam.png'
            },{
                id: 9,
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                bigimage: 'images/nanuku-poster.jpg',
                image: 'images/movie/katyar.png'
            }
            
        ];
    
        this.getMovies = function() {
            return movies;
        }
        
        this.getMovie = function(index) {
            return movies[index-1];
        }

        });