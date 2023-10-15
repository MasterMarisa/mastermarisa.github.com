Timer();
setInterval(Timer,1000);
Timer();
let Surprise = () => {
    document.write('<img style="width:40%;height:auto;margin-left:30%;" src="https://download.zoho.com.cn/v1/workdrive/download/jy075b48ba6ff5ce14543a742f4b2d43776f1?x-cli-msg=%7B%22isFileOwner%22%3Atrue%2C%22version%22%3A%221.0%22%7D"></img>');
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

