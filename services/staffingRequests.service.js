angular.module('tps').factory('StaffingRequestsService', staffingRequestsService);

function staffingRequestsService(StaffingRequestsConstant, HiringCompaniesService, $rootScope){
    var staffingRequestService = {};

    staffingRequestService.getAll = getAll;
    staffingRequestService.getById = getById;
    staffingRequestService.create = create;

    var staffingRequests = StaffingRequestsConstant.staffingRequests;

    function getAll(){
        /*for(var i = 0; i < staffingRequests.length; i++){
            staffingRequests[i];
        }*/

        return staffingRequests;
    }

    function getById(id){
        for(var i = 0; i < staffingRequests.length; i++){
            if(id.toString() === staffingRequests[i].id.toString()){
                var request = staffingRequests[i];
                var sesh = $rootScope.session;

                if(sesh.type === 'admin' || sesh.type === 'staffing'
                    || request.company.id.toString() === sesh.hiringCompany.id.toString()){
                    return request
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    function create(companyObj, hiringUserObj, skillKeywordsArr, notesArr){
        var id = 1000;

        for(var i = 0; i < staffingRequests.length; i++){
            id = Math.max(id, staffingRequests[i].id + 1);
        }

        var staffingRequest = {
            id: id,
            company: companyObj,
            hiringUser: hiringUserObj,
            active: true,
            skillKeywords: skillKeywordsArr,
            notes: notesArr,
            created: new Date()
        };

        staffingRequests.push(staffingRequest);

        HiringCompaniesService.addStaffingRequest(hiringUserObj.id, staffingRequest);
    }

    return staffingRequestService;
}