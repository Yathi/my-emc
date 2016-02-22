'use strict';

angular.module('emcApp')
        .service('movieFactory', function($rootScope) {
    
        var currentLocation = "EDMONTON";
    
        var movies = [
            {
                id: 1,
                name: 'Wazir',
                language: 'Hindi',
                status: 'old',
                price: 12,
                city: ['EDMONTON', 'FORT MCMURRAY'],
                when: {edmonton: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/wazir.jpg',
                image: 'images/movie/wazir.png',
                description: 'Naanaku Prematho (English: To father, with love) is a 2016 Telugu action thriller film written and directed by Sukumar and produced by B. V. S. N. Prasad under his Sri Venkateswara Cine Chitra Banner and co-produced by Bhogavalli Bapineedu and Reliance Entertainment. The film features NTR and Rakul Preet Singh in the lead roles while Jagapati Babu and Rajendra Prasad played crucial supporting roles. Nannaku Prematho marks the 25th film of Rama Rao Jr. as an actor.'
                
            },
            {
                id: 2,
                name: 'Katyar',
                language: 'Marathi',
                status: 'year',
                price: 12,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")]},
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
                city: ['EDMONTON'],
                when: {edmonton: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/vedhalam.jpg',
                image: 'images/movie/vedhalam.png',
                description: 'Naanaku Prematho (English: To father, with love) is a 2016 Telugu action thriller film written and directed by Sukumar and produced by B. V. S. N. Prasad under his Sri Venkateswara Cine Chitra Banner and co-produced by Bhogavalli Bapineedu and Reliance Entertainment. The film features NTR and Rakul Preet Singh in the lead roles while Jagapati Babu and Rajendra Prasad played crucial supporting roles. Nannaku Prematho marks the 25th film of Rama Rao Jr. as an actor.'
            },{
                id: 4,
                name: 'Nanuku Prematho',
                language: 'Telugu',
                status: 'year',
                price: 12,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")]},
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
                city: ['CALGARY'],
                when: {edmonton: [new Date("January 15, 2016 15:00:00"), new Date("June 01, 2016 12:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/natasamrat.jpg',
                image: 'images/movie/natasamrat.png',
                description: 'Natsamrāt (The King of Actors) is a 2016 Marathi language film featuring Nana Patekar in the leading role. It is directed by Mahesh Manjrekar and produced by Patekar and Vishwas Joshi under the banner of Great Maratha Entertainment, Gajanan Chitra and Fincraft Media & Entertainment Pvt. Ltd. The film was officially released in India on 1st Jan. 2016 and got a very good response at opening. Most of them have given rating of 4 out 5 to this film.'
            },{
                id: 6,
                name: 'Miruthan',
                language: 'Tamil',
                status: 'now_showing',
                price: 15,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("Feb 21, 2016 16:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/miruthan.png',
                description: 'Miruthan is an upcoming first Tamil Zombie horror film directed by Shakti Soundar Rajan, starring Jayam Ravi and Lakshmi Menon in the leading roles. It is the first Indian Tamil language zombie film.'
            },{
                id: 7,
                name: 'Masss',
                language: 'Tamil',
                status: 'old',
                price: 12,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("May 31, 2015 10:30:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/mass.png',
                description: 'Masss is an upcoming Tamil Action comedy film directed by Venkat Prabhu. Produced by K. E. Gnanavel Raja under his newly launched studio Aadnah Arts, it features an ensemble cast including Suriya, Nayantara, Parthiban, Samuthirakani, Jayaram and Pranitha Subhash. Yuvan Shankar Raja composed the music for the film and cinematography was handled by R. D. Rajasekhar.'
            },
            {
                id: 8,
                name: 'O Kadhal Kanmani',
                language: 'Tamil',
                status: 'old',
                price: 15,
                city: ['EDMONTON', 'CALGARY', 'FORT MCMURRAY'],
                when: {edmonton: [new Date("Apr 25, 2015 10:30:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/ok_kanmani.jpg',
                image: 'images/movie/ok_kanmani.png',
                description: 'O Kadhal Kanmani (English: Oh Love, Apple of my Eye), also known as OK Kanmani, is an upcoming Tamil romantic drama film directed by Mani Ratnam and produced by his home studio Madras Talkies. The film stars Dulquer Salmaan and Nithya Menon in lead roles and tells the story of a young couple cohabiting in India. The soundtrack album and film score are composed by A. R. Rahman.'
            },
            {
                id: 9,
                name: 'Lailaa o Lailaa',
                language: 'Tamil',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("May 24, 2015 18:15:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/miruthan.png',
                description: 'Miruthan is an upcoming first Tamil Zombie horror film directed by Shakti Soundar Rajan, starring Jayam Ravi and Lakshmi Menon in the leading roles. It is the first Indian Tamil language zombie film.'
            },
            {
                id: 10,
                name: '36 Vayadhinile',
                language: 'Tamil',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("May 18, 2015 10:30:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/36.jpg',
                image: 'images/movie/36.png',
                description: '36 Vayadhinile (English: At the age of thirty six) is an Indian Tamil comedy drama film directed by Rosshan Andrrews, written by Bobby Sanjay and produced by Suriya under his production studio 2D Entertainment. It is an official remake of the Malayalam film "How Old Are You" (2014), the film features Jyothika in the leading role, while Rahman essays a supporting role. It marked the comeback of one of the most celebrated actresses in Tamil cinema, Jyothika, and her performance has been the highlight of positive critical reviews.'
            },
            {
                id: 11,
                name: 'Oru Vadakan Selfie',
                language: 'Malayalam',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("May 02, 2015 10:30:00"), new Date("May 03, 2015 9:30:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/selfie.png',
                description: 'Oru Vadakkan Selfie (English: A Northern Selfie) is a 2015 Malayalam comedy thriller cum road movie directed by G. Prajith and scripted by Vineeth Sreenivasan. The film features Nivin Pauly, Manjima Mohan, Aju Varghese, Neeraj Madhav and Vineeth Sreenivasan. Music is composed by Shaan Rahman. The film released on March 27 and received highly positive reviews from critics as well as audience. And became the first commercial successful Malayalam film of 2015 along with Ennum Eppozhum.'
            }
            ,{
                id: 12,
                name: 'Lion',
                language: 'Telugu',
                status: 'old',
                price: 10,
                city: ['CALGARY'],
                when: {edmonton: [new Date("May 17, 2015 15:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/lion.png',
                description: 'Ennum Eppozhum (Malayalam:എന്നും എപ്പോഴും) (English: Forever Always), is a 2015 Malayalam comedy family drama film directed by Sathyan Anthikad and produced by Antony Perumbavoor under the banner of Aashirvad Cinemas. It stars Mohanlal, Manju Warrier, Innocent, Reenu Mathews, Jacob Gregory, Lena Abhilash and Renji Panicker in the main roles. It is written by Ranjan Pramod based on a story by actor Raveendran.'
            }
            ,{
                id: 13,
                name: 'Bajirao Mastani',
                language: 'Hindi',
                status: 'now_showing',
                price: 12,
                city: ['FORT MCMURRAY'],
                when: {edmonton: [new Date("Feb 20, 2015 09:30:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/bajrao.png',
                description: 'Bajirao Mastani is a 2015 Indian epic historical romance film directed by Sanjay Leela Bhansali, who also composed the music score of the film. It is jointly produced by Bhaansali and Eros International. The film stars Ranveer Singh as Bajirao I and Deepika Padukone as Mastani, with Priyanka Chopra playing Rao\'s first wife Kashibai.'
            }
            ,{
                id: 14,
                name: 'Gangs of Wasseypur',
                language: 'Malayalam',
                status: 'old',
                price: 15,
                city: ['CALGARY'],
                when: {edmonton: [new Date("May 12, 2015 18:15:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/gangsofw.png',
                description: 'Ennum Eppozhum (Malayalam:എന്നും എപ്പോഴും) (English: Forever Always), is a 2015 Malayalam comedy family drama film directed by Sathyan Anthikad and produced by Antony Perumbavoor under the banner of Aashirvad Cinemas. It stars Mohanlal, Manju Warrier, Innocent, Reenu Mathews, Jacob Gregory, Lena Abhilash and Renji Panicker in the main roles. It is written by Ranjan Pramod based on a story by actor Raveendran.'
            }
            ,{
                id: 15,
                name: 'Ennum Epozhum',
                language: 'Malayalam',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("Apr 12, 2015 18:15:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/ennum.png',
                description: 'Ennum Eppozhum (Malayalam:എന്നും എപ്പോഴും) (English: Forever Always), is a 2015 Malayalam comedy family drama film directed by Sathyan Anthikad and produced by Antony Perumbavoor under the banner of Aashirvad Cinemas. It stars Mohanlal, Manju Warrier, Innocent, Reenu Mathews, Jacob Gregory, Lena Abhilash and Renji Panicker in the main roles. It is written by Ranjan Pramod based on a story by actor Raveendran.'
            }
            ,{
                id: 16,
                name: '100 Days of Love',
                language: 'Malayalam',
                status: 'old',
                price: 12,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("Apr 11, 2015 11:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/100days.png',
                description: '100 Days of Love is a 2015 Malayalam romantic comedy film written and directed by Jenuse Mohamed, son of veteran Malayalam film director Kamal.The film stars Dulquer Salmaan and Nithya Menen in the lead roles. It released on 20 March and received positive reviews from critics and audiences.'
            }
            ,{
                id: 17,
                name: 'Fireman',
                language: 'Malayalam',
                status: 'old',
                price: 12,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("Mar 21, 2015 11:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/fireman.png',
                description: 'Fireman is a 2015 Malayalam thriller film starring Mammootty, Nyla Usha, Unni Mukundan, and Siddique in the lead roles. It is directed by Deepu Karunakaran and produced by Milan Jaleel under the banner of Galaxy Films. The film has original musical score composed by Rahul Raj.'
            }
            ,{
                id: 18,
                name: 'Bey Yaar',
                language: 'Gujrati',
                status: 'old',
                price: 15,
                city: ['EDMONTON', 'FORT MCMURRAY'],
                when: {edmonton: [new Date("Mar 15, 2015 18:15:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/bey_yaar.png',
                description: 'In the desperation to earn quick money, two best friends put their moral values at stake and end up losing their pride and dignity. They then choose a wrong path to set things right and snatch back what was rightfully theirs.'
            }
            ,{
                id: 19,
                name: 'Picket 43',
                language: 'Malayalam',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("Feb 15, 2015 18:00:00")]},
                venue: 'Metro Cinema',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/picket.png',
                description: 'Picket 43 is a 2015 Malayalam-language Indian war and friendship film written and directed by Major Ravi. It stars Prithviraj and Javed Jaffrey in the lead roles. It was filmed by cinematographer Jomon T. John and most portions of the film were shot in Kashmir. The film dealt with the story of an Indian army officer guarding a picket alone in Kashmir, and his friendship with a Pakistani soldier. The film released on January 23, 2015 to highly positive reviews from critics as well as audience.'
            }
            ,{
                id: 20,
                name: 'Anegan',
                language: 'Tamil',
                status: 'old',
                price: 15,
                city: ['EDMONTON'],
                when: {edmonton: [new Date("Feb 13, 2015 18:15:00")]},
                venue: 'Landmark Cinemas 10',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/anegan.png',
                description: 'Anegan (English: Multiple Single Person) is an upcoming Indian Tamil romantic thriller film directed by K. V. Anand. The film stars Dhanush, Amyra Dastur, Aishwarya Devan and Karthik, with Atul Kulkarni, Ashish Vidyarthi, Aishwarya Devan and Jagan in supporting roles. Produced by AGS Entertainment, the film\'s soundtrack album and background score composed by Harris Jayaraj. Cinematography was handled by Om Prakash and editing was done by Anthony. The film was listed by Behindwoods in its "Top 10 most Anticipated films of 2014"'
            }
            ,{
                id: 20,
                name: 'Apur Panchali',
                language: 'Bengali',
                status: 'old',
                price: 15,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("Nov 02, 2015 13:00:00")]},
                venue: 'Landmark Cinemas 10',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/apur_panchali.png',
                description: 'Anegan (English: Multiple Single Person) is an upcoming Indian Tamil romantic thriller film directed by K. V. Anand. The film stars Dhanush, Amyra Dastur, Aishwarya Devan and Karthik, with Atul Kulkarni, Ashish Vidyarthi, Aishwarya Devan and Jagan in supporting roles. Produced by AGS Entertainment, the film\'s soundtrack album and background score composed by Harris Jayaraj. Cinematography was handled by Om Prakash and editing was done by Anthony. The film was listed by Behindwoods in its "Top 10 most Anticipated films of 2014"'
            }
            ,{
                id: 20,
                name: 'Chaar',
                language: 'Bengali',
                status: 'old',
                price: 15,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("Nov 02, 2015 13:00:00")]},
                venue: 'Landmark Cinemas 10',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/Chaar.png',
                description: 'Anegan (English: Multiple Single Person) is an upcoming Indian Tamil romantic thriller film directed by K. V. Anand. The film stars Dhanush, Amyra Dastur, Aishwarya Devan and Karthik, with Atul Kulkarni, Ashish Vidyarthi, Aishwarya Devan and Jagan in supporting roles. Produced by AGS Entertainment, the film\'s soundtrack album and background score composed by Harris Jayaraj. Cinematography was handled by Om Prakash and editing was done by Anthony. The film was listed by Behindwoods in its "Top 10 most Anticipated films of 2014"'
            }
            ,{
                id: 20,
                name: 'Aagadu',
                language: 'Telugu',
                status: 'old',
                price: 15,
                city: ['EDMONTON', 'CALGARY'],
                when: {edmonton: [new Date("Sep 20, 2015 15:00:00")]},
                venue: 'Landmark Cinemas 10',
                bigimage: 'images/big/miruthan.jpg',
                image: 'images/movie/aagadu.png',
                description: 'Anegan (English: Multiple Single Person) is an upcoming Indian Tamil romantic thriller film directed by K. V. Anand. The film stars Dhanush, Amyra Dastur, Aishwarya Devan and Karthik, with Atul Kulkarni, Ashish Vidyarthi, Aishwarya Devan and Jagan in supporting roles. Produced by AGS Entertainment, the film\'s soundtrack album and background score composed by Harris Jayaraj. Cinematography was handled by Om Prakash and editing was done by Anthony. The film was listed by Behindwoods in its "Top 10 most Anticipated films of 2014"'
            }
            
        ];
    
        this.getMovies = function() {
            var movieList = [];
            //Function to check if the movie list has the particular city
            function contains(a, obj) { 
                for (var i = 0; i < a.length; i++) {
                    if (a[i] === obj) {
                        return true;
                    }
                }
                return false;
            }
            //Loops through every movie to check if that movie is shown in the current Location
            for (var i in movies){
                if (contains(movies[i].city, currentLocation)){
                    movieList.push(movies[i]);
                }
            }
            return movieList;
        };
        
        this.getMovie = function(index) {
            return movies[index-1];
        };
    
        this.setLoc = function(l) {
            console.log("Service setLoc called with " + l);
            currentLocation = l;
            $rootScope.$broadcast('locationChange');
        }
        
        this.getLoc = function() {
            return currentLocation;
        }

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