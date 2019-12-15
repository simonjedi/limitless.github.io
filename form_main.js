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


  var form5 = document.getElementsByName('question5');
  if(form5[0].checked)
  {
    var q5 = document.getElementById('inlineRadio1').value;
  }
  else if(form5[1].checked)
  {
    var q5 = (document.getElementById('inlineRadio2').value)
  }
  else if(form5[2].checked)
  {
    var q5 = (document.getElementById('inlineRadio3').value)
  }
  else if(form5[3].checked)
  {
    var q5 = (document.getElementById('inlineRadio4').value)
  }
  else if(form5[4].checked)
  {
    var q5 = (document.getElementById('inlineRadio5').value)
  }


  var form6 = document.getElementsByName('question6');
  if(form6[0].checked)
  {
    var q6 = document.getElementById('inlineRadio1').value;
  }
  else if(form6[1].checked)
  {
    var q6 = (document.getElementById('inlineRadio2').value)
  }
  else if(form6[2].checked)
  {
    var q6 = (document.getElementById('inlineRadio3').value)
  }
  else if(form6[3].checked)
  {
    var q6 = (document.getElementById('inlineRadio4').value)
  }
  else if(form6[4].checked)
  {
    var q6 = (document.getElementById('inlineRadio5').value)
  }

  var form7 = document.getElementsByName('question7');
  if(form7[0].checked)
  {
    var q7 = document.getElementById('inlineRadio1').value;
  }
  else if(form7[1].checked)
  {
    var q7 = (document.getElementById('inlineRadio2').value)
  }
  else if(form7[2].checked)
  {
    var q7 = (document.getElementById('inlineRadio3').value)
  }
  else if(form7[3].checked)
  {
    var q7 = (document.getElementById('inlineRadio4').value)
  }
  else if(form7[4].checked)
  {
    var q7 = (document.getElementById('inlineRadio5').value)
  }

  var form8 = document.getElementsByName('question8');
  if(form8[0].checked)
  {
    var q8 = document.getElementById('inlineRadio1').value;
  }
  else if(form8[1].checked)
  {
    var q8 = (document.getElementById('inlineRadio2').value)
  }
  else if(form8[2].checked)
  {
    var q8 = (document.getElementById('inlineRadio3').value)
  }
  else if(form8[3].checked)
  {
    var q8 = (document.getElementById('inlineRadio4').value)
  }
  else if(form8[4].checked)
  {
    var q8 = (document.getElementById('inlineRadio5').value)
  }

  var form9 = document.getElementsByName('question9');
  if(form9[0].checked)
  {
    var q9 = document.getElementById('inlineRadio1').value;
  }
  else if(form9[1].checked)
  {
    var q9 = (document.getElementById('inlineRadio2').value)
  }
  else if(form9[2].checked)
  {
    var q9 = (document.getElementById('inlineRadio3').value)
  }
  else if(form9[3].checked)
  {
    var q9 = (document.getElementById('inlineRadio4').value)
  }
  else if(form9[4].checked)
  {
    var q9 = (document.getElementById('inlineRadio5').value)
  }

  var form10 = document.getElementsByName('question10');
  if(form10[0].checked)
  {
    var q10 = document.getElementById('inlineRadio1').value;
  }
  else if(form10[1].checked)
  {
    var q10 = (document.getElementById('inlineRadio2').value)
  }
  else if(form10[2].checked)
  {
    var q10 = (document.getElementById('inlineRadio3').value)
  }
  else if(form10[3].checked)
  {
    var q10 = (document.getElementById('inlineRadio4').value)
  }
  else if(form10[4].checked)
  {
    var q10 = (document.getElementById('inlineRadio5').value)
  }

  var form11 = document.getElementsByName('question11');
  if(form11[0].checked)
  {
    var q11 = document.getElementById('inlineRadio1').value;
  }
  else if(form11[1].checked)
  {
    var q11 = (document.getElementById('inlineRadio2').value)
  }
  else if(form11[2].checked)
  {
    var q11 = (document.getElementById('inlineRadio3').value)
  }
  else if(form11[3].checked)
  {
    var q11 = (document.getElementById('inlineRadio4').value)
  }
  else if(form11[4].checked)
  {
    var q11 = (document.getElementById('inlineRadio5').value)
  }

  var form12 = document.getElementsByName('question12');
  if(form12[0].checked)
  {
    var q12 = document.getElementById('inlineRadio1').value;
  }
  else if(form12[1].checked)
  {
    var q12 = (document.getElementById('inlineRadio2').value)
  }
  else if(form12[2].checked)
  {
    var q12 = (document.getElementById('inlineRadio3').value)
  }
  else if(form12[3].checked)
  {
    var q12 = (document.getElementById('inlineRadio4').value)
  }
  else if(form12[4].checked)
  {
    var q12 = (document.getElementById('inlineRadio5').value)
  }

  var form13 = document.getElementsByName('question13');
  if(form13[0].checked)
  {
    var q13 = document.getElementById('inlineRadio1').value;
  }
  else if(form13[1].checked)
  {
    var q13 = (document.getElementById('inlineRadio2').value)
  }
  else if(form13[2].checked)
  {
    var q13 = (document.getElementById('inlineRadio3').value)
  }
  else if(form13[3].checked)
  {
    var q13 = (document.getElementById('inlineRadio4').value)
  }
  else if(form13[4].checked)
  {
    var q13 = (document.getElementById('inlineRadio5').value)
  }

  var form14 = document.getElementsByName('question14');
  if(form14[0].checked)
  {
    var q14 = document.getElementById('inlineRadio1').value;
  }
  else if(form14[1].checked)
  {
    var q14 = (document.getElementById('inlineRadio2').value)
  }
  else if(form14[2].checked)
  {
    var q14 = (document.getElementById('inlineRadio3').value)
  }
  else if(form14[3].checked)
  {
    var q14 = (document.getElementById('inlineRadio4').value)
  }
  else if(form14[4].checked)
  {
    var q14 = (document.getElementById('inlineRadio5').value)
  }

  var form15 = document.getElementsByName('question15');
  if(form15[0].checked)
  {
    var q15 = document.getElementById('inlineRadio1').value;
  }
  else if(form15[1].checked)
  {
    var q15 = (document.getElementById('inlineRadio2').value)
  }
  else if(form15[2].checked)
  {
    var q15 = (document.getElementById('inlineRadio3').value)
  }
  else if(form15[3].checked)
  {
    var q15 = (document.getElementById('inlineRadio4').value)
  }
  else if(form15[4].checked)
  {
    var q15 = (document.getElementById('inlineRadio5').value)
  }

  var form16 = document.getElementsByName('question16');
  if(form16[0].checked)
  {
    var q16 = document.getElementById('inlineRadio1').value;
  }
  else if(form16[1].checked)
  {
    var q16 = (document.getElementById('inlineRadio2').value)
  }
  else if(form16[2].checked)
  {
    var q16 = (document.getElementById('inlineRadio3').value)
  }
  else if(form16[3].checked)
  {
    var q16 = (document.getElementById('inlineRadio4').value)
  }
  else if(form16[4].checked)
  {
    var q16 = (document.getElementById('inlineRadio5').value)
  }

  var form17 = document.getElementsByName('question17');
  if(form17[0].checked)
  {
    var q17 = document.getElementById('inlineRadio1').value;
  }
  else if(form17[1].checked)
  {
    var q17 = (document.getElementById('inlineRadio2').value)
  }
  else if(form17[2].checked)
  {
    var q17 = (document.getElementById('inlineRadio3').value)
  }
  else if(form17[3].checked)
  {
    var q17 = (document.getElementById('inlineRadio4').value)
  }
  else if(form17[4].checked)
  {
    var q17 = (document.getElementById('inlineRadio5').value)
  }

  var form18 = document.getElementsByName('question18');
  if(form18[0].checked)
  {
    var q18 = document.getElementById('inlineRadio1').value;
  }
  else if(form18[1].checked)
  {
    var q18 = (document.getElementById('inlineRadio2').value)
  }
  else if(form18[2].checked)
  {
    var q18 = (document.getElementById('inlineRadio3').value)
  }
  else if(form18[3].checked)
  {
    var q18 = (document.getElementById('inlineRadio4').value)
  }
  else if(form18[4].checked)
  {
    var q18 = (document.getElementById('inlineRadio5').value)
  }

  var form19 = document.getElementsByName('question19');
  if(form19[0].checked)
  {
    var q19 = document.getElementById('inlineRadio1').value;
  }
  else if(form19[1].checked)
  {
    var q19 = (document.getElementById('inlineRadio2').value)
  }
  else if(form19[2].checked)
  {
    var q19 = (document.getElementById('inlineRadio3').value)
  }
  else if(form19[3].checked)
  {
    var q19 = (document.getElementById('inlineRadio4').value)
  }
  else if(form19[4].checked)
  {
    var q19 = (document.getElementById('inlineRadio5').value)
  }

  var form20 = document.getElementsByName('question20');
  if(form20[0].checked)
  {
    var q20 = document.getElementById('inlineRadio1').value;
  }
  else if(form20[1].checked)
  {
    var q20 = (document.getElementById('inlineRadio2').value)
  }
  else if(form20[2].checked)
  {
    var q20 = (document.getElementById('inlineRadio3').value)
  }
  else if(form20[3].checked)
  {
    var q20 = (document.getElementById('inlineRadio4').value)
  }
  else if(form20[4].checked)
  {
    var q20 = (document.getElementById('inlineRadio5').value)
  }

  var form21 = document.getElementsByName('question21');
  if(form21[0].checked)
  {
    var q21 = document.getElementById('inlineRadio1').value;
  }
  else if(form21[1].checked)
  {
    var q21 = (document.getElementById('inlineRadio2').value)
  }
  else if(form21[2].checked)
  {
    var q21 = (document.getElementById('inlineRadio3').value)
  }
  else if(form21[3].checked)
  {
    var q21 = (document.getElementById('inlineRadio4').value)
  }
  else if(form21[4].checked)
  {
    var q21 = (document.getElementById('inlineRadio5').value)
  }

  var form22 = document.getElementsByName('question22');
  if(form22[0].checked)
  {
    var q22 = document.getElementById('inlineRadio1').value;
  }
  else if(form22[1].checked)
  {
    var q22 = (document.getElementById('inlineRadio2').value)
  }
  else if(form22[2].checked)
  {
    var q22 = (document.getElementById('inlineRadio3').value)
  }
  else if(form22[3].checked)
  {
    var q22 = (document.getElementById('inlineRadio4').value)
  }
  else if(form22[4].checked)
  {
    var q22 = (document.getElementById('inlineRadio5').value)
  }

  var form23 = document.getElementsByName('question23');
  if(form23[0].checked)
  {
    var q23 = document.getElementById('inlineRadio1').value;
  }
  else if(form23[1].checked)
  {
    var q23 = (document.getElementById('inlineRadio2').value)
  }
  else if(form23[2].checked)
  {
    var q23 = (document.getElementById('inlineRadio3').value)
  }
  else if(form23[3].checked)
  {
    var q23 = (document.getElementById('inlineRadio4').value)
  }
  else if(form23[4].checked)
  {
    var q23 = (document.getElementById('inlineRadio5').value)
  }

  var form24 = document.getElementsByName('question24');
  if(form24[0].checked)
  {
    var q24 = document.getElementById('inlineRadio1').value;
  }
  else if(form24[1].checked)
  {
    var q24 = (document.getElementById('inlineRadio2').value)
  }
  else if(form24[2].checked)
  {
    var q24 = (document.getElementById('inlineRadio3').value)
  }
  else if(form24[3].checked)
  {
    var q24 = (document.getElementById('inlineRadio4').value)
  }
  else if(form24[4].checked)
  {
    var q24 = (document.getElementById('inlineRadio5').value)
  }

  var form25 = document.getElementsByName('question25');
  if(form25[0].checked)
  {
    var q25 = document.getElementById('inlineRadio1').value;
  }
  else if(form25[1].checked)
  {
    var q25 = (document.getElementById('inlineRadio2').value)
  }
  else if(form25[2].checked)
  {
    var q25 = (document.getElementById('inlineRadio3').value)
  }
  else if(form25[3].checked)
  {
    var q25 = (document.getElementById('inlineRadio4').value)
  }
  else if(form25[4].checked)
  {
    var q25 = (document.getElementById('inlineRadio5').value)
  }
  // Get values
  //
  var team = getInputVal('team');
  var name = getInputVal('name');
  var email = getInputVal('email');
  var tel = getInputVal('tel');
  var question1 = getInputVal('inputGroupSelect01');
  var question2 = getInputVal('inputGroupSelect02');
  var question3 = getInputVal('inputGroupSelect03');
  var question4 = q4;
  var question5 = q5;
  var question6 = q6;
  var question7 = q7;
  var question8 = q8;
  var question9 = q9;
  var question10 = q10;
  var question11 = q11;
  var question12 = q12;
  var question13 = q13;
  var question14 = q14;
  var question15 = q15;
  var question16 = q16;
  var question17 = q17;
  var question18 = q18;
  var question19 = q19;
  var question20 = q20;
  var question21 = q21;
  var question22 = q22;
  var question23 = q23;
  var question24 = q24;
  var question25 = q25;
  var feedback = getInputVal('feedback');
  var agree = getInputVal('agree');





  // Save message
  saveMessage( name, team, email, tel, question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,
  question13,question14,question15,question16,question17,question18,question19,question20,question21,question22,question23,question24,question25,feedback,agree);

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
function saveMessage( name, team, email, tel, question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,
question13,question14,question15,question16,question17,question18,question19,question20,question21,question22,question23,question24,question25,feedback,agree){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({

    name:name,
    team:team,
    email:email,
    tel:tel,
    question1:question1,
    question2:question2,
    question3:question3,
    question4:question4,
    question5:question5,
    question6:question6,
    question7:question7,
    question8:question8,
    question9:question9,
    question10:question10,
    question11:question11,
    question12:question12,
    question13:question13,
    question14:question14,
    question15:question15,
    question16:question16,
    question17:question17,
    question18:question18,
    question19:question19,
    question20:question20,
    question21:question21,
    question22:question22,
    question23:question23,
    question24:question24,
    question25:question25,
    feedback:feedback,
    agree:agree,



  });
}
