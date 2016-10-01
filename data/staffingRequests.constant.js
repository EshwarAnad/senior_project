angular.module('tps').constant('StaffingRequestsConstant', {
    staffingRequests: [
        {
            id: 1000,
            company: {
                id: 1001,
                name: 'SpaceX',
                userIds: [ 1003 ],
                notes: '',
                active: true
            },
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
            notes: [],
            created: new Date(2016, 8, 6, 23, 12, 1, 3)
        },
        {
            id: 1001,
            company: {
                id: 1000,
                name: 'ACME Inc.',
                userIds: [ 1002 ],
                notes: '',
                active: true
            },
            hiringUser: {
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
            skillKeywords: [ 'secretary', 'microsoft office', 'clerical'],
            notes: [
                {
                    content: 'This needs to get done ASAP.  We\'re in a hurry!',
                    author: {
                        id: 1002,
                        username: 'henryhiring',
                        firstName: 'Henry',
                        lastName: 'Hiring',
                        type: 'hiring',
                        hiringCompany: 'ACME Inc.',
                        emailAddress: 'henry@acmeinc.com',
                        password: 'password1234'
                    }
                }
            ],
            created: new Date(2016, 6, 15, 35, 11, 10, 23)
        }
    ]
});