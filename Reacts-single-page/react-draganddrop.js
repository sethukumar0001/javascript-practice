import React, { Component } from 'react';

class AppDragDropDemo extends Component {
    state = {
        tasks: [
            { name: "Angular Js", category: "pending", bgcolor: "red" },
            { name: "React Js", category: "pending", bgcolor: "green" },
            { name: "Vue Js", category: "complete", bgcolor: "blue" }
        ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (eve,category) => {

        let id = eve.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((task)=>{
            if(task.name == id){
                task.category = category
            }
            return task
        })
        this.setState({
            ...this.state,tasks
        })
    }

    render() {
        var tasks = {
            pending: [],
            complete: []
        }
        this.state.tasks.forEach((catName)=>{
            tasks[catName.category].push(
                <div key={catName.name}
                onDragStart = {(e) => this.onDragStart(e, catName.name)}
                draggable
                style={{color: catName.bgcolor}}

                >
                    {catName.name}
                </div>
            )
        })
        return (
            <div>
                <h2>DRAG & DROP</h2>
                    <div 
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => { this.onDrop(e, "pending") }}
                    >
                    <span>PENDING</span>
                    {tasks.pending}
                </div>
                <div
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "complete")}
                    >
                    <span>COMPLETED</span>
                    {tasks.complete}
                </div>
            </div>
        );
    }
}

export default AppDragDropDemo;