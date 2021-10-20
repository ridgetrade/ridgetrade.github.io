$(function() {

    var $goods = $('.goods1,.goods2,.goods3,.goods4,.goods5,.goods6,.goods7,.goods8,.goods9,.goods10,.goods11,.goods12,.goods13,.goods14,.goods15,.goods16,.goods17,.goods18,#content2,.main');
    var $menu = $('.menu1,.menu2,.menu3,.menu4,.menu5,.menu6,.menu7,.menu8,.menu9,.menu10,.menu11,.menu12,.menu13,.menu14,.menu15,.menu16,.menu17,.menu18')

    $goods.hide();
    $("#content2,.main").show();
    $("form,.badge,.shopcart,#shop").hide();
    $(".menu1").click(function() {
        $goods.fadeOut(300);
        $(".allmenu").addClass("topmenu")
        $(".goods1,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu2").click(function() {
        $goods.fadeOut(300);
        $(".goods2,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu3").click(function() {
        $goods.fadeOut(300);
        $(".goods3,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu4").click(function() {
        $goods.fadeOut(300);
        $(".goods4,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu5").click(function() {
        $goods.fadeOut(300);
        $(".goods5,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu6").click(function() {
        $goods.fadeOut(300);
        $(".goods6,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu7").click(function() {
        $goods.fadeOut(300);
        $(".goods7,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu8").click(function() {
        $goods.fadeOut(300);
        $(".goods8,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu9").click(function() {
        $goods.fadeOut(300);
        $(".goods9,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu10").click(function() {
        $goods.fadeOut(300);
        $(".goods10,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu11").click(function() {
        $goods.fadeOut(300);
        $(".goods11,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu12").click(function() {
        $goods.fadeOut(300);
        $(".goods12,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu13").click(function() {
        $goods.fadeOut(300);
        $(".goods13,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu14").click(function() {
        $goods.fadeOut(300);
        $(".goods14,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });


    $(".menu15").click(function() {
        $goods.fadeOut(300);
        $(".goods15,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu16").click(function() {
        $goods.fadeOut(300);
        $(".goods16,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu17").click(function() {
        $goods.fadeOut(300);
        $(".goods17,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    $(".menu18").click(function() {
        $goods.fadeOut(300);
        $(".goods18,.badge,.shopcart")
            .delay(300)
            .fadeIn(250);
        $menu.removeClass("active");
        $(this).addClass("active");
    });

    var $images = $('#images .btn')

    $images.on('click', function() {
        $(this).find('.plus').stop(true).animate({ left: ['70px', 'swing'], opacity: '100' }, 250, function() {
            $(this).stop(true).animate({ left: '52px', opacity: '0' }, 250);
        });
    });

    // var $images = $('#images .btn')

    // $images.on('click', function () {
    //     find('.plus').stop(true).animate({ left: ['50px', 'swing'], opacity: '100' }, 200, function () {
    //     find('.plus').stop(true).animate({ left: '18px', opacity: '0' }, 250);
    //     });
    // });

    var duration = 200;

    // images ----------------------------------------

    var $images = $('#images p');

    $images
        .on('mouseover', function() {
            $(this).find('strong').stop(true).animate({ bottom: '-70px' }, duration);
            $(this).find('.img2').stop(true).animate({ opacity: '1' }, duration);
        })
        .on('mouseout', function() {
            $(this).find('strong').stop(true).animate({ bottom: '0px' }, duration);
            $(this).find('.img2').stop(true).animate({ opacity: '0' }, duration);
        })
        .on('click', function() {
            $(this).find('strong').stop(true).animate({ bottom: '0px' }, duration);
        });



});