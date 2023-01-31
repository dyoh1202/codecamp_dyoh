import {
    DetailWrapper,
    DetailCardWrapper,
    DetailHeader,
    DetailAvatarWrapper,
    DetailAvatar,
    DetailInfo,
    DetailWriter,
    DetailCreatedAt,
    DetailBody,
    DetailTitle,
    DetailContents,
    DetailBottomWrapper, DetailButton
} from "../../../styles/emotion-detail"
import {gql, useQuery} from "@apollo/client";
import {useRouter} from "next/router";

const FETCH_BOARD = gql `
    query fetchBoard($boardId: ID!){
      fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        youtubeUrl
        createdAt
        images
      }
    }
`
export default function boardDetailPage() {
    const router = useRouter()
    console.log(router.query)   // --> {boardId: ~ }

    const { data } = useQuery(FETCH_BOARD, {
        // useQuery를 실행할 때 variables를 넣어줘야 함.
        variables: {
            boardId: router.query.boardId
        }
    })

    const onClickMoveToList = () => {
        router.push("/")
    }

    return (
        <>
            <DetailWrapper>
                <DetailCardWrapper>
                    {/*이름이랑 아바타 위치하는 곳*/}
                    <DetailHeader>
                        <DetailAvatarWrapper>
                            <DetailAvatar src="/images/avatar.png" />
                            <DetailInfo>
                                <DetailWriter>{data && data.fetchBoard.writer}</DetailWriter>
                                <DetailCreatedAt>Date : {data && data.fetchBoard.createdAt}</DetailCreatedAt>
                            </DetailInfo>
                        </DetailAvatarWrapper>
                    </DetailHeader>
                    <DetailBody>
                        <DetailTitle>{data && data.fetchBoard.title}</DetailTitle>
                        <DetailContents>{data && data.fetchBoard.contents}</DetailContents>
                    </DetailBody>
                </DetailCardWrapper>
                <DetailBottomWrapper>
                    <DetailButton onClick={onClickMoveToList}>목록으로</DetailButton>
                    <DetailButton>수정하기</DetailButton>
                    <DetailButton>삭제하기</DetailButton>
                </DetailBottomWrapper>
            </DetailWrapper>
        </>
    )
}