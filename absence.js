var request = require('ajax-request');

request({
	url: 'http://05ee2283.ngrok.io/assistances/absence',
	method: 'POST',
	data:{
		"assistance":{
			"lesson_id":9
		}
	}
}, function(err,red,body){
	console.log("Absences created");
});
