var unirest = require('unirest');
Future = require('fibers/future');



Meteor.methods({

	callApi : function(data){

		var future = new Future();

		var req = unirest("POST", "http://api.hackerrank.com/checker/submission.json");

		req.headers({
		  "content-type": "application/x-www-form-urlencoded",
		  "cache-control": "no-cache"
		});

		req.form({
		  "source": data.source,
		  "lang": data.lang,
		  "testcases": data.testcases,
		  "api_key": "hackerrank|1374974-864|94a5759112ba34aa66d29cb475fb36b90004b380"
		});

		req.end(function (res) {
			if (res.error){ 
				throw new Error(res.error);
			}
			console.log(res.body);
			future["return"](res.body);
		});
		return future.wait();
	}
});