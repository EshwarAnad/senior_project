angular.module('tps').factory('CandidateService', candidateService);

function candidateService(CandidatesConstants){
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

        var candidate = {
            id: id,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            skills: skills,
            status: status,
            notes: [],
            privateNotes: [],
            recommendations: []
        };

        candidates.push(candidate);

        return candidate;
    }

    return candidateService;
}