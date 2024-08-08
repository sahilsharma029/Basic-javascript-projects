var arr = [
{dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://media.istockphoto.com/id/1410862476/photo/closeup-face-of-young-attractive-girl-looking-at-camera-isolated-on-orange-color-background.webp?s=170667a&w=0&k=20&c=b-FD3-86wrq_7dptl_0joKfkf54mZSm7o8IcHGzAsOE="
},
{dp: "https://media.istockphoto.com/id/819644370/photo/headshot-of-fashionable-young-caucasian-woman-in-stylish-sunglasses.webp?s=170667a&w=0&k=20&c=FSasR9IEGjR9gN4idsBEJLKE1EPRt4iT3tQ1XzWsjUI=",
    story: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
},
{dp: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1496203695688-3b8985780d6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
},
{dp: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1496203695688-3b8985780d6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
}
];

// template literals = ``

var clutter = "";

arr.forEach(function(elem,idx)
{
    clutter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
            </div>`
})

document.querySelector(".stories").innerHTML = clutter;

var stories = document.querySelector(".stories");
stories.addEventListener("click",function(dets)
{
   document.querySelector(".fullscreen").style.display = "block" ;
   document.querySelector(".fullscreen").style.backgroundImage = `url("${arr[dets.target.id].story}")` 

   setTimeout(() => {
    document.querySelector(".fullscreen").style.display = "none" ;
   }, 2000);
} )

