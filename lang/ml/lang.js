var langs = ['en', 'fr', 'it'];
var langCode = '';
var langJS = null;

var translate = function(jsdata) {
    $("[tkey]").each(function(index) {
        var strTr = jsdata[$(this).attr('tkey')];
        $(this).html(strTr);
    });
}

function select_language(langCode) {
    if (langs.includes(langCode))
        $.getJSON('lang/' + langCode + '.json', translate);
    else
        $.getJSON('lang/en.json', translate);
}
/** at starting :  defining the default lang */
langCode = navigator.language.substr(0, 2);
select_language(langCode);
//$('#select-lang').val(langCode).prop('selected', true);
$('#select-lang').val(langCode).change();