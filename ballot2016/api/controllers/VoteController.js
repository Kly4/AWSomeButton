/**
 * Created by stokesa on 1/23/16.
 */


module.exports = {

    'vote': function(req, res) {
        var cand = req.param('candidate');

        console.log('Adding vote for: ' + cand);



    }
};