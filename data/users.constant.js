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
        }
    ]
});