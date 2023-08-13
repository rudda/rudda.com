import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB5gfJDFKqIKia0RCMoOSl1LQGax556to8",
    authDomain: "ruddabeltrao-com.firebaseapp.com",
    projectId: "ruddabeltrao-com",
    storageBucket: "ruddabeltrao-com.appspot.com",
    messagingSenderId: "283461034423",
    appId: "1:283461034423:web:775c40a34f215264f14832",
    measurementId: "G-X27HS9QYZN"
}

// Inicialize o Firebase
const App = initializeApp(firebaseConfig);


export default App;
