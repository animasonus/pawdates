function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errormessage = error.message;

		if (errorCode == 'auth/invalid-email') {
			alert("Invalid Email.");
		} else if (errorCode == 'auth/user-disabled') {
			alert("The user corresponding to the given email has been disabled.");
		} else if (errorCode == 'auth/operation-not-allowed') {
			alert("Noah fucked up. Sorry about that.");
		} else if (errorCode == 'auth/user-not-found') {
			alert("No user is registered under this email address");
		} else if (errorCode == 'auth/wrong-password') {
			alert("Incorrect password");
		} else {
			alert(errorMessage);
		}
	});

	isUserSignedIn();
}

function signOut() {
	firebase.auth().signOut();
}

function isUserSignedIn() {
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.replace('http://pawdates.firebaseapp.com/dashboard.html');
        } else {
            window.location.replace('http://pawdates.firebaseapp.com/404.html');
        }
    });
}