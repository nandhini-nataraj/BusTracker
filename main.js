var GCM = require('gcm').GCM;

var apiKey = 'AIzaSyComu0YxAcl9Kwi_Z_219k_Xl7JKAKWdyI';
var gcm = new GCM(apiKey);

var message = {
    registration_id: 'cJVXMJiKlQ4:APA91bG0OKHM9LvtHU5XbBnQVXhsF4yePygb7ij2G76KQX5gCJNNrOSB54DZQ7ujApLZ7_3fYS81zpp9qzmnKwZXdgH_1bxtAYjK3Gmnvu-RUQsxjMp5Pkgcvb4uAvSASuBbC56UjbC_' // required
    
};


gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!"+err);
    } else {
        console.log("Sent with message ID: ", messageId);
    }
});

