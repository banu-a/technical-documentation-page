function openNav() {
    document.getElementById("navbar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  $(document).ready(function(){
    $(".tab-menu a").click(function(event){
      event.preventDefault();
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      var tab=$(this).attr("href");
      $(".tab-content").not(tab).css("display", "none");
      $(tab).fadeIn();
    });
  });
  