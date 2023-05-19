import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING } from "../constant/actionType"
import { db } from "../../Firebase/Firebase"
import { doc, setDoc, collection, quer, updateDoc, deleteDoc, getDocs } from "firebase/firestore";

export const creatStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}

export const creatStudentAsync = (data) => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(creatStudent(data))
        }, 2000)
    }
}

export const DeleteStudent = () => {
    return {
        type: DELETE_STU
    }
}

export const DeleteStudentAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(DeleteStudent())
        }, 2000)
    }
}

export const GetInfo = (id) => {
    return {
        type: GET_INFO,
        payload: id
    }
}

export const GetInfoAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(GetInfo())
        }, 2000)
    }
}

export const UpdateStu = () => {
    return {
        type: UPDATE_STU
    }
}

export const UpdateStuAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(UpdateStu())
        }, 2000)
    }
}

export const loading = () => {
    return {
        type: LOADING
    }
}
export const students = () => {
    return async dispatch => {
        await getDocs(collection(db,"students")).then((docSnap)=>{
            let newArr =[];
            docSnap.forEach((doc)=>{
                newArr=[...newArr,doc.data()];
            });
            dispatch(GetInfo(newArr));
        }).catch((err)=>{
            console.log("error",err);
        })
    }
}

export const student = (data) => {
    return async dispatch => {
        await setDoc(doc(db, 'students', `${data.id}`)).then((res) => {
            dispatch(GetInfo(res.data()))
        }).catch((err) => {
            console.log(err);
        })

    }
}

export const UpdateStud = (data) => {
    return async dispatch => {
        updateDoc(doc(db, "students", `${data.id}`, data)).then((res) => {
            console.log("Update ", res);
            dispatch(UpdateStu())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}

export const DeleteStud = (id) => {
    return async dispatch => {
        deleteDoc(doc(db, "students", `${id}`)).then((res) => {
            console.log("Data Deleted");
            dispatch(DeleteStudent())
        }).catch((err) => {
            console.log("err", err);
        })
    }
}