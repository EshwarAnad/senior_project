angular.module('tps').controller('CandidateRecommendationDetailCtrl', candidatesRecommendationDetailController);

function candidatesRecommendationDetailController(recommendationId, $scope, $location, ROUTES, StaffingRecommendationsService){
    $scope.title = "Job Recommendation Details";

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.recommendation = StaffingRecommendationsService.getById(recommendationId);

    function update(){

    }

    function cancel(){
        $location.path(ROUTES.CANDIDATE_RECOMMENDATIONS);
    }
}