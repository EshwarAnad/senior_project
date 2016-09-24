angular.module('tps').controller('CandidateCtrl', function($scope, candidateId, CandidatesConstants, $location){
    $scope.title = 'Candidates';

    var candidates = CandidatesConstants.list;

    for(var i = 0; i < candidates.length; i++){
        if(candidateId.toString() === candidates[i].id.toString()){
            $scope.candidate = candidates[i];
            console.log('Got it');
            break;
        }
    }

    $scope.candidates = CandidatesConstants.list;

    $scope.goTo = function(path){
        $location.path(path);
    }
});