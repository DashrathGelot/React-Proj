import ActionType from './ActionConstant'
import EmployeeService from '../service/EmployeeService'

export function fetchEmployeeData(){
    return (dispatch)=>{
        EmployeeService.fetchEmployeeDate().then(resp=>{
            dispatch({
                type:ActionType.HANDLE_EMPLOYEE_RESPONSE,
                employees:resp.data
            })
        })
    }
}

export function fetchEmployee(){
    return (dispatch)=>{
        EmployeeService.fetchEmployee().then(resp=>{
            dispatch({
                type:ActionType.HANDLE_SINGLE_EMPLOYEE_RESPONSE,
                employee:resp
            })
        })
    }
}

export function addEmployee(employee){
    return (dispatch)=>{
        EmployeeService.addEmployee(employee).then(resp=>{
            dispatch({
                type:ActionType.HANDLE_CREATE_EMPLOYEE_RESPONSE,
                status:resp.status
            })
        })
    }
}

export function deleteEmployee(){
    return (dispatch)=>{

    }
}

export function updateEmployee(){
    return (dispatch)=>{

    }
}