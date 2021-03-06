// loading  contact 
var langs = ['en', 'fr', 'it'];
var langCode = '';
var langJS = null;
var path = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/'));
var snipDir = path + '/snipets/';
var langDir = path + '/lang/'


var translate = function(jsdata) {
    $("[tkey]").each(function(index) {
        var strTr = jsdata[$(this).attr('tkey')];
        $(this).html(strTr);
    });
};

var select_language = function(langCode) {
    if (langs.includes(langCode))
        $.getJSON(langDir + langCode + '.json', translate);
    else
        $.getJSON(langDir + 'en.json', translate);
};



var fadedEls = function(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }
    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity: 1
                    }, 600);
                });
            }
        }
    });
};


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.mobile = true;
} else {
    window.mobile = false;
}

(function($) {
    $(function() {
        console.log(snipDir + "menu.html");
        $("#menu").load(snipDir + "menu.html");
        $("#headLogo").load(snipDir + "headLogo.html");
        $("#description_image").load(snipDir + "description_image.html");
        $("#description_video").load(snipDir + "description_video.html");
        $("#description_carousel").load(snipDir + "description_carousel.html");
        $("#features").load(snipDir + "features.html");
        $("#features_img").load(snipDir + "features_img.html");
        $("#crew").load(snipDir + "crew.html");
        $("#contact").load(snipDir + "contact.html");
        $("#footer").load(snipDir + "footer.html");


        /** at starting :  defining the default lang */
        langCode = navigator.language.substr(0, 2);
        select_language(langCode);
        $('#select-lang').val(langCode).prop('selected', true);
        $("#select-lang").val(langCode).change();



        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });



        // features ani
        /*fadedEls($('.features').parent().find('h3'), 'h');
        $('.features > *').each(function() {
            fadedEls($(this), 150);
        });
        */


        // responsive
        $(window).resize(function() {
            // input-append auto width
            $('footer .input-append input[type="text"]').each(function() {
                var controlGroup = $(this).closest('.control-group');

                if ($(window).width() > 480) {
                    $(this).css('width', '');
                } else {
                    $(this).css('width', controlGroup.outerWidth() - controlGroup.find('.input-append .btn').outerWidth());
                }
            });

            // social-btns
            if ($(window).width() > 480) {
                $('footer .social-btns.mobile-processed').removeClass('mobile-processed').appendTo('footer > .container > .row > .col-sm-3:last');
            } else {
                $('footer .social-btns:not(.mobile-processed)').addClass('mobile-processed').insertBefore('footer nav');
            }
        });

        $(window).resize().scroll();


    });



})(jQuery);