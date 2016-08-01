console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.pushManager.getSubscription().then(function(subscription) {      
        body: JSON.stringify(subscription)
      })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: 'favicon-196x196.png'
        });
      })
      .catch(function(err) {
        console.log('err');
        console.log(err);
      });
    )
});