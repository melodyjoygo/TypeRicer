var text = '', input = '', temp = '';
var size, counter = 0, error = 0, start, end, begin = false;
var list = ["The growth of commercial agriculture which began with the tobacco monopoly was greatly accelerated by the rising demands of other exports products. Not only that, the Philippines economy growth also increase their foreign trade as well.",
            "On the other hand, this led to a social changes in Philippines where some Filipinos were able to get a proper education and some others were able to raise their capitals, becoming rich, and this was the time where the Filipinos realized that they are not inferior to the Spaniards.",
            "From this point onwards, the educated Filipinos were beginning to express reactions to the criticism of colonial arrangements.",
            "At first, what Spaniards did were according to what they had promised.",
            "However, these improvements could not be achieved through peaceful means. There must be a revolution.",
            "Although most of the Filipinos were remain loyal to the Spaniards, the Spaniards realized that they couldn't stay hidden inside the wall of Intramuros any longer.",
            "Short story, the Spaniards were able to recover the Philippines."];
var words;

document.addEventListener('keypress', function(e) {
    if(!begin && $("textarea").val() != '') {
        begin = true;
        start = Date.now();
    }
    if(e.keyCode == 32) {
        if(words[counter] == $("#text").val().trim()) {
            counter++;
            $("#text").val('');
            init();
        } else {
            error++;
            showError();
        }
        if(counter == words.length) {
            $('form input[type="text"]').prop("disabled", true);
            finish();
        }
    }
})

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
    while(temp == text) {
        text = list[Math.floor(Math.random() * list.length)]
        if(temp != text) {
            $("#goal").text(text);
            size = text.length;
        }
    }
    temp = text;
    words = $.trim($("textarea").val()).split(" ");
    init();
}