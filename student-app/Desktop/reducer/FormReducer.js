import ActionType from '../actions/ActionConstant'

const defaultState={
    name:'',
    rollNo:null,
    cpp:null,
    java:null,
    dbms:null,
}

export default function(state=defaultState,action){
    switch (action.type) {

        case ActionType.CHANGE_NAME:
            return{
                ...state,
                name:action.name,
                validName:!(/^[a-zA-Z ]*$/).test(action.name)
            }
        case ActionType.CHANGE_ROLLNO:
            return{
                ...state,
                rollNo:action.rollNo,
                validRollNo:action.students.some(element =>parseInt(action.rollNo)===element.rollNo),
            }
        case ActionType.CHANGE_MARKS:
            const val=action.event.target;
            return{
                ...state,
                [val.name]:val.value,
                [val.id]:parseInt(val.value) < 0 || parseInt(val.value) >100
            }
        case ActionType.SET_STUDENT_OBJ:
            if(action.student===undefined){
                return state
            }
            return{
                ...state,
                name:action.student.name,
                rollNo:action.student.rollNo,
                cpp:action.student.cpp,
                java:action.student.java,
                dbms:action.student.dbms
            }
        default:
            return state
    }
}