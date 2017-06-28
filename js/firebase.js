
(function() {
    // Inicializa o Firebase
    var config = {
        apiKey: "AIzaSyCykS91l_LvlKw6OM_b8RaINqNsWpBrG_0",
        authDomain: "ipub-26b94.firebaseapp.com",
        databaseURL: "https://ipub-26b94.firebaseio.com",
        projectId: "ipub-26b94",
        storageBucket: "ipub-26b94.appspot.com",
        messagingSenderId: "211441500554"
    };

    firebase.initializeApp(config);
    
    //Elementos do form
    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('senha');
    const btnLogin = document.getElementById('signIn');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    
    // Evento de login
    /* btnLogin.addEventListener('click', e =>{
        // Pega email e senha
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // Login
        const promise = auth.signinWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    }); */
    
    // Evento de cadastro
    btnSignUp.addEventListener('click', e =>{
         // Pega email e senha
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // Cadastro
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    // Evento de logoff
    btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();
    });
    
    // Evento de escuta em tempo real
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
        }else{
            console.log('not logged in');
        }
    });
    
}());
