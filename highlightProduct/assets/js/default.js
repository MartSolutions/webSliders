$(document).ready(function(){
    let totalHeight = $('#all-content').height();
    console.log('Altura total del all-content:', totalHeight);

    let totalBody = $('body').height();
    let bodyW = $('body').width();
    console.log('Altura total del body:', totalBody);

    let totalWindow = $(window).height();
    console.log('Altura total del viewport:', totalWindow);

    if(totalHeight > totalWindow){
        console.log("La pantalla es vertical")
    }else{
        console.log("La pantalla es horizontal")
        $(".product").css({
            'height':'calc(100vh - 7rem)',
            'max-height':'calc(100vh - 7rem)'
        })
    }
    
    var scrollTop = 0;

    $('#all-content').on('scroll', function() {
        scrollTop = $('#all-content').scrollTop(); // Obtiene la posición de desplazamiento
        var percent = (scrollTop * 100) / totalHeight ;
        console.error("Scroll document: "+ scrollTop + 'px' )
        
        //Cuando el scroll aun no ha llegado al segundo contenedor
        if(scrollTop >= 0 && scrollTop <= totalHeight){
            var percent = (scrollTop * 100) / totalHeight;
            var availableW = ($("body").width() - $(".product").width()) - 15
            //Transiciòn del producto
            $('.product').css('right', ((availableW * ( percent/100)))+'px')
            $('.product').css('top', 'calc(15vh + '+ (percent / 10)+'%)')
            //Transicion de la descripcion
            $('#first .description').css({
                'margin-left': percent+'%',
                'opacity': ( 1 / percent)
            }
            )
            
            $('#first .btn').css({
                'margin-bottom': -percent+'%',
            })
            
            $('#two .description').css('margin-left', 100 - percent+'%')
            console.log("Primer contenedor:"+ percent)
        }

        // El segundo contenedor se encuentra en el viewport
        if(scrollTop > (totalHeight) && scrollTop <= (2*totalHeight)){
            var percent = ((scrollTop * 100)  / totalHeight) -100 ;
            $('#two .description').css('margin-left', '-'+percent+'%')
            $('#two .btn').css('margin-bottom', '-'+percent+'%')
            $('#three .description').css('margin-left', -100 + percent+'%')
        //    console.log("Segundo contenedor:"+ percent)           
            var r_str = $('.product').css('right')
            var r_num = parseFloat(r_str.replace('px', ''));
            var r_per = ((r_num) * 100) / bodyW - 20;

            console.log("AvailableW:"+ availableW)    
            // console.log("% top del producto:"+ t_per)    
            console.log("Move to right:"+ r_per * (1 - percent / 100))    
            var right = r_per *( (1 - percent) / 100)
            // var top = (t_per * (1 - (percent + 10) / 100))
            // var top = t_per
            // console.log('top_save: '+top_save)
            var rotate = 1+(percent* (1/4)) - (1/3)
            var scale = 1+((percent/100)/10)
            $('.product').css({
                // 'right': percent + '%',
                'transform': 'scale('+scale+') translateX('+(percent * 1.11)+'%) translateY('+(percent / -6 )+'%) rotateZ('+percent / -3+'deg)',
                // rotateZ(-'+rotate+'deg)
                // 'top': 'calc(0.1 * -'+top+'% )',
            })
            
        }

        // El tercer contenedor se encuentra en el viewport
        if(scrollTop > (2*totalHeight) && scrollTop <= (3*totalHeight)){
            var percent = ((scrollTop * 100)  / totalHeight) -200 ;
             
            var right = r_per * (1 - percent / 100)
            // var top = (t_per * (1 - (percent + 10) / 100))
            var rotate = (percent* (1/3)) - (1/3)
            var scale = 1+((percent/100)/2.5)
            $('.product').css('right', right+ '%')
            // $('.product').css('top', top+'%')
            $('.product').css('transform', 'scale('+scale+') rotateZ(-'+rotate+'deg)')
        

        }




    });


});