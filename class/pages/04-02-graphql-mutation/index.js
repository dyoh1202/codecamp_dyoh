import {useState} from "react";
import axios from "axios";
import {gql, useMutation} from "@apollo/client";

const CREATE_BOARD = gql`
    mutation{
        createBoard(
            writer:"김가나다2"
            , title: "제모오오오옥2"
            , contents: "커어어어어언테에에엔츠으으으2"
    ){
        _id
        ,number
        ,message
    }
}
`

export default function GraphqlMutationPage() {

    const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수();
        console.log(result)
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}