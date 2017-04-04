function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
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
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.replace('http://pawdates.firebaseapp.com/dashboard.html');
        } else {
            window.location.replace('http://pawdates.firebaseapp.com/signin.html');
            alert("Sorry we could not log you in")
        }
    });
}

function signOut() {
	firebase.auth().signOut()
}