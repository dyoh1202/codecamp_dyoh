import { useMutation, gql } from "@apollo/client"

// graphql 쿼리문
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
          createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
          }
        }
`

export default function GraphqlMutationProductPages() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "훈이가 오래 쓴 마우스",
                    price: 15000
                }
            }
        })
        console.log(result)
        alert(result.data.createProduct.message)
    }

    return  <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
}