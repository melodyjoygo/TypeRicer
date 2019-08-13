var easyData = [], mediumData = [], hardData = [];
var index = 0, table;

function setData(easy, medium, hard) {
    var temp1 = easy.split("|");
    var temp2 = medium.split("|");
    var temp3 = hard.split("|");
    for(var i = 0; i < temp1.length; i++) {
        var score = temp1[i].split(":");
        var data = new Object();
        data.username = score[0];
        data.wpm = parseFloat(score[1]);
        data.time = parseInt(score[2]);
        data.acc = parseFloat(score[3]);
        easyData.push(data);
    }
    for(var j = 0; j < temp2.length; j++) {
        var score = temp2[j].split(":");
        var data = new Object();
        data.username = score[0];
        data.wpm = parseFloat(score[1]);
        data.time = parseInt(score[2]);
        data.acc = parseFloat(score[3]);
        mediumData.push(data);
    }
    for(var k = 0; k < temp3.length; k++) {
        var score = temp3[k].split(":");
        var data = new Object();
        data.username = score[0];
        data.wpm = parseFloat(score[1]);
        data.time = parseInt(score[2]);
        data.acc = parseFloat(score[3]);
        hardData.push(data);
    }
    sort();
}

function createTable(obj) {
    var col = ['No.', 'Username', 'WPM', 'Accuracy', 'Best Time'];

    table = document.createElement("table");
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var x = 0; x < obj.length; x++) {
        tr = table.insertRow(-1);
        for (var i = 0; i < col.length; i++) {
            var tabCell = tr.insertCell(-1);
            if (i == 0) {
                tabCell.innerHTML = x + 1;
            } else if (i == 1) {
                tabCell.innerHTML = obj[x].username;
            } else if (i == 2) {
                tabCell.innerHTML = obj[x].wpm;
            } else if (i == 3) {
                tabCell.innerHTML = obj[x].acc + "%";
            } else if (i == 4) {
                tabCell.innerHTML = obj[x].time;
            }
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function sort(type) {
    var arr;
    if(index == 0) {
        arr = easyData.splice(1, easyData.length);
    } else if(index == 1) {  
        arr = mediumData.splice(1, mediumData.length);
    } else if(index == 2) {
        arr = hardData.splice(1, hardData.length);
    }
    if (type == "name") {
        arr.sort(function (a, b) {
            var first = a.username.toLowerCase();
            var second = b.username.toLowerCase();
            if (first < second) {
                return -1;
            } else if (first > second) {
                return 1;
            }
            return 0;
        });
    } else if (type == "wpm") {
        arr.sort(function (a, b) {
            return b.wpm - a.wpm;
        });
    } else if (type == "acc") {
        arr.sort(function (a, b) {
            return b.accuracy - a.accuracy;
        });
    } else if (type == "time") {
        arr.sort(function (a, b) {
            return a.time - b.time;
        });
    }
    
    createTable(arr);
}

function change(num) {
    if (num == 0) {
        $("#difficultyList").css("visibility","visible");
        $("#sortTextText").css("visibility","hidden");
        $("#showDataText").css("visibility","hidden");
        $("#showData").css("visibility","hidden");
        $("#difficultyListText").css("visibility","hidden");
        $("#sortText").css("visibility","hidden");
        $("#leaderboard").css("color", "#03DAC6");
        $("#leaderboard").css("border-color", "#03DAC6");
        $("#rankedText").css("color", "#FFFFFF");
        $("#rankedText").css("border-color", "#FFFFFF");
        $("#easy").css("color","#FFFFFF");
        $("#easy").css("border-color","#FFFFFF");
        $("#medium").css("color","#FFFFFF");
        $("#medium").css("border-color","#FFFFFF");
        $("#hard").css("color","#FFFFFF");
        $("#hard").css("border-color","#FFFFFF");
    } else if (num == 1) {
        $("#difficultyList").css("visibility","hidden");
        $("#sort").css("visibility","hidden");
        $("#showData").css("visibility","hidden");
        $("#difficultyListText").css("visibility","visible");
        $("#sortTextText").css("visibility","hidden");
        $("#showData").css("visibility","hidden");
        $("#sortText").css("visibility","hidden");
        
        $("#leaderboard").css("color", "#FFFFFF");
        $("#leaderboard").css("border-color", "#FFFFFF");
        $("#rankedText").css("color", "#03DAC6");
        $("#rankedText").css("border-color", "#03DAC6");
        $("#easyText").css("color","#FFFFFF");
        $("#easyText").css("border-color","#FFFFFF");
        $("#mediumText").css("color","#FFFFFF");
        $("#mediumText").css("border-color","#FFFFFF");
        $("#hardText").css("color","#FFFFFF");
        $("#hardText").css("border-color","#FFFFFF");
    }
}

function changeDif(num) {
    $("#sortText").css("visibility","hidden");
    $("#sort").css("visibility","visible");
    $("#showData").css("visibility","visible");
    if(num == 0) {
        $("#easy").css("color","#4CAF50");
        $("#easy").css("border-color","#4CAF50");
        $("#medium").css("color","#FFFFFF");
        $("#medium").css("border-color","#FFFFFF");
        $("#hard").css("color","#FFFFFF");
        $("#hard").css("border-color","#FFFFFF");
    } else if(num == 1) {
        $("#easy").css("color","#FFFFFF");
        $("#easy").css("border-color","#FFFFFF");
        $("#medium").css("color","#FFEB3B");
        $("#medium").css("border-color","#FFEB3B");
        $("#hard").css("color","#FFFFFF");
        $("#hard").css("border-color","#FFFFFF");

    } else if(num == 2) {
        $("#easy").css("color","#FFFFFF");
        $("#easy").css("border-color","#FFFFFF");
        $("#medium").css("color","#FFFFFF");
        $("#medium").css("border-color","#FFFFFF");
        $("#hard").css("color","#F44336");
        $("#hard").css("border-color","#F44336");
    }
    index = num;
}

function changeDifText(num) {
    $("#sortTextText").css("visibility","visible");
    $("#sortText").css("visibility","visible");
    $("#showData").css("visibility","visible");
    if(num == 0) {
        $("#easyText").css("color","#4CAF50");
        $("#easyText").css("border-color","#4CAF50");
        $("#mediumText").css("color","#FFFFFF");
        $("#mediumText").css("border-color","#FFFFFF");
        $("#hardText").css("color","#FFFFFF");
        $("#hardText").css("border-color","#FFFFFF");
    } else if(num == 1) {

        $("#easyText").css("color","#FFFFFF");
        $("#easyText").css("border-color","#FFFFFF");
        $("#mediumText").css("color","#FFEB3B");
        $("#mediumText").css("border-color","#FFEB3B");
        $("#hardText").css("color","#FFFFFF");
        $("#hardText").css("border-color","#FFFFFF");

    } else if(num == 2) {
        $("#easyText").css("color","#FFFFFF");
        $("#easyText").css("border-color","#FFFFFF");
        $("#mediumText").css("color","#FFFFFF");
        $("#mediumText").css("border-color","#FFFFFF");
        $("#hardText").css("color","#F44336");
        $("#hardText").css("border-color","#F44336");
    }
    index = num;
}