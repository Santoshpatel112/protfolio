let button=document.querySelector('.button');
let btn=document.querySelector('button');
fog=0;
button.addEventListener('mouseenter',function(){
        if(fog==0){
    btn.style.backgroundColor="rgb(25 4 4)";
    fog=1;
    }
    else{
        btn.style.backgroundColor="black";
        fob=0;
    }
})
button.addEventListener('mouseleave',function(){
    if(fog==0){
    btn.style.backgroundColor="black";
    fog=1;
    }
    else{
        btn.style.backgroundColor="gray";
        fob=0;
    }
})
let cv=document.querySelector('.cv');
let arow=document.querySelector('#arow');
fog=0;
cv.addEventListener('mouseenter',function(){
    arow.style.color="red";
})
f=0;
cv.addEventListener('mouseleave',function(){
        arow.style.color="black";

});
let twit=document.querySelector('#twit');
let t=document.querySelector('#t');
twit.addEventListener('mouseenter',function(){
t.style.color="blue";
})
twit.addEventListener('mouseleave',function(){
    t.style.color="black";
})
let X=document.querySelector('#X');
let smallx=document.querySelector('#small-x');
X.addEventListener('mouseenter',function(){
    smallx.style.color="blue";
});
X.addEventListener('mouseleave',function(){
    smallx.style.color="black";
    });

    let insta=document.querySelector('#Insta');
    let instaicon=document.querySelector('#instaicon');
    insta.addEventListener('mouseenter',function(){
        instaicon.style.color="deeppink";
    });
    insta.addEventListener('mouseleave',function(){
        instaicon.style.color="black";
    });
    let child1=document.querySelector('.child1');
    let c1=document.querySelector('#child1');
    child1.addEventListener('mouseenter',function(){
        c1.style.backgroundColor="silver";
    });
    child1.addEventListener('mouseleave',function(){
        c1.style.backgroundColor="whitesmoke"
    });



     let child2=document.querySelector('.child2');
    let c2=document.querySelector('#child2');
    child2.addEventListener('mouseenter',function(){
        c2.style.backgroundColor="silver";
    });
    child2.addEventListener('mouseleave',function(){
        c2.style.backgroundColor="whitesmoke"
    });


     let child3=document.querySelector('.child3');
    let c3=document.querySelector('#child3');
    child3.addEventListener('mouseenter',function(){
        c3.style.backgroundColor="silver";
    });
    child3.addEventListener('mouseleave',function(){
        c3.style.backgroundColor="whitesmoke"
    });

    let button2=document.querySelector(".button2");
    let btn2=document.querySelector('#btn2');
    button2.addEventListener('mouseenter',function(){
        btn2.style.backgroundColor="silver";
    });
    button2.addEventListener('mouseleave',function(){
        btn2.style.backgroundColor="firebrick";
        btn2.style.color="black";
    })

    
    let button3=document.querySelector(".button3");
    let btn3=document.querySelector('#btn3');
    button3.addEventListener('mouseenter',function(){
        btn3.style.backgroundColor="silver";
    });
    button3.addEventListener('mouseleave',function(){
        btn3.style.backgroundColor="firebrick";
        btn3.style.color="black";
    })



    let img=document.querySelector('.img');
    let mg=document.querySelector('#mg');
    img.addEventListener('mouseenter',function(){
        mg.style.backgroundColor="grey";
    });
     img.addEventListener('mouseleave',function(){
        mg.style.backgroundColor='silver';
    });



    let mail=document.querySelector('.mail');
let msgicon=document.querySelector('.ri-mail-fill');
mail.addEventListener('mouseenter',function(){
    msgicon.style.color="crimson";
});
mail.addEventListener('mouseleave',function(){
    msgicon.style.color="white";
});




