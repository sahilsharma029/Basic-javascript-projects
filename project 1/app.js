var istatus = document.querySelector("h5");
var addi = document.querySelector("#add");
var btn = document.querySelector("button");
var check = 0;

addi.addEventListener("click",function()
{
    if(check == 0)
    {
        istatus.style.color = "green";
        istatus.innerHTML = "Friends";
        btn.innerHTML = "Unfollow";
        check = 1;
    }
    else{
        istatus.style.color = "red";
        istatus.innerHTML = "Stranger";
        btn.innerHTML = "Follow";
        check = 0;
    }
    
})
