$(document).ready(function () {
    var winWid = window.innerWidth;
    var ghost  = $('.ghost.active');
    var count  = $('.point');
    var x, y, ghostie;


    setInterval(() => {
      x = Math.round(5 - 0.5 + Math.random() * (95 - 5 + 1));
      y = Math.round(5 - 0.5 + Math.random() * (95 - 5 + 1));
      ghost.clone().appendTo('.game').css('left', x + '%').css('top', y + '%').addClass('ghostie');
            ghostie = $('.ghostie');
         
 
              ghostie.click(function () {
                navigator.vibrate(200);
                number_to('point', parseInt(count.html()), parseInt(count.html()) + 100, 100);
                ghostie.removeClass('active').addClass('off');
                $(this).slideUp(10);
                setTimeout(() => {
                  $(this).remove();
                }, 200);
              })
              $('.off').click(function () {
                console.log(1);
              })
              $('.off').hover(function () {
                return false;
              })
            
           
    }, 750);
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
function number_to(id,from,to,duration) {
  var element = document.getElementById(id);
  var start = new Date().getTime();
  setTimeout(function() {
  var now = (new Date().getTime()) - start;
  var progress = now / duration;
  var result = Math.floor((to - from) * progress + from);
  element.innerHTML = progress < 1 ? result : to;
  if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);}
});