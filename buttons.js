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

			//################################################
			//########### Commit and Push Code ###############
			//################################################



			// var oid = Commit.create(repo, update_ref, author, committer, message_encoding, message, tree, parent_count, parents);

			// Git.Repository.open("/Users/Al/Documents/Hackbeanpot_16/AWSomeButton")
			//  .then(getMostRecentCommit)
			//  .then(getCommitMessage)

			// //  .then(function(oidResult) {
			// //   oid = oidResult;
			// //   return nodegit.Reference.nameToId(repo, "HEAD");
			// // })
			// // .then(function(head) {
			// //   return repo.getCommit(head);
			// // })
			// // .then(function(parent) {
			// //   var author = nodegit.Signature.create("Alexey",
			// //     "kly4@ymail.com");
			// //   var committer = nodegit.Signature.create("Kly4",
			// //     "kly4@ymail");

			// //   return repo.createCommit("HEAD", author, committer, "message", oid, [parent]);
			// // })
			// // .done(function(commitId) {
			// //   console.log("New Commit: ", commitId);
			// // })


			//  .then(function(message) {
			//    console.log(message);
			//  });




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




