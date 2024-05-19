import {FilterStateType} from "../../Todolists.tsx";
import {Filterblock} from "../filterblock/Filterblock.tsx";
import {TaskList} from "../taskList/TaskList.tsx";
import {AddTask} from "../addTask/AddTask.tsx";
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
export const Todolist = ({title, tasks,  setTasks, setFilterState, filterState}: Props) => {
    return <>
        <div>{title}</div>
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <Filterblock setFilterState={setFilterState} filterState={filterState}/>
    </>
}

