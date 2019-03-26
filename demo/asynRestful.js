(function() {
    "use strict";

    app.service('CommonFactory', ['$http', '$state', '$q',
        function ($http, $state, $q) {
            var CommonFactory = {};

            CommonFactory.getType = function (target) {
                return Object.prototype.toString.call(target).slice(8, -1);
            };

            CommonFactory.updateUrl = function (url, Parameter) {
                var newUrl = url;
                var firstParams = true;

                if (Parameter && CommonFactory.getType(Parameter.params) === 'Object') {
                    newUrl += '?';

                    angular.forEach(Parameter.params, function (index, key) {
                        newUrl += firstParams ? key + '=' + Parameter.params[key] : '&' + key + '=' + Parameter.params[key];
                        firstParams = false;
                    });
                }
                if (Parameter && CommonFactory.getType(Parameter.params) === 'Array') {

                    angular.forEach(Parameter.params, function (key) {
                        newUrl += '/' + key;
                    });
                }
                return newUrl;
            };

            CommonFactory.asyncGet = function (Url, Parameter) {
                var deferred = $q.defer();

                $http.get(
                    CommonFactory.updateUrl(Url, Parameter)
                ).then(function (response) {
                    if (response.status === 200) {
                        deferred.resolve({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }else {
                        deferred.reject({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }
                }, function (error) {
                    deferred.reject({
                        data: error.data,
                        status: error.status,
                        headers: error.headers(),
                        config: error.config
                    });
                });
                return deferred.promise;
            };

            CommonFactory.asyncPost = function (Url, Parameter) {
                var deferred = $q.defer();

                $http.post(
                    Url,
                    Parameter,
                    {headers:{'Content-Type': 'text/plain;charset=UTF-8'}}
                ).then(function (response) {
                    if (response.status === 200) {
                        deferred.resolve({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }else {
                        deferred.reject({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }
                }, function (error) {
                    deferred.reject({
                        data: error.data,
                        status: error.status,
                        headers: error.headers(),
                        config: error.config
                    });
                });
                return deferred.promise;
            };

            CommonFactory.asyncPut = function (Url, Parameter) {
                var deferred = $q.defer();

                $http.put(
                    Url,
                    Parameter,
                    {headers:{'Content-Type': 'text/plain;charset=UTF-8'}}
                ).then(function (response) {
                    if (response.status === 200) {
                        deferred.resolve({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }else {
                        deferred.reject({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }
                }, function (error) {
                    deferred.reject({
                        data: error.data,
                        status: error.status,
                        headers: error.headers(),
                        config: error.config
                    });
                });
                return deferred.promise;
            };

            CommonFactory.asyncDelete = function (Url, Parameter) {
                var deferred = $q.defer();

                $http.delete(
                    CommonFactory.updateUrl(Url, Parameter)
                ).then(function (response) {
                    if (response.status === 200) {
                        deferred.resolve({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }else {
                        deferred.reject({
                            data: response.data,
                            status: response.status,
                            headers: response.headers(),
                            config: response.config
                        });
                    }
                }, function (error) {
                    deferred.reject({
                        data: error.data,
                        status: error.status,
                        headers: error.headers(),
                        config: error.config
                    });
                });
                return deferred.promise;
            };

            return CommonFactory;
        }]);

})();