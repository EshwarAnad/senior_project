angular.module('tps').constant('UsersConstants', {
    users: [
        {
            id: 1000,
            username: 'andyadmin',
            firstName: 'Andy',
            lastName: 'Admin',
            type: 'admin',
            hiringCompany: null,
            emailAddress: 'andy@tpsstaffing.com',
            password: 'password1234'
        },
        {
            id: 1001,
            username: 'sallystaffer',
            firstName: 'Sally',
            lastName: 'Staffer',
            type: 'staffing',
            hiringCompany: null,
            emailAddress: 'sally@tpsstaffing.com',
            password: 'password1234'
        },
        {
            id: 1002,
            username: 'henryhiring',
            firstName: 'Henry',
            lastName: 'Hiring',
            type: 'hiring',
            hiringCompany: 'ACME Inc.',
            emailAddress: 'henry@acmeinc.com',
            password: 'password1234'
        },
        {
            id: 1003,
            username: 'stephenspacex',
            firstName: 'Stephen',
            lastName: 'SpaceX',
            type: 'hiring',
            hiringCompany: 'SpaceX',
            emailAddress: 'stephen@spacex.com',
            password: 'password1234'
        },
        {
            id: 1004,
            username: 'christoperCandidate',
            firstName: 'Christopher',
            lastName: 'Candidate',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'ccandidate@gmail.com',
            password: 'password1234',
            candidateInfo: {
                id: 1004,
                skills: 'Copy-writing, Microsoft Word, Microsoft Excel',
                status: 'EmployedJobSearching',
                notes: [

                ],
                privateNotes: [
                    {
                        content: 'This is a very interesting candidate.  I believe he should be hired quickly.',
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
                        created: new Date(2016, 7, 29, 11, 17, 11, 13)
                    }
                ],
                recommendations: [

                ]
            }
        },
        {
            id: 1005,
            username: 'michaeljordan',
            firstName: 'Michael',
            lastName: 'Jordan',
            type: 'candidate',
            hiringCompany: null,
            emailAddress: 'ccandidate@gmail.com',
            password: 'password1234',
            candidateInfo: {
                id: 1002,
                skills: 'Basketball, Dunking',
                status: 'EmployedJobSearching',
                notes: [],
                privateNotes: [

                ],
                recommendations: [

                ]
            }
        }
    ]
});