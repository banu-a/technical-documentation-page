function openNav(){
			document.getElementById("main").style.marginLeft="25%";
			document.getElementById("mySidebar").style.width="25%";
			document.getElementById("mySidebar").style.display="block";
			document.getElementById("navLink").style.display='none';
					}
		
function closeNav(){
			document.getElementById("main").style.marginLeft="0%";
			document.getElementById("mySidebar").style.display="none";
			document.getElementById("navLink").style.display="inline-block";
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