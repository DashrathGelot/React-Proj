import ActionConstant from './ActionConstant';

export const CreateContact=(e)=>{
    let ob=e.target;
    return {
        type:ActionConstant.CREATE_CONTACT,
        contact:{
            name:ob.name.value,
            phone:ob.phone.value,
            email:ob.email.value,
            company:{
                name:ob.company.value
            }
        }
    }
}

export const RemoveContact=(index)=>{
    return{
        type:ActionConstant.REMOVE_CONTACT,
        index:index
    }
}

export const AjaxCallBegin=()=>{
    return{
        type:ActionConstant.FETCH_DATA_BEGIN
    }
}

export const AjaxCallSuccess=(data)=>{
    return{
        type:ActionConstant.FETCH_DATA_SUCCESS,
        data:data
    }
}

export const AjaxCallFailed=(msg)=>{
    return{
        type:ActionConstant.FETCH_DATA_FAILED,
        error:msg
    }
}