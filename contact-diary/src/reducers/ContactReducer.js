import ActionConstant from "../actions/ActionConstant";

const defaultState={
    contacts:[],
    loading:false,
    error:false
}
export default function (state=defaultState,action){
  
  switch (action.type) {
    
    case ActionConstant.CREATE_CONTACT:
      let newArr=state.contacts;
      newArr.push(action.contact)
      return{
        ...state,
        contacts:newArr,
      }

    case ActionConstant.REMOVE_CONTACT:
        return{
            ...state,
            contacts:state.contacts.filter((con,i)=>i!==parseInt(action.index))
        }

    case ActionConstant.FETCH_DATA_BEGIN:
      return{
        ...state,
        loading:true,
      }

    case ActionConstant.FETCH_DATA_SUCCESS:
      return{
        ...state,
        contacts:action.data,
        loading:false
      }

    case ActionConstant.FETCH_DATA_FAILED:
      return{
        ...state,
        error:true,
        loading:false        
      }

    default:
        return state
  }
}