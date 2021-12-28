app.service('httpService', ['$http','apiService',function ($http, apiService) {
    var httpService = {};
     httpService.get = function (url, data) {
        return $http.get(apiService.serviceUrl+url
            , data
            , { headers: { 'Content-Type': 'application/json' } });
    }

    httpService.post = function (url, data) {
        var returnData = "="+JSON.stringify(data);
        return $http.post(apiService.serviceUrl+url
            , data
            , { headers: { 'Content-Type': 'application/json' } });
    }

    httpService.upload = function (url, data) {
        return $http.post(apiService.serviceUrl + url
            , data
            , { headers: { 'Content-Type': undefined } });
    }

    return httpService;
}]);
