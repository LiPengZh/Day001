$(function(){
    $("img.seaImg").click(function(){
        $(this).hide();
        $(".search").animate({
            width:"230px"
        },500)
$("input.seaTxt").focus(function(){
                $("label.txt").hide();
                })
                $("input.seaTxt").click(function(e){
                    e.stopPropagation();//阻止冒泡事件
                });
                $("input.txt").click(function(e){
                    e.stopPropagation();//阻止冒泡事件
                });



})


})