$(document).ready(function () {
    var winWid = window.innerWidth;
    var ghost = $('.ghost.active');
    var pumpkin = $('.pumpkin.active');
    var man = $('.man.active');
    var count = $('.point');
    var restart = $('.restart');
    var ghostKill = 0;
    var pumpkinKill = 0;
    var manKill = 0;
    var x, y, ghostie;

    spawn(ghost, 100, 850, false);
    spawn(pumpkin, 500, 5000, 'pump');
    spawn(man, -1000, 3000, 'man');
  
  
    function spawn(element, point, time, fade) {
        restart.on('touchstart', function () { 
           /*  $('.ghostie').fadeOut(200);
            setTimeout(() => {
                $('.ghostie').remove();
                restart.css('display', 'none').css('opacity', '0');
            }, 200); */
            location.reload();
         })
      setInterval(() => {
          if ($('.ghost.ghostie').length > 4) {
              $('.ghost-kill').html(ghostKill + ' 👻 killed');
              $('.pumpkin-kill').html(pumpkinKill + ' 🎃 killed');
              $('.man-kill').html(manKill + ' 🙋🏻‍♂️ killed');
            $('.ghostie').addClass('off')
           $('.gameover').css('transform', 'translateY(' + ((window.innerHeight / 2) - ($('.gameover').outerHeight() / 2)) + 'px)')
          } 
          else {
                     x = Math.round(10 - 0.5 + Math.random() * (90 - 10 + 1));
        y = Math.round(10 - 0.5 + Math.random() * (90 - 10 + 1));
        element.clone().appendTo('.game').css('left', x + '%').css('top', y + '%').addClass('ghostie');
        ghostie = $('.ghostie');
   if (winWid > 600) {
       ghostie.on('click', function () {
            $('this').css('background-color', 'none');
          if ($(this).hasClass('off')) {
            return false;
          } 
          else {
            if ($(this).hasClass('pumpkin')) {
                pumpkinKill += 1;
            }
            else if ($(this).hasClass('ghost')) {
                ghostKill += 1;
            }
            else {
                manKill += 1;
            }
            navigator.vibrate(10);
            number_to('point', parseInt(count.html()), parseInt(count.html()) + point, 100);
            $(this).removeClass('active').addClass('off');
            $(this).slideUp(200);
            setTimeout(() => {
              $(this).remove();
            }, 200);
  
          }
  
        })
   }
   else {
    ghostie.on('touchstart', function () {
      $('this').css('background-color', 'none');
    if ($(this).hasClass('off')) {
      return false;
    } 
    else {
      if ($(this).hasClass('pumpkin')) {
          pumpkinKill += 1;
      }
      else if ($(this).hasClass('ghost')) {
          ghostKill += 1;
      }
      else {
          manKill += 1;
      }
      navigator.vibrate(10);
      number_to('point', parseInt(count.html()), parseInt(count.html()) + point, 100);
      $(this).removeClass('active').addClass('off');
      $(this).slideUp(200);
      setTimeout(() => {
        $(this).remove();
      }, 200);

    }

  })
   }
      
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