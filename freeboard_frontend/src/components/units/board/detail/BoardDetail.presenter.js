import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
    return (
        <>
            <S.DetailWrapper>
                <S.DetailCardWrapper>
                    {/*이름이랑 아바타 위치하는 곳*/}
                    <S.DetailHeader>
                        <S.DetailAvatarWrapper>
                            <S.DetailAvatar src="/images/avatar.png" />
                            <S.DetailInfo>
                                <S.DetailWriter>{props.data && props.data.fetchBoard.writer}</S.DetailWriter>
                                <S.DetailCreatedAt>Date : {props.data && props.data.fetchBoard.createdAt}</S.DetailCreatedAt>
                            </S.DetailInfo>
                        </S.DetailAvatarWrapper>
                    </S.DetailHeader>
                    <S.DetailBody>
                        <S.DetailTitle>{props.data && props.data.fetchBoard.title}</S.DetailTitle>
                        <S.DetailContents>{props.data && props.data.fetchBoard.contents}</S.DetailContents>
                    </S.DetailBody>
                </S.DetailCardWrapper>
                <S.DetailBottomWrapper>
                    <S.DetailButton hoverBgColor="gold">목록으로</S.DetailButton>
                    <S.DetailButton>수정하기</S.DetailButton>
                    <S.DetailButton>삭제하기</S.DetailButton>
                </S.DetailBottomWrapper>
            </S.DetailWrapper>
        </>
    )
}