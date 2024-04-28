import css from "./Rating.module.css"
import {useState} from "react";
import {Star} from "../star/Star.tsx";

export const Rating = () => {
        const [selectingRating, setSelectingRating]=useState(0)
    console.log("RenderRating")
    const onClickStar = (starIndex: number) => {
            setSelectingRating(starIndex)
        console.log("Я звезда № ", starIndex)
    }

    const getStateIsActive = (index:number, rating:number) => {
            if (rating >=index) {
                return true
            }
            else {
                return false
            }
    }
    console.log(getStateIsActive(1,selectingRating))
    return <div>
        <Star index={1} onClick={onClickStar} isActive={getStateIsActive(1, selectingRating)}/>
        <Star index={2} onClick={onClickStar} isActive={getStateIsActive(2, selectingRating)}/>
        <Star index={3} onClick={onClickStar} isActive={getStateIsActive(3, selectingRating)}/>
        <Star index={4} onClick={onClickStar} isActive={getStateIsActive(4, selectingRating)}/>
        <Star index={5} onClick={onClickStar} isActive={getStateIsActive(5, selectingRating)}/>
    </div>
}
