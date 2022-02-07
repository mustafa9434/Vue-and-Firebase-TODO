import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCeaZJCH9XYCYOHSw889oSnGjOBfmIoNdM",
  authDomain: "vue-todo-fe90e.firebaseapp.com",
  databaseURL: "https://vue-todo-fe90e.firebaseio.com",
  projectId: "vue-todo-fe90e",
  storageBucket: "vue-todo-fe90e.appspot.com",
  messagingSenderId: "71942162034",
  appId: "1:71942162034:web:258fd13e00edfdb1e924eb",
  measurementId: "G-QBT28N2385"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  el: '#app',
  render: h => h(App)
})
