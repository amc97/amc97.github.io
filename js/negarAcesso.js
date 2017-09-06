var auth = firebase.auth();

auth.onAuthStateChanged(function (login) {
    if (!login) {
      location.assign('login.html');
    }
});
