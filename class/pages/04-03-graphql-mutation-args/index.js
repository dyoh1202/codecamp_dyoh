import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {  # 변수의 타입 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents){       # 실제 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

const DELETE_BOARD = gql`
    mutation {
      deleteBoard(number:12377) {
        number
        message
      }
    }
`

export default function GraphqlMutationArgsPages() {
    const [createBoard] = useMutation(CREATE_BOARD)
    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                writer: "훈이",
                title: "제목입니다~~",
                contents: "내용입니다~~~"
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }

    const [deleteBoard] = useMutation(DELETE_BOARD)
    const onClickDelete = async () => {
        const result = await deleteBoard()
        console.log(result)
        alert(result.data.deleteBoard.message)
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기(create)</button>
            <button onClick={onClickDelete}>GRAPHQL-API(동기) 요청하기(delete)</button>
        </>
    )
}