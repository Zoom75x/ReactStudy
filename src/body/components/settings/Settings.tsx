import {ChangeEvent, useState} from "react";
interface ResultType {
    name: string
    age: number
    subsribe: boolean
    agreement: boolean
}
const INITIAL_VALUE: ResultType = {
    name: "",
    age: 18,
    subsribe: false,
    agreement: false
}
export const Settings = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState<number>(18)
    const [subsribe, setSubsribe] = useState<boolean>(false)
    const [agreement, setAgreement] = useState<boolean>(false)
    const [result, setResult] = useState<ResultType | undefined>()
    const setOnlineResult = (key: keyof ResultType, value: string | boolean | number) => {
        setResult(prevState => {
            return prevState ? {...prevState, [key]: value} : {
                ...INITIAL_VALUE, [key]: value
            }
        })
    }
    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        //onClearResult()
        setName(event.target.value)
        setOnlineResult("name", event.target.value)
    }
    const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        //onClearResult()
        console.log(Number(event.target.value) >= 18 && Number(event.target.value) < 100)
        if (Number(event.target.value) >= 18 && Number(event.target.value) < 100) {
            const num = Number(event.target.value)
            setAge(num)
            setOnlineResult("age", Number(event.target.value))
        }
    }
    const onChangeSubsribe = (event: ChangeEvent<HTMLInputElement>) => {
        //onClearResult()
        setSubsribe(event.target.checked)
        setOnlineResult("subsribe", event.target.checked)
    }
    const onChangeAgreement = (event: ChangeEvent<HTMLInputElement>) => {
        //onClearResult()
        setAgreement(event.target.checked)
        setOnlineResult("agreement", event.target.checked)
    }
    const onClickSubsribtionBtn = () => {
        const data: ResultType = {
            name: name,
            age: age,
            subsribe: subsribe,
            agreement: agreement
        }
        setResult(data)
    }
    const onClearResult = () => {
        if (result) {
            setResult(undefined)
        }
    }
    return (
        <div>
            <input placeholder={"name"} value={name} onChange={onChangeName}/>
            <input type={"number"} placeholder={"age"} value={age} onChange={onChangeAge}/>
            <div>
                <input type={"checkbox"} checked={subsribe} onChange={onChangeSubsribe}/> Согласен на подписку
                <input type={"checkbox"} checked={agreement} onChange={onChangeAgreement}/> Согласен на обработку
                персональных данных
                <button onClick={onClickSubsribtionBtn}
                        disabled={!(!!name && !!age && subsribe && agreement)}>Подписаться</button>
                {result &&
                    <div>
                        <div>Имя: {result.name}</div>
                        <div>Возраст: {result.age}</div>
                        <div>Согласен с подпиской: {result.subsribe ? "ДА" : "НЕТ"}</div>
                        <div>Согласен с передачей персональных данных: {result.agreement ? "ДА" : "НЕТ"}</div>
                    </div>
                }
            </div>
        </div>
    )
}