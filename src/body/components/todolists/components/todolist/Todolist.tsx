import {FilterStateType} from "../../Todolists.tsx";
import {v4 as uuidv4} from "uuid"
import {ChangeEvent, useState, KeyboardEvent} from "react";
import css from "./Todolist.module.css"

interface Props {
    title: string
    tasks: Task[]
    setFilterState: (filterState: FilterStateType) => void
    filterState: FilterStateType
    setTasks: (tasks: Task[]) => void
}

export interface Task {
    id: string
    task: string
    isDone: boolean
}

const setColor = (filterState: FilterStateType, state: FilterStateType) => {
    return {background: filterState === state ? "gold" : ""}
}
export const Todolist = ({title, tasks, setFilterState, filterState, setTasks}: Props) => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState(false)
    const addTask = () => {

        if (value) {
            //скопировали
            const newArrTasks = [...tasks]
            //добавили таску
            newArrTasks.push({id: uuidv4(), task: value, isDone: false})
            // установили useState
            setTasks(newArrTasks)
            setValue("")
        } else {
            setError(true)
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
        console.log(e.currentTarget.value)
    }

    const onFocus = () => {
        if (error) {
            setError(false)
        }
    }
    const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            addTask()
        } else if (event.code === "Escape") {
            setValue("")
        }
        console.log(event)
    }
    return <>
        <div>{title}</div>
        <div>
            <input className={error ? css.error : undefined}
                   type={"text"} value={value}
                   onChange={onChange}
                   onFocus={onFocus}
                   onKeyUp={onKeyUp}
            />
            <button onClick={addTask}>Add task</button>
        </div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input type={"checkbox"} checked={task.isDone}/>{task.task}
                </li>
            ))}
        </ul>
        <div>
            <button style={setColor(filterState, "All")} onClick={() => setFilterState("All")}>All</button>
            <button style={setColor(filterState, "Active")} onClick={() => setFilterState("Active")}>Active</button>
            <button style={setColor(filterState, "Closed")} onClick={() => setFilterState("Closed")}>Closed</button>
        </div>
    </>
}

