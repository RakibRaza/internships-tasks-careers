import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgzwadlS5muQOyUeqnsiXQK8epzaAd_d0",
  authDomain: "kalpas-innovations-tasks.firebaseapp.com",
  projectId: "kalpas-innovations-tasks",
  storageBucket: "kalpas-innovations-tasks.appspot.com",
  messagingSenderId: "167783997125",
  appId: "1:167783997125:web:80ddae814953dfdb8e9aac"
})

export const db = firebase.firestore()