if (Meteor.isClient) {
  Template.nav.greeting = function () {
    return "Powder";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
