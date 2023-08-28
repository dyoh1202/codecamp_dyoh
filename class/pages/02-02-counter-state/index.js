import { useState } from "react"

export default function CounterStatePage() {

    const [count, setCount] = useState(0)

    const random = Math.random();
    console.log(random);

    function onClickCountUp() {
        setCount(count + 1);
    }

    function onClickCountDown() {
        setCount(count - 1);
    }

    return (
        // <> - 프레그먼트
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 UP</button>
            <button onClick={onClickCountDown}>카운트 DOWN</button>
        </>
    )
}