import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrJeivJrSNby0a7zGIUPP1ERWcoi8fFl4",
    authDomain: "essentiel-bio.firebaseapp.com",
    databaseURL: "https://essentiel-bio.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
