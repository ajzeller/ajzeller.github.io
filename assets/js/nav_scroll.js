$(document).ready(function(){
   var scroll_start = 100;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#nav").css('background-color', 'rgba(166, 171, 174, 0.7)');
       } else {
          $('#nav').css('background-color', 'transparent');
       }
   });
    }
});
