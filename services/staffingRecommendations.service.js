angular.module('tps').factory('StaffingRecommendationsService', staffingRecommendationsService);

function staffingRecommendationsService(StaffingRecommendationsConstant){
    var staffingRecommendationsService = {};

    staffingRecommendationsService.getAll = getAll;
    staffingRecommendationsService.getById = getById;

    function getAll(){
        return StaffingRecommendationsConstant.staffingRecommendations;
    }

    function getById(id){
        var staffingRecommendations = StaffingRecommendationsConstant.staffingRecommendations;

        for(var i = 0; i < staffingRecommendations.length; i++){
            if(id.toString() === staffingRecommendations[i].id.toString()){
                return staffingRecommendations[i];
            }
        }

        return null;
    }

    return staffingRecommendationsService;
}