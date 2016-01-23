var Git = require("nodegit");

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

			Git.Repository.open("/Users/Al/Documents/Hackbeanpot_16/AWSomeButton")
			  .then(getMostRecentCommit)
			  .then(getCommitMessage)
			  .then(function(message) {
			    console.log(message);
			  });

		}
	}
};




