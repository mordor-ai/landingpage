var langs = ['en', 'fr'];
var langCode = '';
var langJS = null;


var translate = function(jsdata) {
    $("[tkey]").each(function(index) {
        var strTr = jsdata[$(this).attr('tkey')];
        $(this).html(strTr);
    });
}


langCode = navigator.language.substr(0, 2);

if (langs.includes(langCode))
    $.getJSON('lang/' + langCode + '.json', translate);
else
    $.getJSON('lang/en.json', translate);