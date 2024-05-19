import css from "../todolist/Todolist.module.css";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Task} from "../todolist/Todolist.tsx";

interface Props {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
}

export const AddTask = ({tasks, setTasks}: Props) => {

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState(false)
    const addTask = () => {

        if (value) {
            //скопировали
            const newArrTasks = [...tasks]
            //добавили таску
            newArrTasks.unshift({id: uuidv4(), task: value, isDone: false})
            // установили useState
            setTasks(newArrTasks)
            setValue("")
        } else {
            setError(true)
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
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
    }
    return <div>
        <input className={error ? css.error : undefined}
               type={"text"} value={value}
               onChange={onChange}
               onFocus={onFocus}
               onKeyUp={onKeyUp}
        />
        <button onClick={addTask}>Add task</button>
    </div>

}