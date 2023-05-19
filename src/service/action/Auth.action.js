import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS , LOGOUT_FAIL} from "../constant/actionType";
import {auth} from '../../Firebase/Firebase'
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();

const SignUpSuccess = (user) => {
    return {
        type : SIGNUP_SUCCESS,
        payload : user
    }
}
const SignUpFail = (err) => {
    return {
        type : SIGNUP_FAIL,
        payload : err
    }
}
const LogInSuccess = (user) => {
    return {
        type : LOGIN_SUCCESS,
        payload : user
    }
}
const LogInFail = (err) => {
    return {
        type : LOGIN_FAIL,
        payload : err
    }
}
const LogOutSuccess = () => {
    return {
        type : LOGOUT_SUCCESS
    }
}
const LogOutFail = (err) => {
    return {
        type : LOGOUT_FAIL,
        payload : err
    }
}

export  const logInGoogle = () => {
    return diapatch => {
        signInWithPopup(auth, provider)
        .then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            diapatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            diapatch(LogInFail(err))
        })
    }
}

export const logOut = () => {
    return dispatch => {
        signOut(auth).then((res) => {
            console.log("result", res);
            dispatch(LogOutSuccess())
        }).catch((err) => {
            console.log("error", err);
            dispatch(LogOutFail(err))
        })
    }
}

export const signUpInitiate = (email, password) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            dispatch(SignUpSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            dispatch(SignUpFail(err))
        })
    }
}

export const logInInitiate = (email, password) => {
    // console.log(email, password);
    return dispatch => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            dispatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err.code);
            dispatch(LogInFail(err.code))
        })
    }
}
