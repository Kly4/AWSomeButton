/**
 * Created by stokesa on 1/23/16.
 */
io.socket.on('vote', function(msg){

    console.log("OMG VOTE RECIEVED");
    console.log(msg);
    //io.socket.get('/addVote', function(data, jwr){
    //    if (jwr.statusCode == 200){
    //        io.socket.on(data.room,function(obj){
    //            console.log(obj);
    //        });
    //    } else {
    //        console.log(jwr);
    //    }
    //});
});


$('#vote').on('click', function() {
    io.socket.request({
        method: 'get',
        url: '/addVote',
        params: {candidate: 'trump'}
    })
});