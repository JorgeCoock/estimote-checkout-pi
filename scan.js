var noble = require('noble');
var request = require('ajax-request');

noble.on('discover', function(peripheral) {
	        var localName = peripheral.advertisement.localName; 
		if(localName == "estimote"){
			var macAddress = peripheral.uuid;
	                var rss = peripheral.rssi;
		        console.log('found: ', macAddress, ' ', rss, ' ', localName);
			request({
				url: 'http://jsonplaceholder.typicode.com/posts',
				method: 'POST',
				data: {
					title: macAddress,
					body: 'checked',
					userId: 1
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

