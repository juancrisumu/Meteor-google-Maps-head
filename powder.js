if (Meteor.isClient) {
  Template.nav.greeting = function () {
    return "Welcome to Powder";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
