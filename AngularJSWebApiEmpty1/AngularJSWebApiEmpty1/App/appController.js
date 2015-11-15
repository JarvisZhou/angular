(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('appController', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);

    /*添加控制器父子作用域  值复制*/
    app.controller("parentController", function ($scope) {
        $scope.someBareValue = "你好 Jarvis";
        $scope.parentAction = function () {
            $scope.someBareValue = "你好  Jarvis，我来自父作用域！"
        };
    })
    .controller("childController", function ($scope) {
        $scope.childAction = function () {
            $scope.someBareValue = "hello jarvis ，我来自子作用域"
        };
    });

    /*添加控制器 父子作用域 引用复制*/
    app.controller("parentRefController", function ($scope) {
        $scope.someModel = { someBareValue: "你好 Jarvis" };
        $scope.parentAction = function () {
            $scope.someModel.someBareValue = "你好  Jarvis，我来自父作用域！"
        };
    })
    .controller("childRefController", function ($scope) {
        $scope.childAction = function () {
            $scope.someModel.someBareValue = "hello jarvis ，我来自子作用域"
        };
    });
})();
