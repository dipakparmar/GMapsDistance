exports.install = function() {
  F.route("/", view_index);
  F.route("/Home", view_index);
  F.route("/About", view_about);
  F.route("*", view_404);
  // or
  // F.route('/');
};

function view_index() {
  var self = this;
  var googleMapsClient = require("@google/maps").createClient({
	key: "AIzaSyBtJwkJTyhLpEVnDGZ28MEQ1GeiqYb215k",
	Promise: Promise
  });
  
  self.view("index");
}

function view_about() {
  this.view("about");
}

function view_404() {
  this.view("error404");
}
