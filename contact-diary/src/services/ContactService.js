import {AjaxCallBegin, AjaxCallSuccess, AjaxCallFailed} from '../actions/ContactAction'

export default function (dispatch) {
    dispatch(AjaxCallBegin())
    fetch("https://jsonplaceholder.typicode.com/users", {})
        .then(resp => {
            if (!resp.ok) throw Error(resp.statusText)
            return resp.json();
        })
        .then(json => {
            dispatch(AjaxCallSuccess(json))
        })
        .catch(err => {
            dispatch(AjaxCallFailed(err))
        })
}