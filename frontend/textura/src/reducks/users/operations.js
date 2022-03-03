import { signInAction, signOutAction } from './actions'
import { auth, db } from '@fire/index'
import { doc, getDoc } from 'firebase/firestore'
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
        auth.signOut()
        dispatch(signOutAction())
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        return sendPasswordResetEmail(auth, email)
    }
}
