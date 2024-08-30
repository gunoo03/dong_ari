if (count ==1) {
    document.getElementById("one").style.display = "block";
}
if (count ==2) {
    document.getElementById("two").style.display = "block";
    document.getElementById("one").style.display = "none";
}
if (count ==3) {
    document.getElementById("three").style.display = "block";
    document.getElementById("two").style.display = "none";
}
if (count ==4) {
    document.getElementById("four").style.display = "block";
    document.getElementById("three").style.display = "none";
}
if (count ==5) {
    document.getElementById("five").style.display = "block";
    document.getElementById("four").style.display = "none";
}
if (count >= 6) {
    clearInterval(intervalId);
    //점스
}
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "none";
document.getElementById("four").style.display = "none";
document.getElementById("five").style.display = "none";
var count = 1;
var k =0;
function a() {
    k++;
}
const intervalId = setInterval(a, 1000); // 1초마다 실행