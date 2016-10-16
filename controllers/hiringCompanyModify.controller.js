angular.module('tps').controller('ModifyHiringCompanyCtrl', modifyHiringCompanyController);

function modifyHiringCompanyController(companyId, $scope, $location, ROUTES, HiringCompaniesService){
    $scope.title = 'Modify Hiring Company';

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.hiringCompany = HiringCompaniesService.get(companyId);

    function update(){

    }

    function cancel(){
        $location.path(ROUTES.HIRING_COMPANIES_DETAIL.replace(":id", companyId))
    }
}