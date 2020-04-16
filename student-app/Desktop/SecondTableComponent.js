import React from 'react';
import {Table} from 'react-bootstrap'; 

export default class SecondTableComponent extends React.Component{
    render(){
        const studentContent=this.props.students.map(
            student => {
                let cname;
                student.result==='Pass' ? cname='rowcolorg': cname='rowcolorr';
                return(
                    <tr className={cname}>
                        <td>{student.rollNo}</td>
                        <td>{student.name}</td>
                        <td>{student.cpp}</td>
                        <td>{student.java}</td>
                        <td>{student.dbms}</td>
                        <td>{student.result}</td>
                    </tr>
                );
            })
        return(
            <div>
                <h2 className="table-heading">Student's MarkSheet</h2>
            <Table className='table-style' responsive="sm" size="sm">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Java</th>
                <th>CPP</th>
                <th>DBMS</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
                {studentContent}
            </tbody>
            </Table>
            </div>
        );
    }
}