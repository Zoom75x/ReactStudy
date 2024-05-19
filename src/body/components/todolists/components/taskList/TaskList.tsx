import css from "../todolist/Todolist.module.css";
import {Task} from "../todolist/Todolist.tsx";
import {ChangeEvent} from "react";

interface Props {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
}

export const TaskList = ({tasks, setTasks}: Props) => {
    const onChangeCheckBox = (el: ChangeEvent<HTMLInputElement>, id: string) => {
        const newArray = [...tasks]
        const changeTask = newArray.find(task => task.id === id)
        if (changeTask) {
            changeTask.isDone = el.target.checked
            const newTasks = newArray.map(el => el.id == id ? changeTask : el)
            setTasks(newTasks)
        }
    }

    const onDeleteTask = (id: string) => {
        const newArr = [...tasks]
        const filteredTasks = newArr.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    return <ul className={css.tasks}>
        {tasks.map((task) => (
            <li key={task.id} className={task.isDone ? css.isDone : undefined}>
                <input type={"checkbox"} checked={task.isDone}
                       onChange={(event) => onChangeCheckBox(event, task.id)}/>{task.task}
                <button>Изменить</button>
                <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
            </li>

        ))}
    </ul>
}