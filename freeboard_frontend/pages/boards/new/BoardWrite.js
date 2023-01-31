import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import {useRouter} from "next/router";
import BoardWriteUI from "./BoardWriteUI";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){ 
      createBoard(createBoardInput: $createBoardInput){         
        _id
      }
    }
`

export default function BoardWrite() {
    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ writerError, setWriterError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ titleError, setTitleError ] = useState("");
    const [ contentsError, setContentsError ] = useState("");

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const router = useRouter();

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value !== "") {
            setWriterError("")
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(event.target.value !== "") {
            setContentsError("")
        }
    }

    const onClickRegister = async () => {
            if (!writer) {
                setWriterError("작성자를 입력해주세요.")
            }
            if (!password) {
                setPasswordError("비밀번호를 입력해주세요.")
            }
            if (!title) {
                setTitleError("제목을 입력해주세요.")
            }
            if (!contents) {
                setContentsError("내용을 입력해주세요.")
            }
            if (writer && password && title && contents) {
                try {
                    const result = await createBoard({
                        variables: {
                            createBoardInput: {
                                // KEY와 VALUE가 같으면, VALUE를 생략할 수도 있다.
                                // == shorthand-property
                                writer,
                                password,
                                title,
                                contents
                            }
                        }
                    })
                    console.log(result.data.createBoard._id)
                    router.push(`/boards/${result.data.createBoard._id}`)
                    // --> [boardId]/index.js에서 useQuery의 variables의 boardId에 ${result.data.createBoard._id}가 적용됨
                } catch(error) {
                    console.log(error.message)
                }
            }
    }

    return (
        <BoardWriteUI onChangeWriter={onChangeWriter} onChangePassword={onChangePassword} onChangeTitle={onChangeTitle}
                      onChangeContents={onChangeContents} onClickRegister={onClickRegister} writerError={writerError}
                      passwordError={passwordError} titleError={titleError} contentsError={contentsError}/>
    )
}