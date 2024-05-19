import {Rating} from "./components/rating/Rating.tsx";
import {Todolists} from "./components";
import {GalleryButton} from "./components/gallerybutton/GalleryButton.tsx";
import {TestComponent} from "./components/test/TestComponent.tsx";

export const Body=()=>{

    return (
        <div>
            <Rating/>
            <GalleryButton direction = {"prev"}/>
            <GalleryButton direction = {"next"}/>
            <Todolists/>
            <TestComponent title={"Name"} funkcia = {() => {return "123"}}/>
        </div>
    )

}