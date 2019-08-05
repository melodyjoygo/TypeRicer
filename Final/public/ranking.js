var data = [{
        'id' : '1',
        'username' : 'agmambar',
        'wpm' : '64',
        'accuracy' : '98.54',
        'time' : '45'
    },{
        'id' : '2',
        'username' : 'stanley',
        'wpm' : '32',
        'accuracy' : '23.54',
        'time' : '425'
    },{
        'id' : '3',
        'username' : 'hahahahah',
        'wpm' : '12',
        'accuracy' : '39.54',
        'time' : '245'
    },{
        'id' : '4',
        'username' : 'klekmeri',
        'wpm' : '13',
        'accuracy' : '94.54',
        'time' : '452'
    },{
        'id' : '5',
        'username' : 'zumba',
        'wpm' : '4',
        'accuracy' : '10.54',
        'time' : '425'
    },{
        'id' : '6',
        'username' : 'matt',
        'wpm' : '6',
        'accuracy' : '78.54',
        'time' : '451'
    },{
        'id' : '7',
        'username' : 'lola',
        'wpm' : '3',
        'accuracy' : '88.54',
        'time' : '415'
    },{
        'id' : '8',
        'username' : 'taco bell',
        'wpm' : '24',
        'accuracy' : '65.54',
        'time' : '145'
    },{
        'id' : '9',
        'username' : 'uni',
        'wpm' : '54',
        'accuracy' : '12.54',
        'time' : '45'
    },{
        'id' : '10',
        'username' : 'oppa',
        'wpm' : '94',
        'accuracy' : '1.54',
        'time' : '5'
    }

]

function createTable(obj) {
    var col = ['No.','Username','WPM','Accuracy','Best Time'];

    var table = document.createElement("table");
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }   

    for(var x = 0; x < obj.length; x++) {
        tr = table.insertRow(-1);
        for(var i = 0; i < col.length; i++) {
            var tabCell = tr.insertCell(-1);            
            if(i == 0) {
                tabCell.innerHTML = x+1;
            } else if(i == 1) {
                tabCell.innerHTML = obj[x].username;
            } else if(i == 2) {
                tabCell.innerHTML = obj[x].wpm;
            } else if(i == 3) {
                tabCell.innerHTML = obj[x].accuracy + "%";
            } else if(i == 4) {
                tabCell.innerHTML = obj[x].time;
            }  
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function sort() {
    var type = $("#sort").val();
    var arr = data.slice(0, data.length);
    if(type == "name") {
        arr.sort(function(a, b) {
            var first = a.username.toLowerCase();
            var second = b.username.toLowerCase();
            if(first < second) {
                return -1;
            } else if(first > second) {
                return 1;
            }
            return 0;
        });
    } else if(type == "wpm") {
        arr.sort(function(a, b) {
            return b.wpm - a.wpm;
        });
    } else if(type == "acc") {
        arr.sort(function(a, b) {
            return b.accuracy - a.accuracy;
        });
    } else if(type == "time") {
        arr.sort(function(a, b) {
            return a.time - b.time;
        });
    }
    createTable(arr);
}