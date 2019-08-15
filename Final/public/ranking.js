var easyData = [], mediumData = [], hardData = [];
var index = 0, table;

function setData(data) {
    var temporary = data.replace(/&#39;/g, "'");
    temporary = temporary.replace(/&#34;/g, "\"");
    list = JSON.parse(temporary);
    easyData = list[0];
    mediumData = list[1];
    hardData = list[2];
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
                tabCell.innerHTML = parseFloat(obj[x].wpm).toFixed(2);
            } else if (i == 3) {
                tabCell.innerHTML = parseFloat(obj[x].accuracy).toFixed(2) + "%";
            } else if (i == 4) {
                tabCell.innerHTML = parseInt(obj[x].time);
            }
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function sort() {
    var type = $("#sort").val();
    var arr;
    if(index == 0) {
        arr = easyData;
    } else if(index == 1) {  
        arr = mediumData;
    } else if(index == 2) {
        arr = hardData;
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