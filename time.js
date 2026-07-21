function updateTime(){

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();


    month = month<10?"0"+month:month;
    day = day<10?"0"+day:day;

    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;


    document.getElementById("clock").innerHTML =
    `${year}-${month}-${day} ${h}:${m}:${s}`;

}

updateTime();
setInterval(updateTime,1000);
