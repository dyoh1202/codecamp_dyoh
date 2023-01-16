import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation {
        createBoard(writer:"글쓴다3333", title:"또 썼다3", contents:"333테스트글 두번째 찾아보자"){
            number
            message
        }
    }
`

const DELETE_BOARD = gql`
    mutation {
      deleteBoard(number:12344) {
        number
        message
      }
    }
`

export default function GraphqlMutationPages() {
    const [createBoard] = useMutation(CREATE_BOARD)
    const onClickSubmit = async () => {
        const result = await createBoard()
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