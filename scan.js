var noble = require('noble');
var request = require('ajax-request');

noble.on('discover', function(peripheral) {
	        var localName = peripheral.advertisement.localName; 
		if(localName == "estimote"){
			var macAddress = peripheral.uuid;
	                var rss = peripheral.rssi;
			console.log('found: ', macAddress, ' ', rss, ' ', localName);
			request({
				url: 'http://05ee2283.ngrok.io/assistances',
				method: 'POST',
				data: {
					"assistance"=>{
						"uuid"=>macAddress,
						"lesson_id"=>9
					}
				}
			}, function(err, res, body){
				console.log(body);
			});
		}
});

noble.on('stateChange', function(state) {
	        if(state === 'poweredOn') {
			                noble.startScanning();
					        }
		        else {
				                noble.stopScanning();
						        }
});

