var text, temp, time, timer, words;
var size, counter, error, index;
var list = [];

document.addEventListener('keypress', function(e) {
    $("#inputText").css({'color':'rgb(255, 110, 236)'});
    if(e.keyCode == 13) {
        e.preventDefault();
    }
    if(getIndex() + words[counter].length == size) {
        if(words[counter].substring(0, words[counter].length - 1) == $("#inputText").val().substring(0, words[counter].length) && words[words.length - 1].charCodeAt([words[words.length - 1].length - 1]) == e.keyCode) {
			$('input[type="text"]').prop("disabled", true);
            e.preventDefault();
            $("#inputText").val('');
            $("#mainText").text(text);
            finish();
        }
    }
    if(e.keyCode == 32) {
        if(words[counter] == $("#inputText").val()) {
			e.preventDefault();
            counter++;
            $("#inputText").val('');
            init();
        } else {
            error++;
            $("#inputText").css({'color':'#F44336'});
        }
        marking();
    }
})

function setData(id, data, title) {
    var temp1 = id.split("|");
    var temp2 = data.split("|");
    var temp3 = title.split("|");
    for(var i = 0; i < temp1.length; i++) {
        var obj = new Object();
        obj.id = temp1[i].replace(/&#39;/g, "'");
        obj.text = temp2[i].replace(/&#39;/g, "'");
        obj.title = temp3[i].replace(/&#39;/g, "'");
        list.push(obj);
    }
    start();
}

function start() {
    $('input[type="text"]').prop("disabled", true);
    countdown();
    init();
}

function countdown() {
    var ctr = 5;
    var down = setInterval(function() {
        if(ctr > 0) {
            $("#countDown").css({'visibility':'visible'});
            $("#count").text(ctr);
            ctr--;
        } else {
            randomize(1);
            $("#count").text("GO!");
            clearInterval(down);
            $("#count").text("");
            $("#countDown").css({'visibility':'hidden'});
            $("#inputText").focus();
        }
    }, 1000);
}

function startGame() {
    timer = setInterval(function() {
        setInterval(convertTime(), 1000);
    }, 1000);
}

function convertTime() {
    var newTime;
    if(time < 60) {
        newTime = "00:" + digits(time);
    } else {
        newTime = digits(Math.trunc(time/60)) + ":" + digits(time % 60);
    }
    $("#time").text(newTime);
    time++;
}

function digits(num) {
    return num > 9 ? "" + num: "0" + num;
}

function init() {
    $("#showStats").css("visibility","hidden");
}

function marking() {
    var mark = document.getElementById("mainText");
    mark.innerHTML = words.join(" ");
    var innerHTML = mark.innerHTML;
    if(counter == 0) {
        innerHTML = "<span class='highlight'>" + innerHTML.substring(0, getIndex() + words[counter].length - 1) + "</span> " + innerHTML.substring(getIndex() + words[counter].length);
    } else {
        innerHTML = "<span class='done'>" + innerHTML.substring(0, getIndex()) + "</span><span class='highlight'>" + innerHTML.substring(getIndex(), getIndex() + words[counter].length) + "</span>" + innerHTML.substring(getIndex() + words[counter].length);
    }
    mark.innerHTML = innerHTML;
}

function getIndex() {
    return words.slice(0, counter).join(" ").length + 1;
}

function finish() {
    clearInterval(timer);
    timer = null;
    $("#wpmStat").text(getTime(words.length));
    $("#accuracyStat").text(getAccuracy() + "%");
    $("#timeStat").text(digits(Math.trunc(time/60)) + ":" + digits(time % 60));
    $("#showStats").css("visibility","visible");
    $("#wpm").val(getTime(words.length));
    $("#acc").val(getAccuracy());
    $("#timeConsumed").val(time);
    $("#textID").val(list[index].id);
    $("#diff").val(0);
    $("#end").click();
}

function getTime(num) {
    return ((num/time)*60).toFixed(2);
}

function getAccuracy() {
    return ((size-error)*100/size).toFixed(2);
}

function randomize(num) {
    if(num != 1) {
        num = 0;
    }
    counter = 0;
    error = 0;
    time = num;
    while(temp == text) {
        index = Math.floor(Math.random() * list.length);
        text = list[index].text;
        if(temp != text) {
            $("#mainText").text(text);
            $("#textTitle").text(list[index].title);
            size = text.length;
        }
    }
    temp = text;
    words = $.trim($("#mainText").text()).split(" ");
    marking();
    $('input[type="text"]').prop("disabled", false);
    $("#time").text("00:00");
    $("#time").css({'visibility':'visible'});
    startGame();
    init();
}

function restart() {
    $("#textTitle").text("");
    $("#mainText").text("");
    $("#time").css({'visibility':'hidden'});
    start();
}