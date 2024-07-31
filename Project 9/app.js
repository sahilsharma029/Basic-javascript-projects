let inp = document.querySelector("input");
let btn = document.querySelectorAll("button");

let str = "";
let arr = Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener("click", (elem)=>{
        if(elem.target.innerHTML == "=")
        {
            str = eval(str);
            inp.value = str;
        }
        else if(elem.target.innerHTML == 'AC')
        {
            str = "";
            inp.value = str;
        }
        else if(elem.target.innerHTML == 'DEL')
        {
            str = str.substring(0, str.length-1);
            inp.value = str;
        }
        else{
            str += elem.target.innerHTML;
            inp.value = str;
        }
    })
});