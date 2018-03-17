import Rebase from "re-base"; //react-firebase package

import firebase from "firebase";


//create firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGhRSIEN3qSck624eB6ls-MQtamaSv-oI",
  authDomain: "catch-of-the-day-james.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-james.firebaseio.com"
});

//rebase bindsings
const base = Rebase.createClass(firebaseApp.database());

//named export 
export {firebaseApp};


//main default export
export default base;