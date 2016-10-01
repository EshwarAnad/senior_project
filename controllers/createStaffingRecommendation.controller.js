angular.module('tps').controller('CreateStaffingRecommendationCtrl', createStaffingRecommendationController);

function createStaffingRecommendationController(staffingRequestId, $scope, $location, CandidatesConstants){

    $scope.title = 'Create Staffing Recommendation';

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