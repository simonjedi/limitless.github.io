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




  var form4 = document.getElementsByName('question4');
  if(form4[0].checked)
  {
    var q4 = document.getElementById('inlineRadio1').value;
  }
  else if(form4[1].checked)
  {
    var q4 = (document.getElementById('inlineRadio2').value)
  }
  else if(form4[2].checked)
  {
    var q4 = (document.getElementById('inlineRadio3').value)
  }
  else if(form4[3].checked)
  {
    var q4 = (document.getElementById('inlineRadio4').value)
  }
  else if(form4[4].checked)
  {
    var q4 = (document.getElementById('inlineRadio5').value)
  }

  // Get values
  // var team = getInputVal('team');
  var team = getInputVal('team');
  var email = getInputVal('email');
  var tel = getInputVal('tel');
  var question1 = getInputVal('inputGroupSelect01');
  var question2 = getInputVal('inputGroupSelect02');
  var question3 = getInputVal('inputGroupSelect03');
  var question4 = q4;


  // Save message
  saveMessage( team, email, tel, question1,question2,question3,question4);

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
function saveMessage( team, email, tel, question1,question2,question3,question4){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({

    team:team,
    email:email,
    tel:tel,
    question1:question1,
    question2:question2,
    question3:question3,
    question4:question4,



  });
}
