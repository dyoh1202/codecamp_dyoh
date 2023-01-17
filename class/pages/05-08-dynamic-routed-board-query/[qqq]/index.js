import {gql, useQuery} from "@apollo/client";
import {useRouter} from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
            like
            createdAt
        }
    }
`

export default function DynamicRoutedBoardQueryPages() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })


    return (
        <>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>

            {/*'data &&' == data가 있을 때 출력! 즉, 조건부 렌더링의 '&& 연산자' */}
            <div>작성자: {data && data.fetchBoard.writer}</div>
            {/* 조건부 렌더링의 '삼항연산자' */}
            <div>제목: {data ? data.fetchBoard.title : "로딩중..."}</div>
            {/* 조건부 렌더링의 '옵셔널체이닝' */}
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}