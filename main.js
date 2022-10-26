
$("p").hover(function(){
$(document).ready(function() {
    $(".nav-container").animate({
        width:"toggle",
        height:"toggle",
        borderTop:"3px solid gray "
    },2000);

    $(".nav-container").animate({
        height:"toggle",
        width:"toggle"  
    });
       
  }); }, function(){
  $(document).ready(function() {
    $(".nav-container2").animate({
        width:"toggle",
        height:"toggle",
        borderTop:"3px solid gray ", 
    },2000);

  });
});