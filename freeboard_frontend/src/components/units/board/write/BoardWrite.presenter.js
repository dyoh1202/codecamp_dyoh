import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

    return (
        <>
            <S.Wrapper>
                <S.Title>게시물 등록</S.Title>
                <S.WriterWrapper>
                    <S.InputWrapper>
                        <S.Label>작성자</S.Label>
                        <S.Writer type="text" placeholder="이름을 입력해주세요." onChange={props.onChangeWriter} />
                        <S.Error>{props.writerError}</S.Error>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Label>비밀번호</S.Label>
                        <S.Password type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangePassword} />
                        <S.Error>{props.passwordError}</S.Error>
                    </S.InputWrapper>
                </S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>제목</S.Label>
                    <S.Subject type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeTitle} />
                    <S.Error>{props.titleError}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>내용</S.Label>
                    <S.Contents placeholder="내용을 입력해주세요." onChange={props.onChangeContents} />
                    <S.Error>{props.contentsError}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>주소</S.Label>
                    <S.ZipcodeWrapper>
                        <S.Zipcode placeholder="07925" />
                        <S.ZipcodeButton>우편번호 검색</S.ZipcodeButton>
                    </S.ZipcodeWrapper>
                    <S.Address />
                    <S.Address />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>유튜브</S.Label>
                    <S.Youtube placeholder="링크를 복사해주세요." />
                </S.InputWrapper>
                <S.ImageWrapper>
                    <S.Label>사진 첨부</S.Label>
                    <S.UploadButton>＋</S.UploadButton>
                    <S.UploadButton>＋</S.UploadButton>
                    <S.UploadButton>＋</S.UploadButton>
                </S.ImageWrapper>
                <S.OptionWrapper>
                    <S.Label>메인 설정</S.Label>
                    <S.RadioButton type="radio" name="main" id="youtube" />
                    <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
                    <S.RadioButton type="radio" name="main" id="photo" />
                    <S.RadioLabel htmlFor="photo">사진</S.RadioLabel>
                </S.OptionWrapper>
                <S.ButtonWrapper>
                    <S.RegisterButton onClick={props.onClickRegister}>등록하기</S.RegisterButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </>
    )
}