import { useMutation, gql } from "@apollo/client"
import {useState} from "react";
import { SellerInput } from "../../styles/emotion"

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
    const [ seller, setSeller ] = useState("")
    const [ productName, setProductName ] = useState("")
    const [ productDetail, setProductDetail ] = useState("")
    const [ productPrice, setProductPrice ] = useState(0)
    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: productName,
                    detail: productDetail,
                    price: productPrice
                }
            }
        })
        console.log(result)
        alert(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeProductName = (event) => {
        setProductName(event.target.value)
    }

    const onChangeProductDetail = (event) => {
        setProductDetail(event.target.value)
    }

    const onChangeProductPrice = (event) => {
        setProductPrice(parseInt(event.target.value))
        console.log(event.target.value)
    }

    return  (
        <>
            판매자: <SellerInput onChange={onChangeSeller}></SellerInput>
            판매 물건 이름: <SellerInput onChange={onChangeProductName}></SellerInput>
            판매 물건 상세정보: <SellerInput onChange={onChangeProductDetail}></SellerInput>
            판매 물건 가격: <SellerInput onChange={onChangeProductPrice}></SellerInput>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}