'use strict';

angular.module('emcApp')
        .service('movieFactory', function() {
    
        var movies = [
            {
                id: 1,
                name: 'Wazir',
                language: 'Hindi',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/wazir.jpg',
                image: 'images/movie/wazir.png',
                description: 'Naanaku Prematho (English: To father, with love) is a 2016 Telugu action thriller film written and directed by Sukumar and produced by B. V. S. N. Prasad under his Sri Venkateswara Cine Chitra Banner and co-produced by Bhogavalli Bapineedu and Reliance Entertainment. The film features NTR and Rakul Preet Singh in the lead roles while Jagapati Babu and Rajendra Prasad played crucial supporting roles. Nannaku Prematho marks the 25th film of Rama Rao Jr. as an actor.'
                
            },
            {
                id: 2,
                name: 'Katyar',
                language: 'Marathi',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/katyar.jpg',
                image: 'images/movie/katyar.png',
                description: 'Katyar Kaljat Ghusali (English: A dagger through the heart) is a 2015 Marathi film based on a play by the same name. Directed by Subodh Bhave, the film stars Sachin Pilgaonkar, Shankar Mahadevan, and Subodh Bhave in lead roles. The film marks the acting debut for Mahadevan and directorial debut for Bhave. The original play premiered in 1967 in Mumbai, where Hindustani classical vocalist Vasantrao Deshpande played one of the protagonists. In 2010, the play was relaunched with protagonists essayed by Rahul Deshpande, grandson of Vasantrao Deshpande and singer Mahesh Kale.'
            },{
                id: 3,
                name: 'Vedhalam',
                language: 'Tamil',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/vedhalam.jpg',
                image: 'images/movie/vedhalam.png',
                description: 'Naanaku Prematho (English: To father, with love) is a 2016 Telugu action thriller film written and directed by Sukumar and produced by B. V. S. N. Prasad under his Sri Venkateswara Cine Chitra Banner and co-produced by Bhogavalli Bapineedu and Reliance Entertainment. The film features NTR and Rakul Preet Singh in the lead roles while Jagapati Babu and Rajendra Prasad played crucial supporting roles. Nannaku Prematho marks the 25th film of Rama Rao Jr. as an actor.'
            },{
                id: 4,
                name: 'Nanuku Prematho',
                language: 'Telugu',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/nanuku-poster.jpg',
                image: 'images/movie/nanaku.png',
                description: 'Naanaku Prematho (English: To father, with love) is a 2016 Telugu action thriller film written and directed by Sukumar and produced by B. V. S. N. Prasad under his Sri Venkateswara Cine Chitra Banner and co-produced by Bhogavalli Bapineedu and Reliance Entertainment. The film features NTR and Rakul Preet Singh in the lead roles while Jagapati Babu and Rajendra Prasad played crucial supporting roles. Nannaku Prematho marks the 25th film of Rama Rao Jr. as an actor.'
            },{
                id: 5,
                name: 'Natasamrat',
                language: 'Hindi',
                status: 'old',
                price: 12,
                when: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/natasamrat.jpg',
                image: 'images/movie/natasamrat.png',
                description: 'Natsamrāt (The King of Actors) is a 2016 Marathi language film featuring Nana Patekar in the leading role. It is directed by Mahesh Manjrekar and produced by Patekar and Vishwas Joshi under the banner of Great Maratha Entertainment, Gajanan Chitra and Fincraft Media & Entertainment Pvt. Ltd. The film was officially released in India on 1st Jan. 2016 and got a very good response at opening. Most of them have given rating of 4 out 5 to this film.'
            },{
                id: 6,
                name: 'Miruthan',
                language: 'Tamil',
                status: 'now',
                price: 15,
                when: [new Date("Feb 21, 2016 16:00:00")],
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/miruthan.png',
                description: 'Miruthan is an upcoming first Tamil Zombie horror film directed by Shakti Soundar Rajan, starring Jayam Ravi and Lakshmi Menon in the leading roles. It is the first Indian Tamil language zombie film.'
            }
            
        ];
    
        this.getMovies = function() {
            return movies;
        };
        
        this.getMovie = function(index) {
            return movies[index-1];
        };

        })

    .service('eventFactory', function() {
    
    var events = [
        {
            id:1,
            name: 'Diwali - Celebration of Lights',
            when: new Date("November 3, 2013 15:00:00"),
            image: 'images/event/diwali2013.jpg'
        },
        {
            id:2,
            name: 'Diwali - Celebration of Lights',
            when: new Date("October 19, 2014 14:00:00"),
            image: 'images/event/diwali2014.jpg'
        }
    ];
    
    this.getEvents = function() {
        return events;
    }
})



;