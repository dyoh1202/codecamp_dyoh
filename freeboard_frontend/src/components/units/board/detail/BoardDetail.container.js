import BoardDetailUI from "./BoardDetail.presenter";
import {FETCH_BOARD} from "./BoardDetail.queries";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";

export default function BoardDetail() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        // useQuery를 실행할 때 variables를 넣어줘야 함.
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <>
            <BoardDetailUI
                data={data}
            />
        </>
    )
}