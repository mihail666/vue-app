import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAu-Y2wI5HZ3uZhZLCi0_8cCyXJ4v0ZITQ',
  authDomain: 'tt-vueapp.firebaseapp.com',
  databaseURL: 'https://tt-vueapp-default-rtdb.firebaseio.com',
  projectId: 'tt-vueapp',
  storageBucket: 'tt-vueapp.appspot.com',
  messagingSenderId: '566794186677',
  appId: '1:566794186677:web:8db0a626ea13edacd7b3fc',
  measurementId: 'G-ZQ1BWNL5Q5'
}

initializeApp(firebaseConfig)

const auth = getAuth()

export default auth
