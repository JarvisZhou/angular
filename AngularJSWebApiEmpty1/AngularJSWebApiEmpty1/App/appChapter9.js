(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('appChapter9', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);

    /*
    ng-disabled
    5秒后禁用控件
    */
    app.run(function ($rootScope, $timeout) {
        $rootScope.isDisabled = true;
        $timeout(function () {
            $rootScope.isDisabled = false;
            $rootScope.myHref = "http://baidu.com";
            $rootScope.imgSrc = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";

        }, 5000);

        //在子作用域中更新父作用域中的rootProperty
        $rootScope.rootProperty = "hello computer";
        $rootScope.someAction = function () {
            $rootScope.rootProperty = "hello human";
        };
    });

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

})();
