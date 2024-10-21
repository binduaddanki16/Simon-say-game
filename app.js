let gameseq=[];
let userseq=[];
let started=false;
 let btns=["yellow","red","purple",""];
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
 if(started==false){
    console.log("game is started");
    started=true;
    levelup();
 }

});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkbtn(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function checkbtn(idx){
 if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
 }else{
    h2.innerHTML=`game is over! your score was <b>${level}</b> <br> press any key to start again.`;
    let body=document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(function(){
        body.style.backgroundColor="white";
    },1000);
   reset();
 }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
