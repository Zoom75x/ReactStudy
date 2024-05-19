interface Props {
    direction: "prev" | "next"
}

export const GalleryButton = ({direction}: Props) => {
    return direction === "prev" ? <button>prev</button> : <button>next</button>
}