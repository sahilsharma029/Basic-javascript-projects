var elem = document.querySelectorAll(".elem");
var elemimg = document.querySelectorAll(".elem img");

elem.forEach(function(val){
    val.addEventListener("mousemove",function(e){
        val.childNodes[3].style.left = e.x+"px";
        // val.childNodes[3].style.top = e.y+"px";
    })
    
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0;
    }) 
})

