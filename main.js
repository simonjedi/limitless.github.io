// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyA8JkR_0P3dLTRijUSsXcCPQ1E8XSk9N6w",
  authDomain: "limitlessaiform.firebaseapp.com",
  databaseURL: "https://limitlessaiform.firebaseio.com",
  projectId: "limitlessaiform",
  storageBucket: "limitlessaiform.appspot.com",
  messagingSenderId: "633198110973",
  appId: "1:633198110973:web:e6da6e66627ef2f95b7694",
  measurementId: "G-QZMQRS7RTG",
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  print('working')
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
