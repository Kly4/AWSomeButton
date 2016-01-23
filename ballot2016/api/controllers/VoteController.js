/**
 * Created by stokesa on 1/23/16.
 */


module.exports = {

    'default': function(req, res) {
        res.view('homepage');
    },

    'addVote': function(req, res) {
        var cand = req.param('candidate');

        console.log('Adding vote for: ' + cand);

        userId = 66;
        var voteCount = 'user_' + userId;
        sails.sockets.join(req.socket, voteCount);
        res.json({
            room: voteCount
        });
    }
};