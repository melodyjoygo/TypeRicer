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

var wpm_easy = 0, wpm_med = 0, wpm_hard = 0;
var time_easy = 0, time_med = 0, time_hard = 0;
var acc_easy = 0, acc_med = 0, acc_hard = 0;

function setData(a, b, c) {
    var temp1 = a.split("|");
    var temp2 = b.split("|");
    var temp3 = c.split("|");

    if(a.length > 0) {
        for(var i = 0; i < temp1.length; i++) {
            var score = temp1[i].split(":");
            wpm_easy += parseFloat(score[0]);
            time_easy += parseInt(score[1]);
            acc_easy += parseFloat(score[2]);
        }
        wpm_easy = (wpm_easy/temp1.length).toFixed(2);
        time_easy = time_easy/temp1.length; 
        time_easy = digits(Math.trunc(time_easy/60)) + ":" + digits(time_easy % 60);
        acc_easy = (acc_easy/temp1.length).toFixed(2);
    } else {
        wpm_easy = (0).toFixed(2);
        time_easy = (0).toFixed(2); 
        acc_easy = (0).toFixed(2);
    }
    if(b.length > 0) {
        for(var j = 0; j < temp2.length; j++) {
            var score = temp2[j].split(":");
            wpm_med += parseFloat(score[0]);
            time_med += parseInt(score[1]);
            acc_med += parseFloat(score[2]);
        }
        wpm_med = (wpm_med/temp2.length).toFixed(2);
        time_med = time_med/temp2.length; 
        time_med = digits(Math.trunc(time_med/60)) + ":" + digits(time_med % 60);
        acc_med = (acc_med/temp2.length).toFixed(2);
    } else {
        wpm_med = (0).toFixed(2);
        time_med = (0).toFixed(2); 
        acc_med = (0).toFixed(2);
    }
    if(c.length > 0 ) {
        for(var k = 0; k < temp3.length; k++) {
            var score = temp3[k].split(":");
            wpm_hard += parseFloat(score[0]);
            time_hard += parseInt(score[1]);
            acc_hard += parseFloat(score[2]);
        }
        wpm_hard = (wpm_hard/temp3.length).toFixed(2);
        time_hard = time_hard/temp3.length; 
        time_hard = digits(Math.trunc(time_hard/60)) + ":" + digits(time_hard % 60);
        acc_hard = (acc_hard/temp3.length).toFixed(2);
    } else {
        wpm_hard = (0).toFixed(2);
        time_hard = (0).toFixed(2); 
        acc_hard = (0).toFixed(2);
    }
    change(0);
}

function digits(num) {
    return num > 9 ? "" + num: "0" + num;
}