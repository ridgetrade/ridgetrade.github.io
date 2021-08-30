$(document).ready(function() {
    var duration = 200;

    // images ----------------------------------------
    var $images = $('#images p');


    $images
        .on('mouseover', function() {
            $(this).find('strong').stop(true).animate({ bottom: '0px' }, duration);
            $(this).find('.img2').stop(true).animate({ opacity: '1' }, duration);


        })
        .on('mouseout', function() {
            $(this).find('strong').stop(true).animate({ bottom: '-80px' }, duration);
            $(this).find('.img2').stop(true).animate({ opacity: '0' }, duration);

        });


    // $images
    // .on('mouseover', function() {
    //     $(this).find('strong').stop(true).animate({ bottom: '0px' }, duration);
    //     $(this).find('.img .img1').stop(true).animate({ opacity: 0 }, duration);
    //     $(this).find('.img .img2').stop(true).animate({ opacity: 1 }, duration);
    // })
    // .on('mouseout', function() {
    //     $(this).find('strong').stop(true).animate({ bottom: '-60px' }, duration);
    //     $(this).find('.img .img1').stop(true).animate({ opacity: 1 }, duration);
    //     $(this).find('.img .img2').stop(true).animate({ opacity: 0 }, duration);
    // });

    // $(".dropdown-menu a").click(function (e) {
    //     e.preventDefault();
    //     var url = this.href;

    //     $("#content2")
    //         .hide()
    //         .load(url)
    //         .delay(100)
    //         .fadeIn(200)

    // });

    //   $images.filter(':nth-child(1)')
    //   .on('mouseover', function(){
    //       $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
    //   })
    //   .on('mouseout', function(){
    //       $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
    //   });

});