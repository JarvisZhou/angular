(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('appRepeatAndSoOn', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);

    /*添加控制器父子作用域  值复制*/
    app.controller("peopleController", function ($scope) {
        $scope.people = [
            { name: "theresa", city: "安庆" },
            { name: "jarvis", city: "阜阳" },
            { name: "andy", city: "香港" },
            { name: "jarvis", city: "阜阳" },
        ];
    });

    app.controller("equationControlleer", function ($scope) {
        $scope.equation = {};
        $scope.change = function () {
            $scope.equation.output = parseInt($scope.equation.x) + 2;
        };
    });
})();
