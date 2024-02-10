let button=document.querySelector('.button');
let btn=document.querySelector('#btn');
button.addEventListener('mouseenter',function(){
    btn.style.color="white";
    btn.style.backgroundColor="red";
})
button.addEventListener('mouseleave',function(){
    btn.style.backgroundColor="white";
});



let icon=document.querySelector('.ri-home-7-fill');
let home=document.querySelector('#home');
let body=document.querySelector('.body');
icon.addEventListener('mouseenter',function(){
    home.style.color="white";
    body.style.backgroundColor="rgb(255 0 0)";
});
icon.addEventListener('mouseleave',function(){
    home.style.color="black"; 
    body.style.backgroundColor="transparent";
});

let nav=document.querySelector('.nav-child-cildern1');
let h4=document.querySelector('#ch1');
nav.addEventListener('mouseenter',function(){
    ch1.style.color="white";
})
nav.addEventListener('mouseleave',function(){
    ch1.style.color="black";
})


let nav2=document.querySelector('.nav-child-cildern2');
let h42=document.querySelector('#ch2');
nav2.addEventListener('mouseenter',function(){
    ch2.style.color="white";
})
nav2.addEventListener('mouseleave',function(){
    ch2.style.color="black";
});
