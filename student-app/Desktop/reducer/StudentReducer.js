import ActionType from '../actions/ActionConstant';

const defaultState = {
    students: [],
    getStudent: {},
    modelShow: false,
    update: false,
    tableShow: false
}

const setStudent = (e) => {
    return {
        name: e.target.name.value,
        rollNo: parseInt(e.target.rollno.value),
        cpp: e.target.cpp.value,
        java: e.target.java.value,
        dbms: e.target.dbms.value,
        result: parseInt(e.target.cpp.value) >= 40 && parseInt(e.target.java.value) >= 40 && parseInt(e.target.dbms.value) >= 40 ? 'Pass' : 'Fail'
    }
}
export default function (state = defaultState, action) {
    let newSt = state.students;

    switch (action.type) {

        case ActionType.ADD_STUDENT:
            newSt.push(setStudent(action.student))
            return {
                ...state,
                students: newSt
            }

        case ActionType.REMOVE_STUDENT:
            return {
                ...state,
                students: state.students.filter((st) => parseInt(action.index) !== st.rollNo)
            }

        case ActionType.UPDATE_STUDENT:
            state.students.forEach((student, index) => {
                if (student.rollNo === parseInt(action.student.target.rollno.value)) {
                    newSt[index] = setStudent(action.student)
                }
            })
            return {
                ...state,
                students: newSt,
            }

        case ActionType.GET_STUDENT:
            let tempStudent = {}
            state.students.forEach(
                student => {
                    if (parseInt(action.rollNO) === student.rollNo) {
                        tempStudent = student;
                    }
                });
            return {
                ...state,
                getStudent: tempStudent,
            }
        case ActionType.SET_STUDENT:
            return {
                ...state,
                getStudent: {}
            }
        case ActionType.SET_MODEL:
            return {
                ...state,
                modelShow: !state.modelShow,
            }
        case ActionType.SET_UPDATE:
            return {
                ...state,
                update: !state.update
            }
        default:
            return state;
    }

}