angular.module('tps').factory('StaffingRecommendationsService', staffingRecommendationsService);

function staffingRecommendationsService(StaffingRecommendationsConstant, $rootScope){
    var staffingRecommendationsService = {};

    staffingRecommendationsService.getAll = getAll;
    staffingRecommendationsService.getById = getById;
    staffingRecommendationsService.create = create;
    staffingRecommendationsService.getForCandidate = getForCandidate;

    var staffingRecommendations = StaffingRecommendationsConstant.staffingRecommendations;

    function getAll(){
        return staffingRecommendations;
    }

    function getById(id){
        for(var i = 0; i < staffingRecommendations.length; i++){
            if(id.toString() === staffingRecommendations[i].id.toString()){
                var recommendation = staffingRecommendations[i];
                var session = $rootScope.session;

                if((session.type === 'admin' || session.type === 'staffing'
                    || recommendation.company.id.toString()
                    === session.hiringCompany.id.toString())){
                    return recommendation
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    function create(companyObj, staffingUserObj, candidatesArr, requestObj, notesArr){
        var id = 1000;

        for(var i = 0; i < staffingRecommendations.length; i++){
            id = Math.max(id, staffingRecommendations[i].id + 1);
        }

        var recommendedCandidates = [];

        for(var j = 0; j < candidatesArr.length; j++){
            recommendedCandidates.push({
                id: getId(),
                details: candidatesArr[j],
                candidateResponse: null,
                hiringCompanyResponse: null
            })
        }

        staffingRecommendations.push({
            id: id,
            active: true,
            company: companyObj,
            staffingUser: staffingUserObj,
            candidates: recommendedCandidates,
            request: requestObj,
            notes: notesArr,
            created: new Date()
        });

        console.log('Take a look at the newly create rec');
        console.log(staffingRecommendations);
    }

    function getId(){
        var id = 9000;

        for(var i = 0; i < staffingRecommendations.length; i++){
            for(var j = 0; j < staffingRecommendations[i].candidates.length; j++){
                id = Math.max(id, staffingRecommendations[i].candidates[j].id + 1);
            }
        }

        return id;
    }

    function getForCandidate(candidateId){
        if(!candidateId) return [];

        var recommendations = [];

        for(var i = 0; i < staffingRecommendations.length; i++){
            for(var j = 0; j < staffingRecommendations[i].candidates.length; j++){
                if(staffingRecommendations[i].candidates[j].details.id.toString() === candidateId.toString()){
                    var recommendation = staffingRecommendations[i];

                    recommendation.myCurrentResponse = staffingRecommendations[i].candidates[j].candidateResponse;

                    recommendations.push(recommendation);
                }
            }
        }

        return recommendations;
    }

    return staffingRecommendationsService;
}