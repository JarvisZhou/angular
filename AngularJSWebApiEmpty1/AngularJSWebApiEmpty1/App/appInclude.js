(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('appInclude', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);

    /*添加控制器父子作用域  值复制*/
    app.controller("templateController", function ($scope) {
        $scope.someBareValue = "templateController.someBarValue";
        $scope.parentAction = function () {
            $scope.someBareValue = "你好  Jarvis，我来自父作用域！"
        };
    });
})();
