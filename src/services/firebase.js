import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_KgNWvmyOEoZtskmCvoTS9r40lubHEKs",
    authDomain: "chatty-app-demo.firebaseapp.com",
    databaseURL: "https://chatty-app-demo.firebaseio.com",
    projectId: "chatty-app-demo",
    storageBucket: "chatty-app-demo.appspot.com",
    messagingSenderId: "935394417001",
    appId: "1:935394417001:web:18272569fbe28f547385f8",
    measurementId: "G-6CESTEBDCW"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
