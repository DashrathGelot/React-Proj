import ActionType from './ActionConstant'

export const setStudentObj=(student)=>{
    return{
        type:ActionType.SET_STUDENT_OBJ,
        student:student
    }
}

export const changName=(name)=>{
    return{
        type:ActionType.CHANGE_NAME,
        name:name
    }
}

export const changRollNo=(rollNo,students)=>{
    return{
        type:ActionType.CHANGE_ROLLNO,
        rollNo:rollNo,
        students:students
    }
}

export const changeMarks=(event)=>{
    return{
        type:ActionType.CHANGE_MARKS,
        event:event
    }
}