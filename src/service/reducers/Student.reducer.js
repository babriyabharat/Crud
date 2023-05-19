import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING } from "../constant/actionType"

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: false,
    isEdit: false
}

const StudentReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREAT_STU:
            return {
                ...state,
                studentList: [
                    ...state.studentList, action.payload
                ], isLoading: false,
                isEdit: false

            }
            break;

        case DELETE_STU:
            const DStu = state.studentList.filter((Stu) => Stu.id !== action.payload)
            return {
                ...state,
                studentList: DStu,
                isLoading: false,
                isEdit: false
            }
            break;

        case GET_INFO:
            return {
                ...state,
                studentInfo: action.payload,
                isLoading: false,
                isEdit: true
            }
            break;

        case UPDATE_STU:
            const UpdateStu = state.studentList.map((Stu) => {
                if (Stu.id === action.payload.id) {

                    return action.payload
                }
                return Stu
            })
            return {
                ...state,
                studentList: UpdateStu,
                isLoading: false,
                isEdit: false
            }
            break;
        case LOADING: {
            return {
                ...state,
                isLoading: true,
                isEdit: false
            }
        }
            break;

        default:
            return state;
    }
}

export default StudentReducer;