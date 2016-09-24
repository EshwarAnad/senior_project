angular.module('tps').controller('CandidatesCtrl', function($scope, CandidatesConstants, $location){
        $scope.title = 'Candidates';

        $scope.candidates = CandidatesConstants.list;

        $scope.goToCandidate = function(candidate){
                $location.path('/candidate/' + candidate.id);
        }
});