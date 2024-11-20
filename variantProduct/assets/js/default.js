$(document).ready(function() {
    let $content = $('#content');
    let $slider = $('#slider');
    let $bodyBG = $('.bodyBG');
    
    // Configura el scroll inicial de #slider al máximo para empezar desde abajo
    $slider.scrollTop($slider[0].scrollHeight);

    // Evento de scroll en #content
    $content.on('scroll', function() {
        let contentScrollTop = $content.scrollTop();
        let contentMaxScroll = $content[0].scrollHeight - $content.height();
        let sliderMaxScroll = $slider[0].scrollHeight - $slider.height();
        let bodyBGMaxScroll = $bodyBG[0].scrollWidth - $bodyBG.width();

        // Calcula la posición inversa proporcional al scroll en #content para #slider
        let inverseScrollSlider = sliderMaxScroll - (contentScrollTop * sliderMaxScroll / contentMaxScroll);
        
        // Calcula la posición proporcional en dirección horizontal para .bodyBG
        let proportionalScrollBodyBG = (contentScrollTop * bodyBGMaxScroll / contentMaxScroll);

        // Aplica el scroll a #slider y .bodyBG
        $slider.scrollTop(inverseScrollSlider);
        $bodyBG.scrollLeft(proportionalScrollBodyBG);
    });
});