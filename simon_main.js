// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyA8JkR_0P3dLTRijUSsXcCPQ1E8XSk9N6w",
  authDomain: "limitlessaiform.firebaseapp.com",
  databaseURL: "https://limitlessaiform.firebaseio.com",
  projectId: "limitlessaiform",
  storageBucket: "limitlessaiform.appspot.com",
  messagingSenderId: "633198110973"



    // apiKey: "AIzaSyA8JkR_0P3dLTRijUSsXcCPQ1E8XSk9N6w",
    //   authDomain: "limitlessaiform.firebaseapp.com",
    //   databaseURL: "https://limitlessaiform.firebaseio.com",
    //   projectId: "limitlessaiform",
    //   storageBucket: "limitlessaiform.appspot.com",
    //   messagingSenderId: "633198110973",
    //   appId: "1:633198110973:web:e6da6e66627ef2f95b7694",
    //   measurementId: "G-QZMQRS7RTG"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  // var team = getInputVal('team');
  var team = getInputVal('team');
  var email = getInputVal('email');
  var tel = getInputVal('tel');
  var result = getInputVal('inputGroupSelect03');

  // Save message
  saveMessage( team, email, tel, result);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage( team, email, tel, result){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({

    team:team,
    email:email,
    tel:tel,
    q1_result:result
  });
}
