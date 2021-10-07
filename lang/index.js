///// Language Switching (2 languages: English and Chinese). /////
$('[lang="es"]').hide();

$('#switch-lang').click(function() {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
});