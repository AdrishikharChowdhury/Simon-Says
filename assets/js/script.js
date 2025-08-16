let boxes=document.querySelectorAll(".box");
let start=document.querySelector(".start");
let heading=document.querySelector(".message");
let reset=document.querySelector(".reset");
const difficulties=document.querySelectorAll(".diff-button");
const win=document.querySelectorAll(".winCount");
const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
const interval=1000;
let level=5
let glowTime=false;
let pattern=[]
let gameProgress=false;
let userStep=0;
let winIdx=0;

difficulties.forEach((difficulty,idx)=>{
    difficulty.addEventListener("click",()=>{
        difficulties.forEach((button)=>{button.classList.remove("glow")})
        difficulty.classList.add("glow");
        level = parseInt(difficulty.dataset.level);
        heading.innerText=`Difficulty Set to ${difficulty.innerText}`
        winIdx=idx;
    })
})

function getRandomNumber() {
  return Math.floor(Math.random() * 8) + 1;
}

const patternMaker=(num)=>{
    pattern=[]
    for(let i=0;i<num;i++)
    {
        pattern.push(getRandomNumber());
    }
    return pattern;
}

const patternGlower=(box)=>{
    if(box.classList.add("glow"))
    {
        return;
    }

    box.classList.add("glow");
    setTimeout(()=>{
        box.classList.remove("glow")
    },800);
}

const patternRight=(box)=>{
    if(box.classList.add("right"))
    {
        return;
    }

    box.classList.add("right");
    setTimeout(()=>{5
        box.classList.remove("right")
    },500);
}

const patternWrong=(box)=>{
    if(box.classList.add("wrong"))
    {
        return;
    }

    box.classList.add("wrong");
    setTimeout(()=>{
        box.classList.remove("wrong")
    },500);
}
const game=async ()=>{
    heading.innerText="";
    start.disabled=true;
    gameProgress=false;
    userStep=0;
    pattern=patternMaker(level);
    for(const patternIdx of pattern)
    {
        patternGlower(boxes[patternIdx]);
        await delay(interval)
    }
    gameProgress=true;
}




start.addEventListener("click",game);
reset.addEventListener("click",()=>{
    win.forEach((count)=>{
        count.innerText="0";
    });
});


boxes.forEach((box,idx)=>{
    box.addEventListener("click",()=>{
        if(!gameProgress)
        {
            return;
        }
        if(idx===pattern[userStep++])
        {
            patternRight(box);
            if(userStep===pattern.length)
            {
                heading.innerHTML="You Won"
                win[winIdx].innerText=parseInt(win[winIdx].innerText)+1;
                start.disabled=false;
                gameProgress=false;
            }
        }
        else{
            heading.innerHTML="You Lost"
            patternWrong(box);
            gameProgress=false;
            start.disabled=false;
        }
    })
});

if (window.location.hostname === "simonbollo.netlify.app") {
    const baseTag = document.createElement("base");
    baseTag.href = "/Simon-Says/";
    document.head.appendChild(baseTag);
  }