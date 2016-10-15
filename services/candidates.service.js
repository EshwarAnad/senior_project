angular.module('tps').factory('CandidateService', candidateService);

function candidateService(CandidatesConstants, UserService){
    var candidateService = {};

    candidateService.getAll = getAll;
    candidateService.getById = getById;
    candidateService.create = create;

    var candidates = CandidatesConstants.list;

    function getAll(){
        return candidates;
    }

    function getById(){

    }

    function create(username, password, firstName, lastName, skills, status){
        var id = 1000;

        for(var i = 0; i < candidates.length; i++){
            id = Math.max(id, candidates[i].id + 1);
        }

        var user = UserService
            .create(username, firstName, lastName, 'candidate', null, "default@candidate.tps.com", password);

        var candidate = {
            id: id,
            skills: skills,
            status: status,
            notes: [],
            privateNotes: [],
            recommendations: [],
            user: user
        };

        UserService.addCandidateEntity(user.id, candidate);

        candidates.push(candidate);

        return candidate;
    }

    return candidateService;
}