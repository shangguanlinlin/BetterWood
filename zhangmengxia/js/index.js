define(["jquery", "city"], function (jquery, city) {
    function Dex() {
        this.binevent();
        this.show();
    }
    Dex.prototype = {
        binevent: function () {

            $.ajax({
                url: "js/yingpian.json",
                type: "post",
                datatype: "json",
                async: false,
                success: function (data) {
                    var html1 = "";
                    $.each(data.cinemaInfo, function (k, v) {

                        html1 += "<li class='li'><h2>" + v.cinemaName + "</h2><p>" + v.cinemaAdd + "<span>" + v.endbuyDate + "km</span></p><p><em>ATMOS</em></p></li>";

                    })

                    $("#scroller ol").append($(html1));
                    // console.log($("#scroller ol li"))

                }

            })

        },
        show: function () {
            $('.search-left').on('click', function () {

                $('.plugin').css({
                    'transform': "translateX(0%)",
                    '-webkit-transition': 'all 1s'
                })

            })
        }
    }
    var city = new city();
    var dex = new Dex();
})