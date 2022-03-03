import { signInAction } from './actions'
import { auth, db } from '@fire/index'
import { doc, getDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const signIn = (data) => {
    return async (dispatch, getState) => {
        return signInWithEmailAndPassword(auth, data.email, data.password)
        // .then((resp) => {
        //     const userState = resp.user
        //     getDoc(doc(db, 'users', userState.uid)).then((userRespData) => {
        //         if (userRespData.exists()) {
        //             let user = userRespData.data()
        //             user.uid = userState.uid
        //             user.isSignedIn = true

        //             dispatch(signInAction(user))
        //         } else {
        //             console.log('Failed to get user data by UID')
        //         }
        //     })
        // })
        // .catch(() => {
        //     throw new Error('ユーザーIDを取得できません')
        // })
    }
}

export const getCurrentUser = (uid) => {
    return async (dispatch, getState) => {
        return getDoc(doc(db, 'users', uid))
        // .then((userRespData) => {
        //     if (userRespData.exists()) {
        //         let user = userRespData.data()
        //         user.uid = uid
        //         user.isSignedIn = true

        //         dispatch(signInAction(user))
        //     }
        // })
    }
}

export const signUp = (data) => {
    return async (dispatch, getState) => {
        console.log('in sign up')
        // const state = getState()
        // dispatch(signInAction({}))
    }
}
