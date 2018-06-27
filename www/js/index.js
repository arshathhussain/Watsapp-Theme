
document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("e4dc73ff-94b3-48a4-8b40-491e2b4acf0d")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);
