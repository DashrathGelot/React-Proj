import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default class TableComponent extends React.Component {
    render() {
        const studentContent = this.props.students.map(
            student => {
                return (
                    < tr >
                    < td > {student.rollNo} < /td>
                    < td > < Button
                type = "submit"
                value = {student.rollNo}
                onClick = {this.props.onUpdate} > Update < /Button></
                td >
                < td > < Button
                variant = "danger"
                value = {student.rollNo}
                onClick = {this.props.onDelete} > Delete < /Button></
                td >
                < /tr>
            )
                ;
            })
        return (
            < div >
            < h2
        className = "table-heading" > Student
        List < /h2>
        < Table
        className = 'table-style'
        responsive = "sm"
        size = "sm" >
            < thead >
            < tr >
            < th > Roll
        Number < /th>
        < th > Update < /th>
        < th > Delete < /th>
        < /tr>
        < /thead>
        < tbody >
        {studentContent}
        < /tbody>
        < /Table>
        < /div>
    )
        ;
    }
}