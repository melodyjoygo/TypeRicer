function change(num) {
    if(num == 0) {
        $("#easy").css("color","#4CAF50");
        $("#easy").css("border-color","#4CAF50");
        $("#medium").css("color","#FFFFFF");
        $("#medium").css("border-color","#FFFFFF");
        $("#hard").css("color","#FFFFFF");
        $("#hard").css("border-color","#FFFFFF");
        $("#statsWPM").text(wpm_easy);
        $("#statsTime").text(time_easy);
        $("#statsAcc").text(acc_easy);
        $("#statsBox").css("visibility","visible");
    } else if(num == 1) {
        $("#easy").css("color","#FFFFFF");
        $("#easy").css("border-color","#FFFFFF");
        $("#medium").css("color","#FFEB3B");
        $("#medium").css("border-color","#FFEB3B");
        $("#hard").css("color","#FFFFFF");
        $("#hard").css("border-color","#FFFFFF");
        $("#statsWPM").text(wpm_med);
        $("#statsTime").text(time_med);
        $("#statsAcc").text(acc_med);
        $("#statsBox").css("visibility","visible");
    } else if(num == 2) {
        $("#easy").css("color","#FFFFFF");
        $("#easy").css("border-color","#FFFFFF");
        $("#medium").css("color","#FFFFFF");
        $("#medium").css("border-color","#FFFFFF");
        $("#hard").css("color","#F44336");
        $("#hard").css("border-color","#F44336");
        $("#statsWPM").text(wpm_hard);
        $("#statsTime").text(time_hard);
        $("#statsAcc").text(acc_hard);
        $("#statsBox").css("visibility","visible");
    }
}

var wpm_easy, wpm_med, wpm_hard;
var time_easy, time_med, time_hard;
var acc_easy, acc_med, acc_hard;

function setData(a, b, c) {
    
    var temp1 = a.split("|");
    var temp2 = b.split("|");
    var temp3 = c.split("|");
    wpm_easy = temp1[0]; time_easy = temp1[1]; acc_easy = temp1[2];
    wpm_med = temp2[0]; time_med = temp2[1]; acc_med = temp2[2];
    wpm_hard = temp3[0]; time_hard = temp3[1]; acc_hard = temp3[2];
    change(0);
}