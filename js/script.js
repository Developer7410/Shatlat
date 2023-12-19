$(document).ready(function(){
    $("#bs2").click(function(){
        $(".rs2").show();
        $(".rs1").hide();
        $(".rs3").hide();
        $(".rs4").hide();

        $("#bs2").addClass("shop-active-heading");
        $("#bs1").removeClass("shop-active-heading");
        $("#bs3").removeClass("shop-active-heading");
        $("#bs4").removeClass("shop-active-heading");


    })
    $("#bs1").click(function(){
        $(".rs1").show();
        $(".rs2").hide();
        $(".rs3").hide();
        $(".rs4").hide();

        $("#bs1").addClass("shop-active-heading");
        $("#bs2").removeClass("shop-active-heading");
        $("#bs3").removeClass("shop-active-heading");
        $("#bs4").removeClass("shop-active-heading");


    })
    $("#bs3").click(function(){
        $(".rs3").show();
        $(".rs1").hide();
        $(".rs2").hide();
        $(".rs4").hide();

        $("#bs3").addClass("shop-active-heading");
        $("#bs1").removeClass("shop-active-heading");
        $("#bs2").removeClass("shop-active-heading");
        $("#bs4").removeClass("shop-active-heading");

    })
    $("#bs4").click(function(){
        $(".rs4").show();
        $(".rs1").hide();
        $(".rs2").hide();
        $(".rs3").hide();

        $("#bs4").addClass("shop-active-heading");
        $("#bs1").removeClass("shop-active-heading");
        $("#bs2").removeClass("shop-active-heading");
        $("#bs3").removeClass("shop-active-heading");

    })
});


/*===Shop Page====*/
$(document).ready(function(){
    $(".shop-cols").hover(function(){
      $(".shop-col-active").css("background-color", "#fff"); 
      $(" .about-img-active").css("border", "none"); 
      
    } , function(){
      $(".shop-col-active").css("background-color", "#00a99b4b"); 
      $(" .about-img-active").css("border", " 4px solid var(--bg-color)"); 
    }
    );
  })
/*====SEARCH BAR=====*/
$(document).ready(function(){
    $(".click-btn").click(function(){
        $(".formss").toggle();
    })
})
$(document).ready(function(){
    $(".click-shop-btn").click(function(){
        $(".click-formss").toggle();
    })
})