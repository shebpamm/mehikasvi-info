$(document).ready(function(){
    $('#nav-menu').click(function(){
        var $selector = $('.header');
        let closing = $selector.hasClass('open');
        $selector
        .data('oHeight', $selector.height())
        .toggleClass('open')
        .data('nHeight', $selector.height())
        .toggleClass(closing ? 'open' : '')
        .height($selector.data('oHeight'))
        .velocity(
            { height: $selector.data('nHeight')},
            { duration: 400, 
              easing: closing ? [0.11, 0, 0.5, 0] : [0.5, 1, 0.89, 1],
              complete: () => 
                {
                    $selector
                    .css('height', 'auto')
                    .toggleClass(closing ? 'open' : '')
                }
            }
        );
    });
});