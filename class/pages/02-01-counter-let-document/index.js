import { useState } from "react"

export default function CounterLetDocumentPage() {

    function onClickCountUp() {
        const count = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerHTML = count;
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("count").innerText) - 1
        document.getElementById("count").innerHTML = count;
    }

    return (
        // <> - 프레그먼트
        <>
            <div id="count">0</div>
            <button onClick={onClickCountUp}>카운트 UP</button>
            <button onClick={onClickCountDown}>카운트 DOWN</button>
        </>
    )
}