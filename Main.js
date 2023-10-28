let Surprise = () => {
    document.write('<img style="width:40%;height:auto;margin-left:30%;" src="./pictures/恶心丸.gif"></img>');
    alert(a);
}
function Timer(){
    let i = Date();
    i = i.slice(0,i.indexOf("+")-3);
    document.getElementById("clock").innerHTML=i;
}

function AddAduio(Name,Artist,Url,Cover,Lrc="none"){
    ap.list.add([{
        name:Name,
        artist:Artist,
        url:Url,
        cover:Cover,
        lrc:Lrc
    },]);
}
