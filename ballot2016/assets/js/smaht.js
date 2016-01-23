/**
 * Created by stokesa on 1/23/16.
 */
var totalVotes = 1, trumpVotes = 0, bernieVotes = 0;

io.socket.on('vote', function(msg){
    console.log('vote recieved');
    if (msg.verb == 'created'){
        console.log(msg.data);
        console.log('hi');
    }
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


function addUser(pres) {
    totalVotes++;
    if(pres === 'trump')
        trumpVotes++;
    else
        bernieVotes++;

    var bPer = bernieVotes/totalVotes, tPer = 0.99 - bPer;
    bPer *= 100;
    tPer *= 100;
    bPer = bPer.toFixed(0);
    tPer = tPer.toFixed(0);

    console.log('bernie at: ' + bPer + '%');

    $('#bernie-num').text(bPer + '%');
    $('#trump-num').text(tPer + '%');

    $('.red').css({width: tPer + "%"});
    $('.blue').css({width: bPer + "%"});


}