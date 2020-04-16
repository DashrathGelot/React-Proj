class EmployeeService{
    fetchEmployeeDate(){
        this.callFetchApi("http://dummy.restapiexample.com/api/v1/employees",{})   
    }
    fetchEmployee(id){
        this.callFetchApi("http://dummy.restapiexample.com/api/v1/employee"+id,{})
    }
    addEmployee(employee){
        this.callFetchApi("http://dummy.restapiexample.com/api/v1/create",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(employee)})
    }
    deleteEmployeeById(id){
        this.callFetchApi("http://dummy.restapiexample.com/api/v1/delete/"+id,{
            method:'DELETE'})
    }
    updateEmployee(employee){
        this.callFetchApi("http://dummy.restapiexample.com/api/v1/update/"+employee.id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(employee)})
    }
    callFetchApi(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,data)
            .then(response=>{
                if(!response.ok){
                    throw Error()
                }
                resolve(response.json())
            })
        })
    }
}
export default new EmployeeService();