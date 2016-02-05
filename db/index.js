var Firebase = require('firebase');

var data = new Firebase('https://g7qywdsyig0.firebaseio-demo.com/tweets');

function add(name, text) {
  var tweet = { name: name, text: text, date: Firebase.ServerValue.TIMESTAMP };
  data.push(tweet);
  return tweet;
}

function list() {
  var returnList = [];
  data.orderByChild("date").on("value", function(snapshot) {
    snapshot.forEach(function(data) {
        returnList.push(data.val());
    });
  });
  return returnList;
}

function find(key, value) {
  var returnList = [];
  data.orderByChild(key).equalTo(value).on("value", function(snapshot) {
    snapshot.forEach(function(data) {
        returnList.push(data.val());
    });
  });
  return returnList;
}
                                                  
module.exports = { add: add, list: list, find: find };
