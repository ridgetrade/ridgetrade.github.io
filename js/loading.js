// $(window).on('load', function(){
// 	$('.loading').fadeOut();	
// });

$(document).ready(function() {
$(".loading").fadeTo(1800, 0.8);


setTimeout(function(){$(".loading").attr({style:"display:none"}); }, 1800);

  });