import { useMutation, gql } from "@apollo/client"
import { WriterInput, SubjectInput, ContentsInput  } from "../../styles/emotion"
import { useState } from "react";
import {useRouter} from "next/router";

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

    const router = useRouter()

    const onClickSubmit = async () => {
        try {   // 백엔드 쪽에서 실패할 수도 있는 부분이므로 'try'
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
            // router.push("05-10-dynamic-routed-board-mutation/" + result.data.createBoard.number)
            router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)   // 위의 더하기와 같음 == '템플릿 리터럴'
        } catch(error) {
            // try 하다가 실패하면 아랫줄 모두 !!무시하고!! catch가 실행 됨. 에러 알려주는 곳
            console.log(error.message)
        }

    }

    // 이벤트 핸들러 함수
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeSubject = (event) => {
        setSubject(event.target.value)
    }

    const onChangeContent = (event) => {
        setContents(event.target.value)
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