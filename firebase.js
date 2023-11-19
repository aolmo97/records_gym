// Importa las funciones específicas que necesitas de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3Sky6JC3wvwMOtBZVq0kriDn-yahQGPI",
  authDomain: "records-gym.firebaseapp.com",
  projectId: "records-gym",
  storageBucket: "records-gym.appspot.com",
  messagingSenderId: "475219948832",
  appId: "1:475219948832:web:2cca9778dc243291951345",
  measurementId: "G-90TH94RHLY"
};  


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };
