$(document).ready(function () {
    var winWid = window.innerWidth;
    var ghost  = $('.ghost');
    var count  = $('.point');
    var x, y, i, ghostie;
    


    setInterval(() => {
      x = Math.round(5 - 0.5 + Math.random() * (95 - 5 + 1));
      y = Math.round(5 - 0.5 + Math.random() * (95 - 5 + 1));
      ghost.clone().appendTo('.game').css('left', x + '%').css('top', y + '%').addClass('ghostie');
            ghostie = $('.ghostie');
         
            if (winWid >= 500) {
              ghostie.click(function () {
                navigator.vibrate(1000);
                number_to('point', parseInt(count.html()), parseInt(count.html()) + 100, 100)
                $(this).slideUp(200);
                setTimeout(() => {
                  $(this).remove();
                }, 200);
              })
            }
            else {
              ghostie.hover(function () {
                navigator.vibrate(1000);
                number_to('point', parseInt(count.html()), parseInt(count.html()) + 100, 100)
                $(this).slideUp(200);
                setTimeout(() => {
                  $(this).remove();
                }, 200);
              })
            }
    }, 432);
    
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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