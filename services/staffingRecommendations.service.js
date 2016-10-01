angular.module('tps').factory('StaffingRecommendationsService', staffingRecommendationsService);

function staffingRecommendationsService(StaffingRecommendationsConstant){
    var staffingRecommendationsService = {};

    staffingRecommendationsService.getAll = getAll;
    staffingRecommendationsService.getById = getById;
    staffingRecommendationsService.create = create;

    var staffingRecommendations = StaffingRecommendationsConstant.staffingRecommendations;

    function getAll(){
        return staffingRecommendations;
    }

    function getById(id){
        for(var i = 0; i < staffingRecommendations.length; i++){
            if(id.toString() === staffingRecommendations[i].id.toString()){
                return staffingRecommendations[i];
            }
        }

        return null;
    }

    function create(companyObj, staffingUserObj, candidatesArr, requestObj, notesArr){
        var id = 1000;

        for(var i = 0; i < staffingRecommendations.length; i++){
            id = Math.max(id, staffingRecommendations[i].id);
        }

        staffingRecommendations.push({
            id: id,
            active: true,
            company: companyObj,
            staffingUser: staffingUserObj,
            candidates: candidatesArr,
            request: requestObj,
            notes: notesArr,
            created: new Date()
        });
    }

    return staffingRecommendationsService;
}