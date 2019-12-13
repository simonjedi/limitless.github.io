(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://www.gstatic.com/firebasejs/3.0.2/firebase.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();

_setFormData = function setFormData (sel, data) {
  console.info('setting form to data', data);
  var inputList = document.querySelectorAll(sel + ' [name]');
  [].forEach.call(inputList, function(input) {
      console.log(input);
      if (data[input.name] && data[input.name] !== "undefined") {
        input.value = data[input.name];
      }
  });
};
var _fb;
var fbToForm = function fbToForm (key, sel) {
    var config = config || {
      apiKey: "AIzaSyA8JkR_0P3dLTRijUSsXcCPQ1E8XSk9N6w",
      authDomain: "limitlessaiform.firebaseapp.com",
      databaseURL: "https://limitlessaiform.firebaseio.com",
      projectId: "limitlessaiform",
      storageBucket: "limitlessaiform.appspot.com",
      messagingSenderId: "633198110973",
      appId: "1:633198110973:web:e6da6e66627ef2f95b7694",
      measurementId: "G-QZMQRS7RTG",
    };
    _fb = _fb && _fb.name === "fbToForm" ? _fb : firebase.initializeApp(config, "fbToForm");
    _fb.database().ref('user-data/' + key).on('value', function(snapshot) {
        _setFormData(sel, snapshot.val());
    });
};
