/**
 * Created by stokesa on 1/23/16.
 */
var totalVotes = 1, trumpVotes = 0, bernieVotes = 0;

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

});

$('#voteR').on('click', function() {
    $.ajax({
        method: 'POST',
        url: '/sexy',
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

    console.log('bernie at: ' + bPer + '%');

    $('#bernie-num').text(bPer + '%');
    $('#trump-num').text(tPer + '%');

    $('.red').css({width: tPer + "%"});
    $('.blue').css({width: bPer + "%"});


}