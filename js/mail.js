const firebaseConfig = {
    apiKey: "AIzaSyCOPuAqELZ9Sljzmtet5MvvLzoRIJLM0Fg",
    authDomain: "hvktraders-ab5ce.firebaseapp.com",
    databaseURL: "https://hvktraders-ab5ce-default-rtdb.firebaseio.com",
    projectId: "hvktraders-ab5ce",
    storageBucket: "hvktraders-ab5ce.firebasestorage.app",
    messagingSenderId: "321234813749",
    appId: "1:321234813749:web:d685d4c1f9dcc079e0027c"
  };


  firebase.initializeApp(firebaseConfig);


  var hvktradersDB =  firebase.database().ref("contactform");

  document.getElementById('main_contact_form').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');
    

    console.log(name, email, subject, message);
    saveMessage(name,email,subject,message);
   
  }


 const saveMessage = (name,email,subject,message) => {
    var newMessageRef = hvktradersDB.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: subject,
      message: message
    });
  }



  const getElementVal = (id) => {
    return document.getElementById(id).value;
  } 