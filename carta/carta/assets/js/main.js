
$(document).ready(function () {
    // Ocultar las cortinas al cargar
    $('.left-curtain, .right-curtain').css('width', '0%');

    // Evitar abrir la carta varias veces seguidas
    let abriendo = false;

    $('.valentines-day').on('click', function () {
        if (abriendo) return;
        abriendo = true;

        const $sobre = $('.envelope');
        const $tarjeta = $('#card');

        // Animación de caída del sobre
        $sobre.css({
            'animation': 'fall 1.5s linear 1',
            '-webkit-animation': 'fall 1.5s linear 1'
        });

        $sobre.fadeOut(800, function () {
            // Ocultar las partes del sobre
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Mostrar la carta
            $tarjeta.css({
                'visibility': 'visible',
                'display': 'block',
                'opacity': 0,
                'transform': 'scale(0.85)',
                'transform-origin': 'center center'
            });

            // Animación suave de apertura
            $tarjeta.stop(true, true).animate(
                { opacity: 1 },
                {
                    duration: 700,
                    step: function (now) {
                        const escala = 0.85 + (now * 0.15);
                        $(this).css('transform', 'scale(' + escala + ')');
                    },
                    complete: function () {
                        $(this).css({
                            'transform': 'scale(1)',
                            'opacity': 1
                        });
                    }
                }
            );
        });
    });
});
