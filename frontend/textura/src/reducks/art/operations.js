import { getArtsAction } from './actions'
import { auth, db } from '@fire/index'
import { collection, query, where, getDocs } from 'firebase/firestore'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'

export const getArts = () => {
    return async (dispatch, getState) => {
        let artsRef = collection(db, 'arts')
        let artsResp = []
        getDocs(artsRef).then((querySnapshot) => {
            querySnapshot.forEach((resp) => {
                let art = resp.data()
                art.id = resp.id
                if (art)
                    for (let index = 0; index < 25; index++) {
                        artsResp.push(art)
                    }
            })
            dispatch(getArtsAction(artsResp))
        })

        // const q = query(citiesRef, where("state", "==", "CA"));
    }
}

// export const getCurrentUser = (uid) => {
//     return async (dispatch, getState) => {
//         return getDoc(doc(db, 'users', uid))
//     }
// }

// export const signUp = (data) => {
//     return async (dispatch, getState) => {}
// }

// export const signOut = () => {
//     return (dispatch) => {
//         // Clear current user from state
//         auth.signOut()

//         // Clear current user from cookie
//         let dateNow = new Date()
//         document.cookie = `currentUser=;expires=${dateNow.toGMTString()}';`
//         dispatch(signOutAction())
//     }
// }

// export const resetPassword = (email) => {
//     return async (dispatch) => {
//         return sendPasswordResetEmail(auth, email)
//     }
// }
