(function () {
    'use strict';
    /*
    angular.module参数说明：
    name:模块名称(如:app)
    requires:一组该模块所需依赖的模块名称,会通过依赖注入的方式注入到该module中
    */
    var app = angular.module('appDirective', [
          // Angular modules
          'ngAnimate',
          'ngRoute'

          // Custom modules

          // 3rd Party Modules

    ]);
    /*
    restrict：替换方式有E（element） A（attr）C（class） M(comment),考虑较好的跨浏览器兼容性，一般使用A(attr)
   E: <my-directive></my-directive>
   A: <div my-directive></div>
   C: <div class="my-directive"></div>
   M: <!-- directive:my-directive -->

    */
    app.directive("myDirective", function () {
        return {
            restrict: 'E',//指令替换方式 E:Element,
            replace: true,//true:替换掉指令标签，false:保留指令标签
            template: '<a href="http://baidu.com">点击前往百度</a>'

        };
    });
    /*
        用属性将数据从DOM中复制到指令的隔离作用域中：
        myDirectiveSample指令名称在html中使用时，采用驼峰命名法用“-”进行分割例如：my-directive-sample
    */
    app.directive("myDirectiveSample", function () {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                myUrl: '@someAttr',//绑定策略可以绑定，可以制定绑定的属性名，但是一定要用-进行单词分割（驼峰命名法）
                myLinkText: '@'
            },
            template: '<a href="{{myUrl}}">{{myLinkText}}</a>'//'<a href="{{myUrl}}">{{myLinkText}}</a>'
        };
    });

    /*Angularjs卖点  双向绑定*/
    app.directive("myDirectiveTwowaybinding", function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: '=someAttr',//将@ 改成 改成=后，所有引用myUrl的地方 不仅在自己的作用域联动，兄弟作用域也会联动。当someAttr值
                myLinkText: '@'
            },
            template: '\
            <div>\
                <label>My Url Field:</label>\
                <input type="text"\
                        ng-model="myUrl"/>\
                <a href="{{myUrl}}">{{myLinkText}}</a>\
            </div>'
        };
    });

})();
