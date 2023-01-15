import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {

    const [ title, setTitle ] = useState("")


    // 비동기
    function onClickAsync() {
        const data = axios.get('https://koreanjson.com/posts/1')
        console.log(data)
    }

    // 동기
    async function onclickSync() {
        const data = await axios.get('https://koreanjson.com/posts/1')
        console.log(data)
        setTitle(data.data.title)
    }

    return (
        <>
            <button onClick={onClickAsync}>REST-API 비동기 요청하기</button>
            <button onClick={onclickSync}>REST-API 동기 요청하기</button>
            <div>{title}</div>
        </>
    )
}
