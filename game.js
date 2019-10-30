$(document).ready(function () {
    var winWid = window.innerWidth;
    var ghost = $('.ghost.active');
    var pumpkin = $('.pumpkin.active');
    var man = $('.man.active');
    var count = $('.point');
    var restart = $('.restart')
    var x, y, ghostie;

    spawn(ghost, 100, 850, false);
    spawn(pumpkin, 500, 5000, 'pump');
    spawn(man, -1000, 3000, 'man');
  
  
    function spawn(element, point, time, fade) {
        restart.on('click', function () { 
           /*  $('.ghostie').fadeOut(200);
            setTimeout(() => {
                $('.ghostie').remove();
                restart.css('display', 'none').css('opacity', '0');
            }, 200); */
            location.reload();
         })
      setInterval(() => {
          if ($('.ghost.ghostie').length > 10) {
            $('.ghostie').addClass('off')
            restart.css('display', 'block').css('opacity', '1')
          } 
          else {
                     x = Math.round(10 - 0.5 + Math.random() * (90 - 10 + 1));
        y = Math.round(10 - 0.5 + Math.random() * (90 - 10 + 1));
        element.clone().appendTo('.game').css('left', x + '%').css('top', y + '%').addClass('ghostie');
        ghostie = $('.ghostie');
  
        ghostie.on('click', function () {
          if ($(this).hasClass('off')) {
            return false;
          } else {
            navigator.vibrate(1);
            number_to('point', parseInt(count.html()), parseInt(count.html()) + point, 100);
            $(this).removeClass('active').addClass('off');
            $(this).slideUp(200);
            setTimeout(() => {
              $(this).remove();
            }, 200);
  
          }
  
        })
        if (fade == 'pump') {
          setTimeout(() => {
            $('.pumpkin.ghostie').slideUp(200);
            setTimeout(() => {
              $('.pumpkin.ghostie').remove();
            }, 200);
          }, 2000);
        } else if (fade == 'man') {
          setTimeout(() => {
            $('.man.ghostie').slideUp(200);
            setTimeout(() => {
              $('.man.ghostie').remove();
            }, 200);
          }, 2000);
        }
  
          }
 
  
      }, time);
   
    }
  
  
  
  
  
  
    function number_to(id, from, to, duration) {
      var element = document.getElementById(id);
      var start = new Date().getTime();
      setTimeout(function () {
        var now = (new Date().getTime()) - start;
        var progress = now / duration;
        var result = Math.floor((to - from) * progress + from);
        element.innerHTML = progress < 1 ? result : to;
        if (progress < 1) setTimeout(arguments.callee, 10);
      }, 10);
    }
  });