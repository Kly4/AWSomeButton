var Git = require("nodegit");

var accountSid = 'ACf9716f4d14a0db58ff9f10612c316ca6'; 
var authToken = '67aedf3863bf24891b4135be4657735a'; 

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);

buttons = {

	'74:75:48:ae:04:60': {
		action: function(){
			console.log('Tide Button ACTIVATED!!!');


			// // update repo and get a list of tags
			// require('simple-git')()
			//      .log(function(err, log) {
   //  				console.log(log);
 		// 		  })

			//#####################################################################
			//git code 
			var getMostRecentCommit = function(repository) {
				return repository.getBranchCommit("master");
			};

			var getCommitMessage = function(commit) {
			  console.log("############################");
			  console.log("###### Recent Commits ######");
			  console.log("############################");
			  return commit.message();
			};



			Git.Repository.open("/Users/Al/Documents/Hackbeanpot_16/AWSomeButton")
			 .then(getMostRecentCommit)
			 .then(getCommitMessage)
			 .then(function(message) {
			   console.log(message);
			 });

			// // ######################################################################


		}
	},

	'74:c2:46:a9:6f:52': {
		action: function(){
			console.log('Finish Button ACTIVATED!!!');

			console.log("about to send a text")
			client.messages.create({
			   to: "+16038674718",
			   from: "+16172199434",
			   body: "Yo! THERE'S A PACKAGE OUTSIDE YOUR DOOR FROM UPS! OMG GO GET IT! #AWSomeButton"
			});
		}
	}
};




