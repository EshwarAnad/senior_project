angular.module('tps').factory('CandidateUserService', candidateUserService);

function candidateUserService(CandidatesConstants, UsersConstants){
    var userCandidateService = {};

    // USER
    userCandidateService.getAllUsers = getAllUsers;
    userCandidateService.getUserByUserName = getUserByUsername;
    userCandidateService.getUserById = getUserById;
    userCandidateService.createUser = createUser;
    userCandidateService.addCandidateEntityToUser = addCandidateEntityToUser;
    userCandidateService.modifyUserCandidate = modifyUserCandidate;

    // CANDIDATE
    userCandidateService.getAllCandidates = getAllCandidates;
    userCandidateService.getCandidateById = getCandidateById;
    userCandidateService.createCandidate = createCandidate;
    userCandidateService.addUserEntityToCandidate = addUserEntityToCandidate;

    var users = UsersConstants.users;
    var candidates = CandidatesConstants.list;

    // USER FUNCTIONS
    function getAllUsers(){
        return users;
    }

    function getUserByUsername(username){
        for(var i = 0; i < users.length; i++){
            if(username.toLowerCase() === users[i].username.toLowerCase()){
                return users[i];
            }
        }

        return null;
    }

    function getUserById(id){
        for(var i = 0; i < users.length; i++){
            if(id.toString() === users[i].id.toString()){
                return users[i];
            }
        }

        return null;
    }

    function createUser(username, firstName, lastName,
                    type, hiringCompanyObj, emailAddress, password){
        var id = 1000;

        for(var i = 0; i < users.length; i++){
            id = Math.max(id, users[i].id + 1);
        }

        var user = {
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            type: type,
            hiringCompany: hiringCompanyObj,
            emailAddress: emailAddress,
            password: password,
            created: new Date()
        };

        users.push(user);

        return user;
    }

    function addCandidateEntityToUser(id, candidate){
        user = getUserById(id);

        user.candidateInfo = candidate;
    }

    function modifyUserCandidate(userId, password, firstName, lastName, skills, status){
        var user = getUserById(userId);

        user.password = password;
        user.firstName = firstName;
        user.lastName = lastName;

        var candidate = getCandidateById(user.candidateInfo.id);

        candidate.skills = skills;
        candidate.status = status;

        user.candidateInfo = candidate;
        candidate.user = user;
    }

    // CANDIDATE FUNCTIONS

    function getAllCandidates(){
        return candidates;
    }

    function getCandidateById(id){
        for(var i = 0; i < candidates.length; i++){
            if(id.toString() === candidates[i].id.toString()){
                return candidates[i];
            }
        }

        return null;
    }

    function createCandidate(username, password, firstName, lastName, skills, status){
        var id = 1000;

        for(var i = 0; i < candidates.length; i++){
            id = Math.max(id, candidates[i].id + 1);
        }

        var user = createUser(username, firstName, lastName, 'candidate', null,
            "default@candidate.tps.com", password);

        var candidate = {
            id: id,
            skills: skills,
            status: status,
            notes: [],
            privateNotes: [],
            recommendations: [],
            user: user
        };

        addCandidateEntityToUser(user.id, candidate);

        candidates.push(candidate);

        return candidate;
    }

    function addUserEntityToCandidate(candidateId, user){
        candidate = getCandidateById(candidateId);

        candidate.user = user;
    }

    return userCandidateService;
}