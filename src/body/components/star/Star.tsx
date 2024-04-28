import {useState} from "react";
import css from "./Star.module.css";

interface Props {
    index: number
    onClick: (index:number)=>void
    isActive: boolean
}
const ACTIVE_STAR="&#9733"
const DEFAULT_STAR="&#9734"

export const Star = (props: Props) => {
    const {index, onClick, isActive} = props
    const initialState=isActive? ACTIVE_STAR: DEFAULT_STAR

    console.log("RenderStar",index,isActive)
    const [state, setState] = useState(initialState)
    console.log("RenderRating")
    console.log(state)
    const onLeaveMouse = () => {
        console.log("курсор НЕ на звезде")
        setState(initialState)
    }
    const onMouseEnter = () => {
        console.log("курсор на звезде")
        setState(ACTIVE_STAR)
    }
    return <span className={css.star} onMouseLeave={onLeaveMouse} onMouseEnter={onMouseEnter}
                 dangerouslySetInnerHTML={{__html: initialState}} onClick={()=>onClick(index)}/>
}
