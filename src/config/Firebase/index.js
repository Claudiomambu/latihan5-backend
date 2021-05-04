import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuIqsOS2T6iHRcpqKkZFYaZ5K8VY_chuA",
  authDomain: "web-pro-90158.firebaseapp.com",
  databaseURL: "https://web-pro-90158-default-rtdb.firebaseio.com",
  projectId: "web-pro-90158",
  storageBucket: "web-pro-90158.appspot.com",
  messagingSenderId: "565757172626",
  appId: "1:565757172626:web:d8eedf454d1bdbe6bc3f4b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
