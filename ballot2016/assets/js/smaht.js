/**
 * Created by stokesa on 1/23/16.
 */
var totalVotes = 1, trumpVotes = 0, bernieVotes = 0, trumpNBernie = 1;
var winningTrump = '../images/trump_winning.png', defaultTrump = '../images/trump.png',
    losingTrump = '../images/trump_losing.png';
var winningBernie = '../images/bernie_winning.png', defaultBernie ='../images/bernie.png',
    losingBernie = '../images/bernie_losing.png';
// 0 - trump, 1 - even, 2 - bernie


io.socket.on('voteAdded', function(msg){
    console.log('vote recieved for: ' + msg.candidate);
    addUser(msg.candidate);
});

// load initial
io.socket.get('/vote', {}, function(data, jwr){
    if (jwr.statusCode == 200){
        console.log('INIT: ' + data.length);
        for(var i = 0; i<data.length; i++) {
            var cand = data[i].candidate;
            addUser(cand);
        }
    } else {
        console.log('ERROR: ' + jwr.statusCode);
    }
});
// subscribe to future updates by joining room
io.socket.get('/joinRoom', {}, function(data, jwr){
    if (jwr.statusCode == 200){
        console.log('JOINING ROOM');
        for(var i = 0; i<data.length; i++) {
            var cand = data[i].candidate;
            addUser(cand);
        }
    } else {
        console.log('ERROR: ' + jwr.statusCode);
    }
});




$('#vote').on('click', function() {

    var cand = (Math.random()<.5) ? 'trump' : 'bernie';
    io.socket.post('/vote', {candidate: cand}, function(data, jwr){
        if (jwr.statusCode == 201){
            addUser(cand);
           // console.log(data);
        } else {
            console.log('ERROR: ' + jwr.statusCode);
        }
    });
});

$('#reset').on('click', function() {
    $.ajax({
        method: 'POST',
        url: '/deleteAll',
        success: function(res) {
            console.log(res);
        }
    });

    location.reload();

});

$('#voteR').on('click', function() {
    console.log('AJAX');
    $.ajax({
        method: 'POST',
        url: '/sexy',
        error: function(a,b,msg) {
            console.log(a);
            console.log(b);
            console.log(msg);
        },
        success: function(res) {
            console.log(res);
        }
    });
});

function addUser(pres) {

    totalVotes++;

    if(pres === 'trump')
        trumpVotes++;
    else
        bernieVotes++;

    var bPer = ((bernieVotes/totalVotes) * 100).toPrecision(2), tPer = 100 - bPer;

    if(bPer > tPer) {
        if(trumpNBernie !== 2) {
            $('.blue').fireworks();
            $('.red').fireworks('destroy');

            // Pics
            $('.trump').attr('src', losingTrump);
            $('.redback').attr('src', losingTrump);
            $('.bernie').attr('src', winningBernie);
            $('.blueback').attr('src', winningBernie);
            $('.trump').fadeIn(2000);
            $('.redback').fadeIn(2000);
            $('.bernie').fadeIn(2000);
            $('.blueback').fadeIn(2000);



            trumpNBernie = 2;
        }

        if(!isPlaying($('#uAudio')[0]))
            $('#nAudio')[0].pause();
            $('#usaAudio')[0].pause();
            $('#uAudio')[0].play();
    }
    else if (tPer > bPer){

        // SET ALL TRUMP WINNING
        if(trumpNBernie !== 0) {
            $('.red').css('z-index', 1);
            $('.red').fireworks();
            $('.blue').fireworks('destroy');

            // Pics
            $('.trump').attr('src', winningTrump);
            $('.redback').attr('src', winningTrump);
            $('.bernie').attr('src', losingBernie);
            $('.blueback').attr('src', losingBernie);
            trumpNBernie = 0;
        }

        if(!isPlaying($('#nAudio')[0]))
            $('#uAudio')[0].pause();
            $('#usaAudio')[0].pause();
            $('#nAudio')[0].play();
    }
    else {
        trumpNBernie = 1;
        $('.blue').fireworks('destroy');
        $('.red').fireworks('destroy');
        $('#uAudio')[0].pause();
        $('#nAudio')[0].pause();
        $('#usaAudio')[0].play();

        // Pics
        $('.trump').attr('src', defaultTrump);
        $('.redback').attr('src', defaultTrump);
        $('.bernie').attr('src', defaultBernie);
        $('.blueback').attr('src', defaultBernie);

    }


    $('#bernie-num').text(bPer + '%');
    $('#trump-num').text(tPer + '%');


    $(function() {
        bPer = parseInt(bPer) + 2.0;
        console.log(bPer);
        $('.red').animate({
            width: tPer + "%"
        },{ duration: 200, queue: false});
        $('.blue').animate({
            width: bPer + '%'
        },{ duration: 200, queue: false});
    });
}



$(document).on('ready', function() {
   //$('#nAudio')[0].play();
   //$('#uAudio')[0].play();


});

function isPlaying(audelem) { return !audelem.paused; }