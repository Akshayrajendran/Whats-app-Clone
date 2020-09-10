import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_d35PRa-2tShjh-Qt_oZjzGLbjQVCNJ8",
  authDomain: "whatsapp-clone-8c318.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8c318.firebaseio.com",
  projectId: "whatsapp-clone-8c318",
  storageBucket: "whatsapp-clone-8c318.appspot.com",
  messagingSenderId: "223718186786",
  appId: "1:223718186786:web:3a48cf11530714ac874f7b",
  measurementId: "G-90BDLRFFEN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
