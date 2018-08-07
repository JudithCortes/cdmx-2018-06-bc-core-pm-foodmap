
window.ecole = {
  //Initialize Firebase
  firebase: () => {
    //Apis firebase
    var config = {
    apiKey: "AIzaSyCAj_2KJ9ReHQ9xzhkRrJzpTZ7E9bJT0BY",
    authDomain: "ecolecua-2c491.firebaseapp.com",
    databaseURL: "https://ecolecua-2c491.firebaseio.com",
    projectId: "ecolecua-2c491",
    storageBucket: "",
    messagingSenderId: "457347791576"
  }
   //Agregando apis a configuracion incial
    firebase.initializeApp(config);
},

  //Registro de nuevo usuario mail
  newUser: (emailSignUp, passwordSignUp) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
      .then(result => {
        const user = firebase.auth().currentUser;
        alert('Bienvenido a ecole cuà');
        location.href = ('../views/mapa.html');
      })
      .catch (e => alert(e.message))
  },

  //Login con mail
  loginWithEmail: (emailLogin, passLogin) => {
    if(emailLogin != '' && passLogin != '') {
      firebase.auth().signInWithEmailAndPassword(emailLogin, passLogin)
        .then(result => {
          location.href = ('../views/mapa.html');
        })
        .catch (e => alert(e.message));
    } else {
      alert('Ingresa tu correo y contraseña para continuar');
    }
  },

  //Login con Google
  loginWithGoogle: () => {
    //Pasa a la autenticacion de firebase primero validando si ya existe un usuario
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ("../views/mapa.html");
      })
      .catch (e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

  //Cerrar sesión
  signOut: () => {
    firebase.auth().signOut()
      .then(result => {
        alert('Gracias por usar ecole cuà')
        location.href = ('../views/login.html');
      })
      .catch (e => alert(e.message));
  }
};
