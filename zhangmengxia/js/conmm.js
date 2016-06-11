requirejs.config({
    baseUrl: "js", //用于设置当前路径，
    paths: { //路径，配置每个文件的别名，不需要写扩展名，只写文件的路径及名称

        iscroll: "iscroll",
        zepto: "zepto.min",
        swiper: "swiper.min",
        index: "index",
        city: "city",
        citydata: "citydata",
        jquery: "jquery-1.11.1.min"

    },
    /* shim: {
         index: {
             deps: ['jquery', 'zepto']
         }
     }*/
})
require(['jquery', 'swiper', 'index', 'iscroll', 'city', 'citydata'], function (jquery, swiper, index, iscroll, city, citydata) {
    var swiper = new Swiper('.swiper-container');
    /*var myScroll,my_Scroll;*/


    /*  myScroll = new iscroll('#wrapper', {
          bounceEasing: 'elastic',
          bounceTime: 1200
      });*/

    /*   my_Scroll = new iscroll('#wrappers', {
           bounceEasing: 'elastic',
           bounceTime: 1200
       });*/

    /*  document.addEventListener('touchmove', function (e) {
          e.preventDefault();
      }, false);*/
})