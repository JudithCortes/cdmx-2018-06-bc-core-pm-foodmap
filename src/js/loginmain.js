//Agregando configuracion de firebase en js actual


const btnSignUp = document.getElementById("btnSignUp");
//Evento registro nuevo usuario con correo y contraseña
btnSignUp.addEventListener('click', e => {
  const emailSignUp = document.getElementById('txtEmailLogin').value;
  const passwordSignUp = document.getElementById('txtPasswordLogin').value;
  //Envia parametros a funcion de registro
  window.ecole.newUser(emailSignUp, passwordSignUp);
});
const btnLogin = document.getElementById("btnLogin");
//Evento login con correo y contraseña
btnLogin.addEventListener('click', e => {
  const emailLogin = document.getElementById('txtEmailLogin').value;
  const passLogin = document.getElementById('txtPasswordLogin').value;
  //Envia parametros a funcion de logeo
  window.ecole.loginWithEmail(emailLogin, passLogin);
});

const btnLoginGoogle = document.getElementById("btnLoginGoogle");
//Evento login con Google
btnLoginGoogle.addEventListener('click', e => {
  window.ecole.loginWithGoogle();
});

//Evento SignUp Google
//btnSignUpGoogle.addEventListener('click', e => {
  //window.ecole.loginWithGoogle();
//});

