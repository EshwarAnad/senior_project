angular.module('tps').constant('StaffingRecommendationsConstant', {
    staffingRecommendations: [
        {
            id: 1000,
            active: true,
            company: {
                id: 1001,
                name: 'SpaceX',
                userIds: [ 1003 ],
                notes: '',
                active: true
            },
            staffingUser: {
                id: 1001,
                username: 'sallystaffer',
                firstName: 'Sally',
                lastName: 'Staffer',
                type: 'staffing',
                hiringCompany: null,
                emailAddress: 'sally@tpsstaffing.com',
                password: 'password1234'
            },
            candidates: [
                {
                    id: 9000,
                    details: {
                        id: 1000,
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

                        ],
                        user: {
                            id: 1006,
                            username: 'andysterks',
                            firstName: 'Andy',
                            lastName: 'Sterkowitz',
                            type: 'candidate',
                            hiringCompany: null,
                            emailAddress: 'andys@gmail.com',
                            password: 'password1234'
                        }
                    },
                    candidateResponse: 'yes',
                    hiringCompanyResponse: 'yes'
                },
                {
                    id: 9001,
                    details: {
                        id: 1002,
                        skills: 'Basketball, Dunking',
                        status: 'EmployedJobSearching',
                        notes: [],
                        privateNotes: [

                        ],
                        recommendations: [

                        ],
                        user: {
                            id: 1005,
                            username: 'michaeljordan',
                            firstName: 'Michael',
                            lastName: 'Jordan',
                            type: 'candidate',
                            hiringCompany: null,
                            emailAddress: 'ccandidate@gmail.com',
                            password: 'password1234'
                        }
                    },
                    candidateResponse: null,
                    hiringCompanyResponse: null
                }
            ],
            request: {
                id: 1000,
                company: 'SpaceX',
                hiringUser: {
                    id: 1003,
                    username: 'stephenspacex',
                    firstName: 'Stephen',
                    lastName: 'SpaceX',
                    type: 'hiring',
                    hiringCompany: 'SpaceX',
                    emailAddress: 'stephen@spacex.com',
                    password: 'password1234'
                },
                active: true,
                skillKeywords: [ 'c#', 'javascript', 'database'],
                created: new Date(2016, 8, 6, 23, 12, 1, 3)
            },
            notes: [
                {
                    content: 'The hiring company is not super picky about this.  This recommendation is the best I ' +
                        'could come up with.  Awaiting feedback from the hiring company',
                    user: {
                        id: 1001,
                        username: 'sallystaffer',
                        firstName: 'Sally',
                        lastName: 'Staffer',
                        type: 'staffing',
                        hiringCompany: null,
                        emailAddress: 'sally@tpsstaffing.com',
                        password: 'password1234'
                    }
                }
            ],
            created: new Date(2016, 8, 7, 11, 17, 11, 13)
        }
    ]
});
