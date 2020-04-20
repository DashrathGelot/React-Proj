import ActionType from './ActionConstant';
import StudentService from '../service/StudentService';

export function fetchStudentData(){
    return (dispatch) => {
        dispatch({
            type:ActionType.HANDLE_FETCH_REQUEST
        })
        StudentService.fetchStudentData().then(studentResponse=>{
            dispatch({
                type:ActionType.HANDLE_STUDENT_RESPONSE,
                students:studentResponse
            })
        }).catch(error=>{
            dispatch({
                type:ActionType.HANDLE_RESPONSE_FAILED,
                message:"oops! Something wrong with your request"
            })
        })
    }
}
export function getStudent(id){
    return (dispatch)=>{
        StudentService.fetchSingleStudent(id).then(studentResponse=>{
            dispatch({
                type:ActionType.HANDLE_SINGLE_STUDENT_RESPONSE,
                student:studentResponse,
            })
        })
    }
}
export function addStudent(student){
    return (dispatch)=>{
        dispatch({
            type:ActionType.HANDLE_FETCH_REQUEST
        })
        StudentService.addStudent(student).then(response=>{
            dispatch({
                type:ActionType.HANDLE_CREATE_STUDENT_RESPONSE,
                student:response,
                message:'student added successfully!!!'
            })
        }).catch(error=>{
            dispatch({
                type:ActionType.HANDLE_RESPONSE_FAILED,
                message:"oops! Something wrong with your request"
            })
        })
    }
}
export function deleteStudent(id){
    return (dispatch)=>{
        StudentService.deleteStudentById(id).then(response=>{
            dispatch({
                type:ActionType.HANDLE_DELETE_STUDENT_RESPONSE,
                id:id,
                message:'student deleted successfully!!!'
            })
        }).catch(error=>{
            dispatch({
                type:ActionType.HANDLE_RESPONSE_FAILED,
                error:error,
                message:"oops! Something wrong with your request"
            })
        })
    }
}
export function updateStudent(student){
    return (dispatch)=>{
        StudentService.updateStudent(student).then(response=>{
            dispatch({
                type:ActionType.HANDLE_UPDATE_STUDENT_RESPONSE,
                student:response,
                message:'student updated successfully!!!'
            })
        }).catch(error=>{
            dispatch({
                type:ActionType.HANDLE_RESPONSE_FAILED,
                message:"oops! Something wrong with your request"
            })
        })
    }
}