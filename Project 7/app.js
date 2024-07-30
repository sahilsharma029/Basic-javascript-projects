var enroll = document.querySelector(".enroll");
var enrollp = document.querySelector(".enroll p");
var flag = 0;
enroll.addEventListener("click",function(elem){
    if(flag == 0)
    {
        enrollp.innerHTML = "Enrolled";
        enrollp.style.animation = "0";
        flag = 1;
    }
    else{
        enrollp.innerHTML = "Get Enrolled";
        enrollp.style.animation = "opaci 2s infinite";
        flag = 0;
    }
})