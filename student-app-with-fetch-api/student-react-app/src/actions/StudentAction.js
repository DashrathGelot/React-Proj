import ActionType from './ActionConstant';

export const GetStudent=(id)=>{
    return{
        type:ActionType.GET_STUDENT,
        id:id
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