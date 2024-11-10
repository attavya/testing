// const firebaseConfig = {
//     apiKey: "AIzaSyCOPuAqELZ9Sljzmtet5MvvLzoRIJLM0Fg",
//     authDomain: "hvktraders-ab5ce.firebaseapp.com",
//     databaseURL: "https://hvktraders-ab5ce-default-rtdb.firebaseio.com",
//     projectId: "hvktraders-ab5ce",
//     storageBucket: "hvktraders-ab5ce.firebasestorage.app",
//     messagingSenderId: "321234813749",
//     appId: "1:321234813749:web:d685d4c1f9dcc079e0027c"
//   };


//   firebase.initializeApp(firebaseConfig);


//   var hvktradersDB =  firebase.database().ref("contactform");

//   document.getElementById('main_contact_form').addEventListener('submit',submitForm);

//   function submitForm(e){
//     e.preventDefault();

//     var name = getElementVal('name');
//     var email = getElementVal('email');
//     var subject = getElementVal('subject');
//     var message = getElementVal('message');
    

//     console.log(name, email, subject, message);
//     saveMessage(name,email,subject,message);
   
//   }


//  const saveMessage = (name,email,subject,message) => {
//     var newMessageRef = hvktradersDB.push();
//     newMessageRef.set({
//       name: name,
//       email: email,
//       subject: subject,
//       message: message
//     });
//   }



//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   } 

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyCOPuAqELZ9Sljzmtet5MvvLzoRIJLM0Fg",
  authDomain: "hvktraders-ab5ce.firebaseapp.com",
  databaseURL: "https://hvktraders-ab5ce-default-rtdb.firebaseio.com",
  projectId: "hvktraders-ab5ce",
  storageBucket: "hvktraders-ab5ce.firebasestorage.app",
  messagingSenderId: "321234813749",
  appId: "1:321234813749:web:d685d4c1f9dcc079e0027c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const contactFormDB = firebase.database().ref('contactForm');

// Get the form element
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('main_contact_form');
  const successFailInfo = document.getElementById('success_fail_info');

  if(contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();

          // Get input values
          const name = getElementVal('name');
          const email = getElementVal('email');
          const subject = getElementVal('subject');
          const message = getElementVal('message');

          // Save form data to Firebase
          saveMessages(name, email, subject, message);

          // Show success message
          successFailInfo.innerHTML = "Message sent successfully!";
          successFailInfo.style.color = "green";

          // Reset the form
          contactForm.reset();

          // Clear success message after 5 seconds
          setTimeout(() => {
              successFailInfo.innerHTML = "";
          }, 5000);
      });
  }
});

const saveMessages = (name, email, subject, message) => {
  const newContactForm = contactFormDB.push();

  newContactForm.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};