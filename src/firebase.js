// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase"

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAz3IdA_s2v7B_e1rFryAjrMjLvz5o6ZDk",
    authDomain: "todo-app-860ee.firebaseapp.com",
    projectId: "todo-app-860ee",
    storageBucket: "todo-app-860ee.appspot.com",
    messagingSenderId: "370016965996",
    appId: "1:370016965996:web:a7223f6d6c0bb308e14f49",
    measurementId: "G-J7NTS77R8B"
  });

  const db = firebaseApp.firestore();

  export default db;