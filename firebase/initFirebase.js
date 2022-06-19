// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa7tsBW_7UVkwIT_u4Izr5TuJGxjxlujA',
  authDomain: 'homenomics-a7d72.firebaseapp.com',
  projectId: 'homenomics-a7d72',
  storageBucket: 'homenomics-a7d72.appspot.com',
  messagingSenderId: '577257313857',
  appId: '1:577257313857:web:8c164fd35b68783be098c0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

export { app, db }

// TDD - Tests Driven Development << Desenvolvimento Dirigido a Testes ou seja, você testa primeiro, e depois faz funcionar
