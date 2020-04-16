import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: '',
            showTaskdata: false,
            edit: '',
            allTask: [],
            updateindex: 0,
        }
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.onSubmitUpdateHandle = this.onSubmitUpdateHandle.bind(this)
    }

    updateTask(e) {
        this.setState({edit: e.target.value, taskName: e.target.value})
        for (let index = 0; index < this.state.allTask.length; index++) {
            if (this.state.allTask[index] === e.target.value) {
                this.setState({updateindex: index})
                console.log(index);
            }
        }
    }

    deleteTask(e) {
        let taskA = [];
        console.log('run' + e.target.value)
        this.state.allTask.map((task) => {
            if (task !== e.target.value) {
                taskA.push(task)
            }
        })
        if (taskA.length === 0) {
            this.setState({
                showTaskdata: false
            })
        }
        this.setState({
            allTask: taskA
        })
    }

    onSubmitHandle(event) {
        console.log(this.state.allTask)
        event.preventDefault();
        this.setState({
            showTaskdata: true,
        });
        this.state.allTask.push(event.target.task.value)
    }

    onSubmitUpdateHandle(e) {
        e.preventDefault();
        let task = []
        for (let index = 0; index < this.state.allTask.length; index++) {
            if (index === this.state.updateindex) {
                task.push(e.target.task.value)
            } else {
                task.push(this.state.allTask[index])
            }
        }
        console.log(task)
        this.setState({
            allTask: task,
            edit: ''
        })
    }

    render() {
        const allTaskShowData = this.state.allTask.map(task => {
            if (this.state.edit === task) {
                return (
                    < tr >
                    < td >
                    < form
                onSubmit = {this.onSubmitUpdateHandle.bind(this)} >
                    < input
                type = "text"
                name = "task"
                value = {this.state.taskName}
                onChange = {(e)
            =>
                {
                    this.setState({taskName: e.target.value})
                }
            }
                />
                < input
                type = "submit"
                value = "Update" / >
                    < /form>
                    < /td>
                    < td > < button
                value = {task}
                onClick = {this.deleteTask} > Delete < /button></
                td >
                < /tr>
            )
                ;
            } else {
                return (
                    < tr >
                    < td >
                    {task}
                    < /td>
                    < td > < button
                value = {task}
                onClick = {this.updateTask} > Update < /button></
                td >
                < td > < button
                value = {task}
                onClick = {this.deleteTask} > Delete < /button></
                td >
                < /tr>
            )
                ;
            }
        });
        return (
            < div
        className = "App" >

            < h1 > ToDo
        App < /h1>

        < form
        onSubmit = {this.onSubmitHandle.bind(this)} >
            < input
        type = "text"
        name = "task"
        value = {this.state.value}
        />
        < input
        type = "submit"
        style = {
        {
            marginLeft:10
        }
    }
        value = "ADD" / >
            < /form>
        {
            this.state.showTaskdata ?
        <
            div
            className = "data" >
                < table >
                < tr >
                < td > Task < /td>
                < td > Update < /td>
                < td > Delete < /td>
                < /tr>
            {
                allTaskShowData
            }
        <
            /table>
            < /div>
        :
            null
        }

    <
        /div>
    )
        ;
    }
}

export default App;