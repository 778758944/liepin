/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-03 16:14:48
 * @version $Id$
 */
$(function(){
    $("#car1").carousel("pause");
    $("#car2").carousel("pause");
    $("#car3").carousel("pause");
	$("[data-toggle='popover']").popover();
    $(".dn").click(function(){
        
        $("#car1").carousel("next");
    });
    $(".dp").click(function(){
        $("#car1").carousel("prev");
    });
    $(".dn2").click(function(){
        $("#car2").carousel("next");
    });
    $(".dn3").click(function(){
        $("#car3").carousel("next");
    });
    $(".dp3").click(function(){
        $("#car3").carousel("prev");
    });
    $(".dp2").click(function(){
        $("#car2").carousel("prev");
    });
    var i=0;
    var timeid;
    function changep(a){
        
        $(".lb"+a).animate({opacity:"1"},500).siblings().animate({opacity:"0"},500);
        $(".dot>div:eq("+a+")").addClass("active").siblings().removeClass();

       
    };
    $(".dot>div").click(function(){
        var b=$(".dot>div").index(this);
       
        i=b;
        changep(i);
    });
    function settime(){
        timeid=setInterval(function(){
        if(i>=4){
            i=-1;
        }
        i=i+1;
       
        changep(i);
    },5000);
    };
    settime();
    $("#lunbo").mouseover(function(){
        clearInterval(timeid);
    });
    $("#lunbo").mouseout(function(){
        settime();
    });
    
    $("#spy li:eq(3)").click(function(){
        setTimeout(function(){
            $("ul.nav-stacked").css("opacity","0");
            
        },300);
    });
    var timeid2=setTimeout(function(){
        $("#guide").animate({bottom:"0px"},500);
    },2000);
    $(".aa3").click(function(){
        $("#guide").css("display","none");
    });
    window.onscroll=function(){
        
        var top=document.documentElement.scrollTop||document.body.scrollTop;
        
        if(top<=520){
            if(!$("ul.nav-stacked").is(":animated")){
            
            $("ul.nav-stacked").animate({opacity:"0"},100);
           } 
        }
        if(top>=530){
             if(!$("ul.nav-stacked").is(":animated")){
            $("ul.nav-stacked").animate({opacity:"1"},200);
        }
            
        }
    }
});
