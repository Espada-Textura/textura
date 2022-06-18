import firebase from 'firebase/compat/app'
import { firebaseConfig } from './config'

import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth'

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app, 'gs://textura-9fcd3.appspot.com')

// export const auth = firebase.auth()
// export const db = firebase.firestore
// export const functions = firebase.functions()
// export const storage = firebase.storage()
// export const fb = firebase
// export const FirebaseFieldValue = firebase.firestore.FieldValue
