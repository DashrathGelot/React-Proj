import ActionType from './ActionConstant';

export const AddStudent=(student)=>{
    return{
        type:ActionType.ADD_STUDENT,
        student:student
    }
}

export const RemoveStudent=(index)=>{
    return{
        type:ActionType.REMOVE_STUDENT,
        index:index
    }
}

export const UpdateStudent=(student)=>{
    return{
        type:ActionType.UPDATE_STUDENT,
        student:student
    }
}

export const GetStudent=(rollNO)=>{
    return{
        type:ActionType.GET_STUDENT,
        rollNO:rollNO
    }
}

export const SetStudent=()=>{
    return{
        type:ActionType.SET_STUDENT,
    }
}

export const SetModel=()=>{
    return{
        type:ActionType.SET_MODEL
    }
}

export const SetUpdate=()=>{
    return{
        type:ActionType.SET_UPDATE
    }
}