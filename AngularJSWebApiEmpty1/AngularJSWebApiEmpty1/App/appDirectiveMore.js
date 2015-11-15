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

    /*添加控制器父子作用域  值复制*/
    app.controller("someController", function ($scope) {

    });

    app.controller("secondController", function ($scope) {

    });
    app.directive("myDirective", function () {
        return {
            restrict: "A",
            scope: true//可以是true ,也可以是一个对象。默认值为false。为true时，会从父作用域继承并创建一个新的作用域对象
        };
    });

    /*
    
    隔离作用域

    */
    app.controller("mainController", function ($scope) {

    }).directive("mainDirective", function () {
        return {
            restrict: "A",
            scope: {},
            priority: 100,
            template: '<div>设置了scope为对象，子域就不允许访问父域中的myProperty   Inside mainDirective{{myProperty}}</div>'
        };
    });

    /**/
    app.directive("secondDirective", function () {
        return {
            restrict: "A",
            template: "Inside secondDirective,isolate socpe:{{myProperty}}",
            scope: {}
        };
    })
    .directive("myInheritScopeDirective", function () {
        return {
            restrict: "A",
            template: "Inside myDirective,isolate scope:{{myProperty}}",
            scope: true
        };
    })
    ;

})();
