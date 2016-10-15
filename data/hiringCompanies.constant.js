angular.module('tps').constant('HiringCompaniesConstants', {
    hiringCompanies: [
        {
            id: 1000,
            name: 'ACME Inc.',
            users: [
                {
                    id: 1002,
                    username: 'henryhiring',
                    firstName: 'Henry',
                    lastName: 'Hiring',
                    type: 'hiring',
                    hiringCompany: 'ACME Inc.',
                    emailAddress: 'henry@acmeinc.com',
                    password: 'password1234'
                }
            ],
            notes: [],
            active: true
        },
        {
            id: 1001,
            name: 'SpaceX',
            users: [
                {
                    id: 1003,
                    username: 'stephenspacex',
                    firstName: 'Stephen',
                    lastName: 'SpaceX',
                    type: 'hiring',
                    hiringCompany: 'SpaceX',
                    emailAddress: 'stephen@spacex.com',
                    password: 'password1234'
                }
            ],
            notes: [],
            active: true
        }
    ]
});