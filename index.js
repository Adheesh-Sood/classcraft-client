import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push, set,onValue} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const firebaseConfig = {
        apiKey: "AIzaSyB54rMo9k-zgp2eRoThQxooySKsNzRonUM",
        authDomain: "classcraft-6be34.firebaseapp.com",
        projectId: "classcraft-6be34",
        databaseURL: "https://classcraft-6be34-default-rtdb.asia-southeast1.firebasedatabase.app",
        storageBucket: "classcraft-6be34.appspot.com",
        messagingSenderId: "945811480596",
        appId: "1:945811480596:web:604a3f32d46a9427f30701",
        measurementId: "G-3KM6RDH8SH"
        };

        // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
function getData(){
    const dbRef = ref(database, 'room/' + document.getElementById('classcode').value + '/data');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey);
        console.log(childData.data);
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = childData.data;
        newParagraph.style.textAlign = "center";
        document.body.appendChild(newParagraph);
        document.getElementById("classcode").style.display = "none";
        document.getElementById("go").style.display = "none";
    // ...
  });
}, {
  onlyOnce: true
});


}

document.getElementById("go").addEventListener("click", function(){
    console.log("Go button clicked");
    console.log("Class code: " + document.getElementById("classcode").value);
    getData();

});
document.getElementById("classcode").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        console.log("Enter key pressed");
        console.log("Class code: " + document.getElementById("classcode").value);
        getData();
    }
});