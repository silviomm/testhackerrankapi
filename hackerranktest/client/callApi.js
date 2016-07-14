if(Meteor.isClient){

	Template.callApi.events({

		"submit form" : function(e){
			e.preventDefault();

			var source = $("#source").val();
			var lang = $("#lang").val();
			var testcases = $("#testcases").val();

			var postData = {
				"source" : source,
				"lang" : lang,
				"testcases" : testcases,
			}

			Meteor.call("callApi", postData, function(error, resp){
				if(error){
					console.log(error);
				}
				else{
					var div = $("#result");
					console.log(resp);
					div.append(JSON.stringify(resp)+"<br><br><br>");
				}
			});
		}
	});
}