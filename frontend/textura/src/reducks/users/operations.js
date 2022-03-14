import { signInAction, signOutAction } from './actions'
import { app, db, storage, auth } from '@fire/index'
import { doc, getDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'

export const signIn = (data) => {
    return async (dispatch, getState) => {
        return signInWithEmailAndPassword(auth, data.email, data.password)
    }
}

export const getCurrentUser = (uid) => {
    return async (dispatch, getState) => {
        return getDoc(doc(db, 'users', uid))
    }
}

export const signUp = (data) => {
    return async (dispatch, getState) => {}
}

export const signOut = () => {
    return (dispatch) => {
        // Clear current user from state
        auth.signOut()

        // Clear current user from cookie
        let dateNow = new Date()
        document.cookie = `currentUser=;expires=${dateNow.toGMTString()}';`
        dispatch(signOutAction())
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        return sendPasswordResetEmail(auth, email)
    }
}

export const editAvatar = (file) => {
    return async (dispatch, getState) => {
        let user = getState().users
        const storageRef = ref(storage, `users/${user.uid}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        // uploadTask.then((snapshot) => {
        //     let artsRef = collection(db, 'arts')
        //     const pathReference = ref(storage, snapshot.metadata.fullPath)
        //     getDownloadURL(pathReference).then((url) => {
        //         console.log(url)
        //     })
        // })
        const pathReference = ref(
            storage,
            'gs://textura-9fcd3.appspot.com/Users/Tnpq6yWFJwbMkTQyxgCxbYmLscb2.jpg'
        )
        getDownloadURL(pathReference).then((url) => {
            console.log(url)
        })

        return false
    }
}
