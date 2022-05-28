(function() {
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXSgERUVBdBc_57tYO2-tZAG8mhBPvOOk",
    authDomain: "courso-ae357.firebaseapp.com",
    databaseURL: "https://courso-ae357-default-rtdb.firebaseio.com",
    projectId: "courso-ae357",
    storageBucket: "courso-ae357.appspot.com",
    messagingSenderId: "812054298960",
    appId: "1:812054298960:web:b2bb643599189abe9c6c55"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Handle on firebase db
const db = firebase.database();

  // Get elements from HTML page:
  const message = document.getElementById('message');
  const write   = document.getElementById('write');
  const read    = document.getElementById('read');
  const status  = document.getElementById('status');

  // Write to the database
  write.addEventListener('click', e => {
      const messages = db.ref('messages');

      // simple id - ok for example, do not use in production 
      const id = (new Date).getTime();

      // write to db (database)
      messages.child(id).set({'message': message.value})
          .then(function(){
              status.innerHTML = "Wrote to DB!";
          });
  });

  // read
  read.addEventListener('click', e => {
      status.innerHTML= '';
      const messages= db.ref('messages');

      // retrieve all of the messages
      messages.once('value')
         .then(function(dataSnapshot) {
             var data = dataSnapshot.val();
             var keys = object.keys(data);

             keys.forEach(function(key){
                 console.log(data[key]);
                 status.innerHTML += JSON.stringify(data[key]) + '<br>';
             });
         });
        });
}());