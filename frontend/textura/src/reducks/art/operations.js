import { getArtsAction } from './actions'
import {
    updateRequesetStatusAction,
    resetRequesetStatusAction,
} from '@redux/system/actions'
import { app, db, storage } from '@fire/index'
import {
    collection,
    query,
    where,
    getDocs,
    addDoc,
    serverTimestamp,
    FieldValue,
} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../../firebase'

export const getArts = () => {
    return async (dispatch, getState) => {
        let artsRef = collection(db, 'arts')
        let artsResp = []
        getDocs(artsRef).then((querySnapshot) => {
            querySnapshot.forEach((resp) => {
                let art = resp.data()
                art.id = resp.id
                artsResp.push(art)
            })
            dispatch(getArtsAction(artsResp))
        })

        // const q = query(citiesRef, where("state", "==", "CA"));
    }
}
export const createArt = (payload) => {
    return async (dispatch, getState) => {
        dispatch(resetRequesetStatusAction())
        let artsState = getState().art.arts
        let user = getState().users
        var chars =
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var pathLength = 20
        var path = ''
        for (var i = 0; i <= pathLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length)
            path += chars.substring(randomNumber, randomNumber + 1)
        }
        const storageRef = ref(
            storage,
            `arts/${payload.title}_${auth.currentUser.uid + path}`
        )

        const uploadTask = uploadBytesResumable(storageRef, payload.file)
        uploadTask
            .then((snapshot) => {
                let artsRef = collection(db, 'arts')
                const pathReference = ref(storage, snapshot.metadata.fullPath)
                let artData = {
                    path: 'url',
                    title: payload.title,
                    description: payload.description,
                    tool: payload.tool,
                    timeCreated: snapshot.metadata.timeCreated,
                    bucket: snapshot.metadata.bucket,
                    userId: auth.currentUser.uid,
                    user: {
                        uid: auth.currentUser.uid,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        avatarIcon: user.avatarIcon,
                    },
                }
                getDownloadURL(pathReference)
                    .then((url) => {
                        artData.path = url
                        addDoc(artsRef, artData)
                            .then((resp) => {
                                artsState.unshift(artData)
                                dispatch(getArtsAction(artsState))
                                dispatch(
                                    updateRequesetStatusAction({
                                        requestSuccessed: true,
                                    })
                                )
                            })
                            .catch(() => {
                                dispatch(
                                    updateRequesetStatusAction({
                                        requestSuccessed: false,
                                        requestError: true,
                                        requestting: false,
                                    })
                                )
                            })
                    })
                    .catch((error) => {
                        dispatch(
                            updateRequesetStatusAction({
                                requestSuccessed: false,
                                requestError: true,
                                requestting: false,
                            })
                        )
                    })
            })
            .catch(() => {
                dispatch(
                    updateRequesetStatusAction({
                        requestSuccessed: false,
                        requestError: true,
                        requestting: false,
                    })
                )
            })

        uploadTask.on('state_changed', (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            let requesttingStatus = progress === 100 ? false : true
            dispatch(
                updateRequesetStatusAction({
                    progress: progress,
                    requestting: requesttingStatus,
                })
            )
            // switch (snapshot.state) {
            //     case 'paused':
            //         console.log('Upload is paused')
            //         break
            //     case 'running':
            //         console.log('Upload is running')
            //         break
            // }
        })
    }
}
