$(".menu-btn").click(function(){
    $(".site-header .navbar").removeClass('desktop');
    $(".site-header .navbar").addClass('mobile');
});

$(".menu-cross-btn").click(function(){
    $(".site-header .navbar").removeClass('mobile');
    $(".site-header .navbar").addClass('desktop');
});
