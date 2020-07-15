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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectioKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectioKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transfromedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transfromedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject)=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  }) 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;