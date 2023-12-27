const firebaseConfig = {
    apiKey: "AIzaSyB67dzkHAS7FZ8_UvfUY2fCX9L-Dotoiic",
    authDomain: "udyog-db.firebaseapp.com",
    databaseURL: "https://udyog-db-default-rtdb.firebaseio.com",
    projectId: "udyog-db",
    storageBucket: "udyog-db.appspot.com",
    messagingSenderId: "1026069432848",
    appId: "1:1026069432848:web:4065769c1e5caf1f0fd895",
    measurementId: "G-TKGFHJGZG9",
};

//Init Firebase app
firebase.initializeApp(firebaseConfig);

//ref to dB
var signupFormDB = firebase.database().ref("signup-form");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var firmName = getElementVal("firmName");
    var email = getElementVal("email");
    var phoneNumber = getElementVal("phoneNumber");
    var gstNumber = getElementVal("gstNumber");
    var Location = getElementVal("Location");
    var License = getElementVal("License");

    saveData(firmName, email, phoneNumber, gstNumber, Location);

    //alert;
    // document.querySelector(".alert").style.display = "block";

    // setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    // }, 3000);
    
    document.getElementById("contactForm").reset();
    
}

const saveData = (firmName, email, phoneNumber, gstNumber, Location) => {
    var newSignUp = signupFormDB.push();

    newSignUp.set({
        FirmName: firmName,
        Email: email,
        PhoneNumber: phoneNumber,
        GSTNumber: gstNumber,
        Location: Location,
        License:License
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}


