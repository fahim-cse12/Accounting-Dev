app.run(['$rootScope','$templateCache',function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
}]);

app.factory('httpRequestInterceptor', [ 'authSettingService',function (authSettingService) {
    authSettingService.fillAuthData();
    return {
        request: function (config) {          
            config.headers['accessToken'] = authSettingService.authAccess.accessToken; 
            config.headers['sharePointUrl'] = authSettingService.authAccess.sharePointUrl; 
            config.headers['account'] = authSettingService.authAccess.account;
            config.headers['hostedUrl'] = authSettingService.authAccess.hostedUrl;
            return config;
        }
    };
}]);

app.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');   
}]);


app.run(['$rootScope', '$route', 'authService', '$location', 'httpService', function ($rootScope, $route, authService, $location, httpService) {
    $rootScope.$on('$routeChangeSuccess', function (currentRoute, previousRoute) {
        if ($route.current.action) {           
            if ($route.current.action == "master") {
                var currUser = null;

                if (authService.getCurrentUser != null) {
                    httpService.post("/api/Users/CheckAdminPrivilege", authService.currentUserInfo).then(
                        function success(response) {
                            if (response.data.output == null) {
                                $location.path('/');
                                //alert("You don't have access here");
                                swal("Access Denied!", "You don't have access here", "error");
                            }
                        }, function error() {
                            swal("Something went wrong!", "Error!!!", "error");
                        }

                    );
                }
                //else {
                //    $location.path('/');
                //    //alert("You don't have access here");
                //    swal("Access Denied!", "You don't have access here", "info");
                //}   
            }
        }
    });

    
}]);