/**
 * Created by stokesa on 1/23/16.
 */


module.exports = {

    'default': function(req, res) {
        res.view('homepage');
    },

    //'addVote': function(req, res) {
    //    var cand = req.param('candidate');
    //
    //    console.log('Adding vote for: ' + cand);
    //
    //
    //    sails.socket.emit('vote', 'tremp');
    //    userId = 66;
    //    var voteCount = 'user_' + userId;
    //    sails.sockets.join(req.socket, voteCount);
    //    res.json({
    //        room: voteCount
    //    });
    //}


    'destroyeverything': function(req, res) {
        Vote.destroy({candidate: ['trump', 'bernie']}).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });
    }
};