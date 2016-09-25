angular.module('tps').factory('StaffingRequestsService', staffingRequestsService);

function staffingRequestsService(StaffingRequestsConstant){
    var staffingRequestService = {};

    staffingRequestService.getAll = getAll;
    staffingRequestService.getById = getById;

    function getAll(){
        return StaffingRequestsConstant.staffingRequests;
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

    return staffingRequestService;
}