import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {CREATE_BOARD} from "./BoardWrite.queries";

export default function BoardWrite(props) {
    const [ writer, setWriter ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ contents, setContents ] = useState("")
    const [ createBoard ] = useMutation(CREATE_BOARD)

    // const router = useRouter()

    const onClickSubmit = async () => {
        // const writer = "qqq"  // 이 함수 에 있으면 현재 스코프
        const result = await createBoard({
            variables: {    // variables 가 '$' 역할을 해줌
                writer: writer,     // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
                title: subject,
                contents: contents
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
        // router.push("05-08-dynamic-routed-board-query/" + result.data.createBoard.number)
    }

    // 이벤트 핸들러 함수
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        console.log("writer:  " + writer)
    }

    const onChangeSubject = (event) => {
        setSubject(event.target.value)
        console.log("subject:  " + subject)
    }

    const onChangeContent = (event) => {
        setContents(event.target.value)
        console.log("contents:  " + contents)
    }

    return (
        <>
            <div>wwwwwww</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeSubject={onChangeSubject}
                onChangeContent={onChangeContent}
            />
        </>
    )
}