angular.module('tps').controller('HiringCompanyCtrl', hiringCompanyController);

function hiringCompanyController($scope, $location, hiringCompanyId, HiringCompaniesService){
    $scope.hiringCompany = HiringCompaniesService.get(hiringCompanyId);

    $scope.title = 'Hiring Company: ' + $scope.hiringCompany.name;

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}