document.getElementById("muvb").onclick = function(){
    let q1 = document.getElementById("sq").value;
    let p1 = document.getElementById("sp").value;
    let q2 = document.getElementById("aq").value;
    let p2 = document.getElementById("sp").value;
    let a = q1 * p1;
    let b = q2 * p2;
    let muv = a - b;
    document.getElementById("s1").innerHTML = q1;
    document.getElementById("p1").innerHTML = p1;
    document.getElementById("r1").innerHTML = a;
    if(muv<0){
        muv = muv + " Unfavorable";
    }
    else{
        muv = muv + " favorable";
    }
    document.getElementById("muva").innerHTML = muv;
}
document.getElementById("mpvb").onclick = function(){
   let q2 = document.getElementById("aq").value;
   let p2 = document.getElementById("sp").value;
   let q3 = document.getElementById("aq").value;
   let p3 = document.getElementById("ap").value;
   let b = q2 * p2;
   let c = q3 * p3;
   let mpv = b - c;
   document.getElementById("s2").innerHTML = q2;
   document.getElementById("p2").innerHTML = p2;
   document.getElementById("r2").innerHTML = b;
   if(mpv<0){
     mpv = mpv + " Unfavorable"
    }
    else{
     mpv = mpv + " favorable"
    }
   document.getElementById("mpva").innerHTML = mpv;
}
document.getElementById("mcvb").onclick = function(){
    let q1 = document.getElementById("sq").value;
    let p1 = document.getElementById("sp").value;
    let q3 = document.getElementById("aq").value;
    let p3 = document.getElementById("ap").value;
    let a = q1 * p1;
    let c = q3 * p3;
    let mcv = a - c;
    document.getElementById("s3").innerHTML = q3;
    document.getElementById("p3").innerHTML = p3;
    document.getElementById("r3").innerHTML = c;
    if(mcv<0){
        mcv = mcv + " Unfavorable"
    }
    else{
        mcv = mcv + " favorable"
    }
    document.getElementById("mcva").innerHTML = mcv;
}
