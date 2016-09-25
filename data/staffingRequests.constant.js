angular.module('tps').constant('StaffingRequestsConstant', {
    staffingRequests: [
        {
            id: 1000,
            company: 'SpaceX',
            staffingUser: {
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
            skillKeywords: [ 'c#', 'javascript', 'database']
        },
        {
            id: 1001,
            company: 'ACME Inc.',
            staffingUser: {
                id: 1002,
                username: 'henryhiring',
                firstName: 'Henry',
                lastName: 'Hiring',
                type: 'hiring',
                hiringCompany: 'ACME Inc.',
                emailAddress: 'henry@acmeinc.com',
                password: 'password1234'
            },
            active: true,
            skillKeywords: [ 'secretary', 'microsoft office', 'clerical']
        }
    ]
});