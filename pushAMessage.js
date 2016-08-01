var gcm = require('gcm-send');

var apiKey = 'AIzaSyComu0YxAcl9Kwi_Z_219k_Xl7JKAKWdyI';



var gcm = require('node-gcm');
 
var message = new gcm.Message({
    data: {
		title: 'aaaaaaaaaaaaaaaa',
		body: 'bbbbbbbbbbbbb' },
	notification: {
        title: "Hello, World",        
        body: "This is a notification that will be displayed ASAP."
    }
	
});
 
// Set up the sender with you API key, prepare your recipients' registration tokens. 
var sender = new gcm.Sender(apiKey);
var regTokens = [];
regTokens.push('cuxNgncQmQ4:APA91bHRWKO9MEJEdQ_iZBWkRDdaRV0X5iE4d-d6eJPz3mPUcbHdRw6a8bE6fVDSmODv7Jrxvo3Kcw1bdl64uT02_E9YOYHC48v9F__3-TUlLMxNHVR_Zio9_CXFKa6XzxFXGV-rZavs');

sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if(err) console.error(err);
    else 	console.log(response);
});


