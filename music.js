//获取元素

const audio =
document.getElementById("audio");


const btn =
document.getElementById("playBtn");


const progress =
document.getElementById("progress");


const current =
document.getElementById("current");


const duration =
document.getElementById("duration");




//点击播放

btn.onclick=function(){


    if(audio.paused){

        audio.play();

        btn.innerHTML="❚❚";

    }

    else{

        audio.pause();

        btn.innerHTML="▶";

    }

};




//音乐加载完成

audio.onloadedmetadata=function(){

    duration.innerHTML =
    formatTime(audio.duration);

};



//播放进度变化

audio.ontimeupdate=function(){


    let value =
    audio.currentTime /
    audio.duration *
    100;


    progress.value=value;


    current.innerHTML =
    formatTime(audio.currentTime);


};




//拖动进度条

progress.oninput=function(){


    audio.currentTime =
    progress.value/100*
    audio.duration;


};




//时间格式

function formatTime(time){


    let min =
    Math.floor(time/60);


    let sec =
    Math.floor(time%60);



    if(min<10)
        min="0"+min;


    if(sec<10)
        sec="0"+sec;


    return min+":"+sec;

}
