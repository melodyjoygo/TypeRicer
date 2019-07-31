var text, temp, time, timer, words;
var size, counter, error;
var list = ["The growth of commercial agriculture which began with the tobacco monopoly was greatly accelerated by the rising demands of other exports products. Not only that, the Philippines economy growth also increase their foreign trade as well.",
            "On the other hand, this led to a social changes in Philippines where some Filipinos were able to get a proper education and some others were able to raise their capitals, becoming rich, and this was the time where the Filipinos realized that they are not inferior to the Spaniards.",
            "From this point onwards, the educated Filipinos were beginning to express reactions to the criticism of colonial arrangements.",
            "At first, what Spaniards did were according to what they had promised.",
            "However, these improvements could not be achieved through peaceful means. There must be a revolution.",
            "Although most of the Filipinos were remain loyal to the Spaniards, the Spaniards realized that they couldn't stay hidden inside the wall of Intramuros any longer.",
            "Short story, the Spaniards were able to recover the Philippines."];
var instance;

document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        e.preventDefault();
    }
    if(counter+1 == words.length && words[words.length - 1].charCodeAt([words[words.length - 1].length - 1]) == e.keyCode) {
        $('form input[type="text"]').prop("disabled", true);
        e.preventDefault();
        $("#text").val('');
        finish();
    }
    if(e.keyCode == 32) {
        if(words[counter] == $("#text").val()) {
			e.preventDefault();
            counter++;
            $("#text").val('');
            init();
        } else {
            error++;
            showError();
        }
    }
    marking();
})

function start() {
    $('form input[type="text"]').prop("disabled", true);
    countdown();
    init();
}

function countdown() {
    var ctr = 5;
    var down = setInterval(function() {
        if(ctr > 0) {
            $("#countdown").text(ctr);
            ctr--;
        } else {
            randomize(1);
            $("#countdown").text("GO!");
            clearInterval(down);
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
    $("#error").css({'visibility':'hidden'});
    $("#wpm").css({'visibility':'hidden'});
    $("#acc").css({'visibility':'hidden'});
    $("#final").css({'visibility':'hidden'});
    $("#random").css({'visibility':'hidden'});
}

function showError() {
    $("#error").text("Wrong input!");
    $("#error").css({
        'visibility':'visible',
        'color': 'red'
    });
}

function marking() {
    instance.unmark();
    instance.mark(words[counter], {
        filter: function(a, b, c, d) {
            
        }
    });
}

function finish() {
    $("#error").text("Finished!");
    $("#error").css({
        'visibility':'visible',
        'color':'black'
    });
    clearInterval(timer);
    timer = null;
    $("#wpm").text("WPM: " + getTime(words.length));
    $("#wpm").css({'visibility':'visible'});
    $("#acc").text("Accuracy: " + getAccuracy() + "%");
    $("#acc").css({'visibility':'visible'});
    $("#final").text("Time: " + digits(Math.trunc(time/60)) + ":" + digits(time % 60));
    $("#final").css({'visibility':'visible'});
    $("#random").css({'visibility':'visible'});
    $("#time").text(digits(Math.trunc(time/60)) + ":" + digits(time % 60));
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
        text = list[Math.floor(Math.random() * list.length)]
        if(temp != text) {
            $("#goal").text(text);
            size = text.length;
        }
    }
    temp = text;
    words = $.trim($("#goal").text()).split(" ");
    instance = new Mark(document.querySelector("#goal"));
    marking();
    $('form input[type="text"]').prop("disabled", false);
    $("#time").text("00:00");
    $("#time").css({'visibility':'visible'});
    startGame();
    init();
}