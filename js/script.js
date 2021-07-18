// images = 7  (0,1,2,3,4,...,6)

let flag=0;

function controller(x){       // here mouse click event is used
    flag=flag+x;             //  here increment decrement gerna laae use garai ko haami
    //console.log(flag);
    slideshow(flag);       // yaha maathi ko function laae call garai ko
}

function slideshow(num){
    let slides=document.getElementsByClassName('slide');
    //console.log(slides)

    if(num == slides.length){    // after ending the last slide it will return to 1st slide
        flag=0;
        num=0;
    }else if(num == -1){      // befor ending the first slide it will return to last slide
        flag=slides.length - 1;
        num=flag;

    }

    for(let i of slides){          // i udes for loop to iterate all the above sildes
        i.style.display='none';   // to hide all the slides
    }

    slides[num].style.display='block';  // To previw the current num in the syntax
}


slideshow(flag);


//                   Created By ShahRukh_Khan       
