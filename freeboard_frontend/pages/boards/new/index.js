import { useState } from "react"
import {
    Wrapper,
    Title,
    InputWrapper,
    Label,
    WriterWrapper,
    RadioLabel,
    Writer,
    Password,
    Subject,
    Contents,
    ZipcodeWrapper,
    Zipcode,
    ZipcodeButton,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    ButtonWrapper,
    RadioButton,
    RegisterButton,
    Error
} from '../../../styles/emotion'


export default function newArticle() {
    
    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ writerError, setWriterError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ subjectError, setSubjectError ] = useState("");
    const [ contentsError, setContentsError ] = useState("");

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if(writer !== "") {
            setWriterError("")
        }
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
        if(password !== "") {
            setPasswordError("")
        }
    }

    function onChangeSubject(event) {
        setSubject(event.target.value)
        if(subject !== "") {
            setSubjectError("")
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(contents !== "") {
            setContentsError("")
        }
    }

    function onClickRegister() {
        if(!writer) {
            setWriterError("작성자를 입력해주세요.")
        }
        if(!password) {
            setPasswordError("비밀번호를 입력해주세요.")
        }
        if(!subject) {
            setSubjectError("제목을 입력해주세요.")
        }
        if(!contents) {
            setContentsError("내용을 입력해주세요.")
        }
        if(writer && password && subject && contents) {
            alert("게시글이 등록되었습니다.")
        }
    }

    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 입력해주세요." onChange={onChangeWriter}></Writer>
                    <Error>{writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}></Password>
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 입력해주세요." onChange={onChangeSubject}></Subject>
                <Error>{subjectError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder="내용을 입력해주세요." onChange={onChangeContents}></Contents>
                <Error>{contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode placeholder="07925" />
                    <ZipcodeButton>우편번호 검색</ZipcodeButton>
                </ZipcodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."></Youtube>
                <Error></Error>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진 첨부</Label>
                <UploadButton>＋</UploadButton>
                <UploadButton>＋</UploadButton>
                <UploadButton>＋</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio" name="main" id="youtube" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" name="main" id="photo" />
                <RadioLabel htmlFor="photo">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <RegisterButton onClick={onClickRegister}>등록하기</RegisterButton>
            </ButtonWrapper>
        </Wrapper>
    )
}