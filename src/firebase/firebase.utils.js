import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCP_-DWc5vuUTvF1gEQw4Y4FfNlWp-vmRA",
    authDomain: "crown-db-d7049.firebaseapp.com",
    databaseURL: "https://crown-db-d7049.firebaseio.com",
    projectId: "crown-db-d7049",
    storageBucket: "crown-db-d7049.appspot.com",
    messagingSenderId: "1014048145145",
    appId: "1:1014048145145:web:4a3dc250a11d20b4a5ec28",
    measurementId: "G-RJW9PPX8FC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;