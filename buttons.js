var Git = require("nodegit");

var accountSid = 'ACf9716f4d14a0db58ff9f10612c316ca6'; 
var authToken = '67aedf3863bf24891b4135be4657735a'; 

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);


buttons = {

	'74:75:48:ae:04:60': {
		action: function(){
			console.log('Tide Button ACTIVATED!!!');


			//git code 
			var getMostRecentCommit = function(repository) {
				return repository.getBranchCommit("master");
			};

			var getCommitMessage = function(commit) {

			  console.log("######Recent Commits######");
			  return commit.message();
			};

			//Git.Repository.open("/Users/Al/Documents/Hackbeanpot_16/AWSomeButton")
			//  .then(getMostRecentCommit)
			//  .then(getCommitMessage)
			//  .then(function(message) {
			//    console.log(message);
			//  });

			//######################################################################
			//console.log("about to send a text")
			//client.messages.create({
			//    to: "+16037141791",
			//    from: "+16172199434",
			//    body: "Fuck you!"
			//},
			//function(err, message) {
			//	console.log(err);
    			//console.log(message);
			//});

			var request = require('request');

			request.post(
				'http://localhost:1337/sexy',
				{ form: { candidate: 'swag' } },
				function (error, response, body) {
					if (!error && response.statusCode == 200) {
						console.log(body)
					}
				}
			);
			//var xmlhttp = require('http');
			//xmlhttp.request({
			//	host: 'localhost',
			//	method: 'GET',
			//	port: 1337,
			//	path: '/sexy'
			//}, function(res) {
			//	console.log(res);
			//});

		}
	}
};




