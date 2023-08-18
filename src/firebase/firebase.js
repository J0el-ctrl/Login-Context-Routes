// importamos la funcion para inicializar la aplicacion de firebase
import { initializeApp } from "firebase/app";

//añade la credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCD7YVNr6WthsPc09UCYQ3Smzm9ntNu9vE",
  authDomain: "roleslasfitofire9.firebaseapp.com",
  projectId: "roleslasfitofire9",
  storageBucket: "roleslasfitofire9.appspot.com",
  messagingSenderId: "1090138740936",
  appId: "1:1090138740936:web:236b29b5e9c6d890a76dfd"
};

// inicializamos la aplicacion y la guardamos en firebaseApp
const dbapp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicacion 
export  {dbapp}