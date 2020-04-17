class StudentService{
    fetchStudentData(){
        return new Promise((resolve,reject)=>{
            fetch("/students",{
                headers:{
                    'Access-Control-Allow-Origin':'*'}
            })
            .then((response)=>{
                if(!response.ok){
                    throw Error()
                }
                resolve(response.json())
            })
            .then(r=>console.log(r))
            .catch(e=>console.log(e))
        });
    }
}
export default new StudentService();