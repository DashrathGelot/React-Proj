class StudentService{
    fetchStudentData(){
        return new Promise((resolve,reject)=>{
            fetch("/students")
            .then((response)=>{
                if(!response.ok){
                    throw Error()
                }
                resolve(response.json())
            })
        });
    }
    fetchSingleStudent(id){
        return new Promise((resolve,reject)=>{
            fetch("/student/"+id)
            .then(res=>resolve(res.json()))
            .catch(error=>reject(error))
        })
    }
    addStudent(student){
        return new Promise((resolve,response)=>{
            fetch("/student",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(student)
            })
            .then(res=>resolve(res.json()))
        })
    }
    deleteStudentById(id){
        return new Promise((resolve,reject)=>{
            fetch("/student/"+id,{
                method:'DELETE',
            })
            .then(resp=>resolve(resp.json()))
            .catch(error=>reject(error))
        })
    }
    updateStudent(student){
        return new Promise((resolve,reject)=>{
            fetch("/student",{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(student)
            })
            .then(res=>resolve(res.json()))
            .catch(error=>reject(error))
        })
    }
}
export default new StudentService();