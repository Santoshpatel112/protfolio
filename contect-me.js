let linkedin=document.querySelector('.ri-linkedin-fill');
var link=document.querySelector('#link');
linkedin.addEventListener('mouseenter',function(){
    link.style.color="blue";
});
linkedin.addEventListener('mouseleave',function(){
    link.style.color="white";
});



let twitter=document.querySelector('.ri-twitter-line');
var twitk=document.querySelector('#twit');
twitter.addEventListener('mouseenter',function(){
    twit.style.color="blue";
});
twitter.addEventListener('mouseleave',function(){
    twit.style.color="white";
});



let instagram=document.querySelector('.ri-instagram-line');
var insta=document.querySelector('#insta');
instagram.addEventListener('mouseenter',function(){
    insta.style.color="mediumvioletred";
});
instagram.addEventListener('mouseleave',function(){
    insta.style.color="white";
});

let mail=document.querySelector('.mail');
let msgicon=document.querySelector('.ri-mail-fill');
mail.addEventListener('mouseenter',function(){
    msgicon.style.color="crimson";
});
mail.addEventListener('mouseleave',function(){
    msgicon.style.color="white";
});

let button=document.querySelector('button');
let btn=document.querySelector('#btn');
button.addEventListener('mouseenter',function(){
    btn.style.backgroundColor="white"
    btn.style.color="black"
});
button.addEventListener('mouseleave',function(){
    btn.style.backgroundColor="darkred"
    btn.style.color="white"
});