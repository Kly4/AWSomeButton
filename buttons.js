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

			var xmlhttp;

			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
					if(xmlhttp.status == 200){
						console.log('RETURNED NIGGA');
						//document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
					}
					else if(xmlhttp.status == 400) {
						alert('There was an error 400')
					}
					else {
						alert('something else other than 200 was returned')
					}
				}
			};

			xmlhttp.open("POST", "http://localhost:1337/vote", true);
			xmlhttp.send();


		}
	}
};




