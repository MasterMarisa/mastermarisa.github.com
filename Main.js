function Timer(){
    let i = Date();
    i = i.slice(0,i.indexOf("+")-3);
    document.getElementById("clock").innerHTML=i;
}


function AddAudio(Name,Artist,Url,Cover,Lrc="none"){
    ap.list.add([{
        name:Name,
        artist:Artist,
        url:Url,
        cover:Cover,
        lrc:Lrc
    },]);
}

let flag = true;
let wroking = false;
let Move = ()=>{
    if(!wroking){
        if(flag){
            document.getElementById("MLS").style.zIndex = "-2";
            document.getElementById("MLS").style.marginTop = "-450px";
            document.getElementById("Arrow").style.transform = "rotate(0deg)";
        }
        else{
            document.getElementById("MLS").style.marginTop = "0px"; 
            document.getElementById("Arrow").style.transform = "rotate(-90deg)"; 
            setTimeout(()=>{document.getElementById("MLS").style.zIndex = "0";},1000);
        }
        wroking = true;
        setTimeout(()=>{wroking = false;},1000);
        flag =! flag;
    }
}

$(document).ready(function(){
    $("#SideBar").load("./SideBar.html");
    $("#Latest").load("./Latest.html");
});
