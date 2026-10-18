$(document).ready(function () {
    // Ocultamos las cortinas al cargar la página
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Animación de caída para el sobre
        $('.envelope').css({ 
            'animation': 'fall 3s linear 1', 
            '-webkit-animation': 'fall 3s linear 1' 
        });

        $('.envelope').fadeOut(800, function () {
            // Ocultar los elementos del sobre
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Desplegar la carta con animación ondulante/escalado
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, 
                step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });
        });
    });
});