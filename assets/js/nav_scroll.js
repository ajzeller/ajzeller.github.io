$(document).ready(function(){
   var scroll_start = 100;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#nav").css('transition', '.5s ease');
          $("#nav").css('background', 'rgba(0, 0, 0, .2)');
       } else {
          $('#nav').css('background-color', 'transparent');
       }
   });
    }
});
