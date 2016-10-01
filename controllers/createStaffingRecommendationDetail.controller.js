angular.module('tps').controller('CreateStaffingRecommendationDetailCtrl', createStaffingRecommendationDetailController);

function createStaffingRecommendationDetailController(staffingRequestId, $scope, $location, CandidatesConstants, StaffingRequestsService){

    $scope.title = 'Create Staffing Recommendation Details';

    $scope.staffingRequest = StaffingRequestsService.getById(staffingRequestId);

    $scope.candidates = CandidatesConstants.list;

    $scope.goTo = goTo;
    $scope.stopProp = stopProp;

    function goTo(path){
        $location.path(path);
    }

    function stopProp(evt, candidate, viewDetail){
        evt.stopPropagation();
        if(viewDetail){
            $location.path('staffing/recommendations/create/candidate/' + candidate.id);
        } else if(candidate){
            //candidate.selected = !candidate.selected;
        }
    }
}