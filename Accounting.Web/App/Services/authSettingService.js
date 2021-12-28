app.factory('authSettingService', ['apiService',function (apiService) {
    var authSettingService = {};
    authSettingService.authAccess = null;

    authSettingService.fillAuthData = function () {

        var currentDate = new Date();
        var sharePointUrl = document.getElementById("sharePointUrl").value;
        var accessToken = document.getElementById("accessToken").value;
        var accountName = document.getElementById("accountName").value;
        var hostedUrl = location.protocol + '//' + window.location.href.split("/")[2];
        
        authSettingService.authAccess = {
            sharePointUrl: sharePointUrl,
            accessToken: accessToken,
            account: accountName,
            hostedUrl: hostedUrl,
            date: currentDate
        };

        if (apiService.serviceUrl === null) {
            apiService.serviceUrl = document.getElementById("serviceUrl").value;
        }
    }

    return authSettingService;
}]);