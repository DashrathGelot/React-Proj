import ActionType from '../actions/ActionConstant';

const defaultState={
    students:[],
    getStudent:{rollno:'',name:'',cpp:'',java:'',dbms:''},
    modelShow:false,
    update:false,
    error:false,
    loading:false,
    message:''
}

export default function (state=defaultState,action){
    let newSt=[...state.students];
    switch (action.type) {
        case ActionType.SET_STUDENT:
            return{
                ...state,
                getStudent:{rollno:'',name:'',cpp:'',java:'',dbms:''}
            }
        case ActionType.SET_MODEL:
            return{
                ...state,
                modelShow:!state.modelShow,
            }
        case ActionType.SET_UPDATE:
            return{
                ...state,
                update:!state.update
            }
        case ActionType.GET_STUDENT:
            let tempStudent={}
            state.students.forEach(
                student => {
                  if(parseInt(action.id) === parseInt(student.rollno)){
                    tempStudent=student;
                  }
                });
            return{
                ...state,
                getStudent:tempStudent,
            }
        case ActionType.HANDLE_FETCH_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ActionType.HANDLE_STUDENT_RESPONSE:
            return{
                ...state,
                students:action.students,
                loading:false,
            }
        case ActionType.HANDLE_SINGLE_STUDENT_RESPONSE:
            return{
                ...state,
                getStudent:action.student,
            }
        case ActionType.HANDLE_CREATE_STUDENT_RESPONSE:
            newSt.push(action.student)
            return{
                ...state,
                students:newSt,
                message:'student added successfully!!!'
            }
        case ActionType.HANDLE_UPDATE_STUDENT_RESPONSE:
            state.students.forEach((student,index)=>{
                if(student.rollno === parseInt(action.student.rollno)){
                    newSt[index]=action.student
                }
            })
            return{
                ...state,
                students:newSt,
                message:'student updated successfully!!!'
            }
        case ActionType.HANDLE_DELETE_STUDENT_RESPONSE:
            return{
                ...state,
                students:state.students.filter((st) =>parseInt(action.id)!==st.rollno),
                message:'student deleted successfully!!!'
            }
        case ActionType.HANDLE_RESPONSE_FAILED:
            return{
                ...state,
                error:true,
                message:"oops! Something wrong with your request",
                loading:false
            }
        default:
            return state;
    }

}