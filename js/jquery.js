$( document ).ready(function() {
  $(".container1,.container2,.container3,.container4").hide();
  $(".nav-item1").click(function () {
    $(".nav-item1 .img1").attr("src", "img/button1-3.png");
    $(".nav-item1 .img2").attr("src", "img/button1-3.png");
    $(".nav-item2 .img2-1").attr("src", "img/button2-1.png");
    $(".nav-item2 .img2-2").attr("src", "img/button2-2.png");
    $(".nav-item3 .img3-1").attr("src", "img/button3-1.png");
    $(".nav-item3 .img3-2").attr("src", "img/button3-2.png");
    $(".nav-item4 .img4-1").attr("src", "img/button4-1.png");
    $(".nav-item4 .img4-2").attr("src", "img/button4-2.png");
    $(".container2,.container3,.container4").fadeOut(0);
    $(".container1")
      .delay(300)
      .fadeIn(250);
  });

  $(".nav-item2").click(function () {
    $(".nav-item2 .img1").attr("src", "img/button2-3.png");
    $(".nav-item2 .img2").attr("src", "img/button2-3.png");
    $(".nav-item1 .img1-1").attr("src", "img/button1-1.png");
    $(".nav-item1 .img1-2").attr("src", "img/button1-2.png");
    $(".nav-item3 .img3-1").attr("src", "img/button3-1.png");
    $(".nav-item3 .img3-2").attr("src", "img/button3-2.png");
    $(".nav-item4 .img4-1").attr("src", "img/button4-1.png");
    $(".nav-item4 .img4-2").attr("src", "img/button4-2.png");
    $(".container1,.container3,.container4").fadeOut(0);
    $(".container2")
      .delay(300)
      .fadeIn(250);
  });

  $(".nav-item3").click(function () {
    $(".nav-item3 .img1").attr("src", "img/button3-3.png");
    $(".nav-item3 .img2").attr("src", "img/button3-3.png");
    $(".nav-item1 .img1-1").attr("src", "img/button1-1.png");
    $(".nav-item1 .img1-2").attr("src", "img/button1-2.png");
    $(".nav-item2 .img2-1").attr("src", "img/button2-1.png");
    $(".nav-item2 .img2-2").attr("src", "img/button2-2.png");
    $(".nav-item4 .img4-1").attr("src", "img/button4-1.png");
    $(".nav-item4 .img4-2").attr("src", "img/button4-2.png");
    $(".container1,.container2,.container4").fadeOut(0);
    $(".container3")
      .delay(300)
      .fadeIn(250);
  });


  $(".nav-item4").click(function () {
    $(".nav-item4 .img1").attr("src", "img/button4-3.png");
    $(".nav-item4 .img2").attr("src", "img/button4-3.png");
    $(".nav-item1 .img1-1").attr("src", "img/button1-1.png");
    $(".nav-item1 .img1-2").attr("src", "img/button1-2.png");
    $(".nav-item2 .img2-1").attr("src", "img/button2-1.png");
    $(".nav-item2 .img2-2").attr("src", "img/button2-2.png");
    $(".nav-item3 .img3-1").attr("src", "img/button3-1.png");
    $(".nav-item3 .img3-2").attr("src", "img/button3-2.png");
    $(".container1,.container2,.container3").fadeOut(0);
    $(".container4")
      .delay(300)
      .fadeIn(250);
  });
  // $(".menu2").click(function() {
  //   $("#desktop,#alllogo,#content2,nav").fadeOut(300);
  //   $("#aboutus")
  //     .delay(300)
  //     .fadeIn(250);
  // });

  // $(".menu3").click(function() {
  //   $("#aboutus,#alllogo,#content2,nav").fadeOut(300);
  //   $("#desktop")
  //     .delay(300)
  //     .fadeIn(250);
  // });
  // $("nav a").click(function() {
  //   $("#alllogo").hide();
  //   $("#content2").show();
  // });

  // $(".menu1").click(function() {
  //   $("nav a").removeClass("active");
  //   $("nav a").removeClass("nohover");
  // });

  // $("nav a").click(function(e) {
  //   e.preventDefault();
  //   var url = this.href;
  //   $("nav a").removeClass("nohover");
  //   $("nav a").removeClass("active");
  //   $("nav a span").addClass("onhover");
  //   $("#content2")
  //     .hide()
  //     .load(url)
  //     .delay(300)
  //     .fadeIn(200)
  //     .animate({ scrollTop: 0 }, 200);
  //   $(this)
  //     .find(".onhover")
  //     .removeClass("onhover");
  //   $(this).addClass("nohover");
  //   $(this).addClass("active");
  // });
  // $(".menu1").click(function() {
  //     $("nav a").removeClass("active");
  //      $("nav a").removeClass("nohover");
  //    });
});

