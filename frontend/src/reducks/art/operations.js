import {
    deleteArtAction,
    getArtsAction,
    updateArtAction,
    updateArtViewAction,
} from './actions'
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
    orderBy,
    updateDoc,
    serverTimestamp,
    increment,
    doc,
    deleteDoc,
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
        const q = query(artsRef, orderBy('timeCreated'))
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((resp) => {
                let art = resp.data()
                art.id = resp.id
                artsResp.push(art)
            })

            dispatch(getArtsAction(artsResp.reverse()))
        })
    }
}

export const getArtsByProfile = () => {
    return async (dispatch, getState) => {
        let artsRef = collection(db, 'arts')
        let user = getState().users
        let artsResp = []
        let q = query(artsRef, where('userId', '==', user.uid))
        getDocs(q).then((querySnapshot) => {
            console.log(querySnapshot)
            querySnapshot.forEach((resp) => {
                let art = resp.data()
                art.id = resp.id
                artsResp.push(art)
            })
            dispatch(getArtsAction(artsResp))
        })
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
                    views: 0,
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
        })
    }
}

export const updateView = (art) => {
    return async (dispatch, getState) => {
        if (!art.hasOwnProperty('id') || !art.hasOwnProperty('userId'))
            return null
        if (art.id.length < 10) return null
        let artsRef = doc(db, `arts/${art.id}`)

        updateDoc(artsRef, {
            views: increment(1),
            requsetMethod: 'view',
            timeUpdated: serverTimestamp(),
        }).then(() => {
            art.views++
            dispatch(updateArtViewAction(art))
        })
    }
}

export const updateArt = (art) => {
    return async (dispatch, getState) => {
        // Auth security
        if (!auth.currentUser) return null

        // Art security
        if (!art.hasOwnProperty('id') || !art.hasOwnProperty('userId'))
            return null

        // Privacy security
        if (auth.currentUser.uid !== art.userId) return null

        let artsRef = doc(db, `arts/${art.id}`)
        let data = Object.assign({}, art)
        delete data.id
        data.requsetMethod = 'view'
        updateDoc(artsRef, data).then(() => {
            dispatch(updateArtAction(art))
        })
    }
}

export const deleteArt = (art, close) => {
    return async (dispatch, getState) => {
        // Auth security
        if (!auth.currentUser) return null

        // Art security
        if (!art.hasOwnProperty('id') || !art.hasOwnProperty('userId'))
            return null

        // Privacy security
        if (auth.currentUser.uid !== art.userId) return null

        let artsRef = doc(db, `arts/${art.id}`)

        deleteDoc(artsRef).then((resp) => {
            dispatch(deleteArtAction(art))
            close()
        })
    }
}
