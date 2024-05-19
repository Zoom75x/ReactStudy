
interface TestComponentProps {
    title: string
    funkcia: () => string
}


export const TestComponent = ({title, funkcia}:TestComponentProps) => {
    return <>
        {title}
        <button onClick={() => {
            console.log(funkcia())}}> Knopka </button>
    </>
}