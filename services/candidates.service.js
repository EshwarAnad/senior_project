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

        candidates.push({
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
        })
    }

    return candidateService;
}