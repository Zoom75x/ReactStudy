import {Todolist} from "./components";
import {Task} from "./components/todolist/Todolist.tsx";
import {useState} from "react";
import {v4 as uuidv4} from "uuid"

const initialtasks:Task[]=[
    {id:uuidv4(), task:"HTML",  isDone:true},
    {id:uuidv4(), task:"CSS",   isDone:true},
    {id:uuidv4(), task:"React", isDone:false},
    {id:uuidv4(), task:"Redux", isDone:false},
    {id:uuidv4(), task:"ReduxToolKit", isDone:false},
    {id:uuidv4(), task:"Axios", isDone:false},
    {id:uuidv4(), task:"Antd", isDone:false},
]

export type FilterStateType="All" | "Active"  |"Closed"
export const Todolists=()=>{
    const [tasks, setTasks] = useState<Task[]>(initialtasks)
    console.log("tasks", tasks)
    const [filterState, setFilterState]=  useState<FilterStateType>("All")
    let filterTask: Task[]=[]
    if (filterState === "All") {
        filterTask = tasks
    } else if (filterState === "Active") {
        filterTask=tasks.filter(task=> !task.isDone)
    }
    else if (filterState === "Closed") {
        filterTask = tasks.filter(task=>task.isDone)
    }

    return <>
        < Todolist title = {"Что учить?"}
                  tasks={filterTask}
                  setFilterState={setFilterState}
                  filterState={filterState}
                  setTasks={setTasks}
        />
    </>
}