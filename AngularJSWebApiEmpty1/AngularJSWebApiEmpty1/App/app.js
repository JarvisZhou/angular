(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('app', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);

    /*添加控制器 way 1*/
    app.controller("lockController", function ($scope) {

        var date = new Date();
        $scope.clock = {
            now: new Date()
        };

        var updateClock = function () {
            $scope.clock.now = new Date();
        };

        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);

    });

    /*添加控制器 way 2*/
    //var injectParams = ['$location'];//'$scope',
    //var lockController = function ($scope) {

    //    var date = new Date();
    //    $scope.clock = {
    //        now: new Date()
    //    };

    //    var updateClock = function () {
    //        $scope.clock.now = new Date();
    //    };

    //    setInterval(function () {
    //        $scope.$apply(updateClock);
    //    }, 1000);

    //}
    //lockController.$inject = injectParams;///为控制器指定需要注入的对象名称，必须使用$inject.猜想：在调用该controller是会检查是否有$inject属性，若有则会根据参数注入需要的值。

    //将LockController 注入到app的module中
    //angular.module('app')
    //    .controller('lockController', lockController);

})();
