import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB2fcgs-fGOQ8im9l_ZsB0jkGTvw94YDJc",
  authDomain: "login-ef81b.firebaseapp.com",
  projectId: "login-ef81b",
  storageBucket: "login-ef81b.appspot.com",
  messagingSenderId: "866890074603",
  appId: "1:866890074603:web:969f83f7b19d99d188f1ae"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;