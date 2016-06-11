define(["citydata"], function (citydata) {
    function Plugin() {
        this.init();
        this.hide();
        this.focus();

    }
    Plugin.prototype = {

        init: function () {
            var Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
            var html = "",
                str = "";
            $.each(hotList, function (key, val) {
                html += '<li> ' + val[0] + ' </li>';
                // console.log(val[0])
            })
            for (var i = 0; i < Alphabet.length; i++) {
                str += '<h2>' + Alphabet[i] + '</h2><ul>'
                $.each(cityList, function (key, val) {
                    if (val[1].charAt(0) == Alphabet[i].toLocaleLowerCase()) {
                        str += '<li class="li2">' + val[0] + '</li>'
                    }
                })
                str += '</ul><div class="clear"></div>';

            }
            $('#list-city').html(str);
            $('#hot-city').find('ol').html(html);
            this.bindEvent();

        },
        bindEvent: function () {
            var that = this;
            $('li').on('click', function () {
                txt = $(this).text();
                $('.pos-big').text(txt);
                tet = $('.pos-big').text();
                $('.spanB').text(tet);
            })
        },
        hide: function () {
            $('.spanclose').on('click', function () {
                $('.plugin').css({
                    'transform': "translateX(100%)",
                    '-webkit-transition': 'all 1s'
                })

            })
        },
        focus: function () {
            $(".focus").on("focus", function () {

            })
        }

    }
    return Plugin;
})