$(document).ready(function () {
  var over = $('.gameover');
  var winWid = $('html').outerWidth();
  
  over.css('left', ((winWid / 2) -  over.outerWidth() / 2) + 'px');
  over.css('transform', 'translateY(-' + (over.outerHeight() * 2) + 'px)');
  
  document.onselectstart = function () {
    return false;
  };
  document.oncontextmenu = function () {
    return false;
  };
  $('.btn').click(function () {
    $('.hello').fadeOut(500);
    setTimeout(() => {
      include('./game.js');
    }, 500);
  })
  function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    script.className += "game-js";
}



});