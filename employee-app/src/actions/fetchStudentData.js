import ActionConstant from './ActionConstant';
import StudentService from '../service/StudentService';

export function fetchStudentData(){
    return (dispatch) => {
        StudentService.fetchStudentData().then(studentResponse=>{
            dispatch({
                type:ActionConstant.HANDLE_STUDENT_RESPONSE,
                students:studentResponse.data
            })
        })
    }
}