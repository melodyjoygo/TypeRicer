var text, input, temp;
var size, counter, error, start, end, begin;
var list = ["The growth of commercial agriculture which began with the tobacco monopoly was greatly accelerated by the rising demands of other exports products. Not only that, the Philippines economy growth also increase their foreign trade as well.",
            "On the other hand, this led to a social changes in Philippines where some Filipinos were able to get a proper education and some others were able to raise their capitals, becoming rich, and this was the time where the Filipinos realized that they are not inferior to the Spaniards.",
            "From this point onwards, the educated Filipinos were beginning to express reactions to the criticism of colonial arrangements. They realized they need to be independent from the things that have been hindering them from moving forwards such as their moral backwardness and the fact that their religious beliefs are still confined in practice only without any deeper meaning to it.",
            "As first, what Spaniards did were according to what they had promised.",
            "However, these improvements could not be achieved through peaceful means. There must be a revolution.",
            "Although most of the Filipinos were remain loyal to the Spaniards, the Spaniards realized that they couldn't stay hidden inside the wall of Intramuros any longer.",
            "Short story, the Spaniards were able to recover the Philippines."];

document.addEventListener('keydown', function(e) { 
    if(e.keyCode == 8) {
        if(counter != 0) {
            input = input.substring(0, counter-1);
            counter--;
        } 
    }
})

document.addEventListener('keypress', function(e) {
    if(!begin) {
        begin = true;
        start = Date.now();
    }
    if(e.keyCode == 13) {
        e.preventDefault();
    }
    if(e.keyCode == text.charCodeAt(counter)) {
        input += e.key;
        counter++;
        init();
        if(e.keyCode == 32) {
            e.preventDefault();
            $("#text").val('');
        }
    } else {
        if(input != text) {
            e.preventDefault();
            error++;
            showError();
        } 
    }
    if(input == text) {
        $('form input[type="text"]').prop("disabled", true);
        e.preventDefault();
        $("#text").val('');
        finish();
    }
})

function start() {
    $('form input[type="text"]').prop("disabled", true);
    init();
}

function init() {
    $("#error").css({'visibility':'hidden'});
    $("#wpm").css({'visibility':'hidden'});
    $("#acc").css({'visibility':'hidden'});
}

function showError() {
    $("#error").val("Wrong input!");
    $("#error").css({
        'visibility':'visible'
    });
}

function finish() {
    end = Date.now();
    $("#error").text("Finished!");
    $("#error").css({
        'visibility':'visible',
        'color':'black'
    });
    var words = input.split(" ");
    $("#wpm").text("WPM: " + getTime(words.length));
    $("#wpm").css({'visibility':'visible'});
    $("#acc").text("Accuracy: " + getAccuracy() + "%");
    $("#acc").css({'visibility':'visible'});
}

function getTime(num) {
    var time = end - start;
    time = time/1000;
    return ((num/time)*60).toFixed(2);
}

function getAccuracy() {
    return ((size-error)*100/size).toFixed(2);
}

function randomize() {
    counter = 0;
    error = 0;
    begin = false;
    text = '';
    temp = '';
    input = '';
    while(temp == text) {
        text = list[Math.floor(Math.random() * list.length)]
        if(temp != text) {
            $("#goal").text(text);
            size = text.length;
        }
    }
    temp = text;
    $('form input[type="text"]').prop("disabled", false);
    init();
}