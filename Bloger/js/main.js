$(document).ready(function(){
    $nav = $('.nav')
    $toogleCollapse = $('.toogle-collpase')

    /* click event on toogle menu */
    $toogleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});