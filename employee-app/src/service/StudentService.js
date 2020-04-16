class StudentService{
    fetchStudentData(){
        return new Promise((resolve,reject)=>{
            fetch("http://localhost:8080/students")
            .then((response)=>{
                resolve(response.json())
            })
        });
    }
}
export default new StudentService();