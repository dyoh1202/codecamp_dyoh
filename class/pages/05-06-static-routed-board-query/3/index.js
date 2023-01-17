import {gql, useQuery} from "@apollo/client";

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

export default function StaticRoutedPages() {
    // useMutation과 다르게 화면이 열리자마자 쿼리 실행되기 때문에,
    // variables(state)를 useQuery 실행과 동시에 보낸다.
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: 12327
        }
    })


    return (
        <>
            <div>3번 게시글로 이동이 완료되었습니다.</div>

            {/*'data &&' == data가 있을 때 출력! 즉, 조건부 렌더링의 '&& 연산자' */}
            <div>작성자: {data && data.fetchBoard.writer}</div>
            {/* 조건부 렌더링의 '삼항연산자' */}
            <div>제목: {data ? data.fetchBoard.title : "로딩중..."}</div>
            {/* 조건부 렌더링의 '옵셔널체이닝' */}
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}