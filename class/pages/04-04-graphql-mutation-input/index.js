import { useMutation, gql } from "@apollo/client"
import { WriterInput, SubjectInput, ContentsInput  } from "../../styles/emotion"
import { useState } from "react";

// graphql 쿼리문
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {  # 변수의 타입 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents){       # 실제 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationInputPages() {
    const [ writer, setWriter ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ contents, setContents ] = useState("")
    const [ createBoard ] = useMutation(CREATE_BOARD)

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
            작성자 : <WriterInput type="text" placeholder="작성자를 입력하세요" onChange={onChangeWriter}></WriterInput>
            제목 : <SubjectInput type="text" placeholder="제목을 입력하세요" onChange={onChangeSubject}></SubjectInput>
            내용 : <ContentsInput type="text" placeholder="내용을 입력하세요" onChange={onChangeContent}></ContentsInput>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}