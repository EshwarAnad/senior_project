angular.module('tps').constant('CandidatesConstants', {
    list: [
        {
            id: 1000,
            username: 'andysterks',
            password: 'password',
            firstName: 'Andy',
            lastName: 'Sterkowitz',
            skills: 'C#, AngularJS, Javascript',
            status: 'UnemployedJobSearching',
            notes: [

            ],
            privateNotes: [
                {
                    content: 'An awesome candidate!  He should get hired somewhere...',
                    author: {
                        id: 1001,
                        username: 'sallystaffer',
                        firstName: 'Sally',
                        lastName: 'Staffer',
                        type: 'staffing',
                        hiringCompany: null,
                        emailAddress: 'sally@tpsstaffing.com',
                        password: 'password1234'
                    },
                    created: new Date(2016, 8, 7, 11, 17, 11, 13)
                }
            ],
            recommendations: [

            ]
        },
        {
            id: 1001,
            username: 'elonmusk',
            password: 'password',
            firstName: 'Elon',
            lastName: 'Musk',
            skills: 'Physics, Astrophysics, Rocket Science, Electric Cars',
            status: 'EmployedNotInterested',
            notes: [],
            privateNotes: [

            ],
            recommendations: [

            ]
        },
        {
            id: 1002,
            username: 'michaeljordan',
            password: 'password',
            firstName: 'Michael',
            lastName: 'Jordan',
            skills: 'Basketball, Dunking',
            status: 'EmployedJobSearching',
            notes: [],
            privateNotes: [

            ],
            recommendations: [

            ]
        }
    ]
});