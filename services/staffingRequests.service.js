angular.module('tps').factory('StaffingRequestsService', staffingRequestsService);

function staffingRequestsService(StaffingRequestsConstant){
    var staffingRequestService = {};

    staffingRequestService.getAll = getAll;
    staffingRequestService.getById = getById;
    staffingRequestService.create = create;

    var staffingRequests = StaffingRequestsConstant.staffingRequests;
    console.log(staffingRequests);

    function getAll(){
        return staffingRequests;
    }

    function getById(id){
        var staffingRequests = StaffingRequestsConstant.staffingRequests;

        for(var i = 0; i < staffingRequests.length; i++){
            if(id.toString() === staffingRequests[i].id.toString()){
                return staffingRequests[i];
            }
        }

        return null;
    }

    function create(companyObj, hiringUserObj, skillKeywordsArr){
        var id = 1000;

        for(var i = 0; i < staffingRequests.length; i++){
            id = Math.max(id, staffingRequests[i]);
        }

        staffingRequests.concat({
            id: id,
            company: companyObj,
            hiringUser: hiringUserObj,
            active: true,
            skillKeywords: skillKeywordsArr,
            create: new Date()
        });
    }

    return staffingRequestService;
}