import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
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
import {useRouter} from "next/router";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){ 
      createBoard(createBoardInput: $createBoardInput){         
        _id
      }
    }
`

export default function newBoards() {
    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ writerError, setWriterError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ titleError, setTitleError ] = useState("");
    const [ contentsError, setContentsError ] = useState("");

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const router = useRouter();

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value !== "") {
            setWriterError("")
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(event.target.value !== "") {
            setContentsError("")
        }
    }

    const onClickRegister = async () => {
        if(!writer) {
            setWriterError("작성자를 입력해주세요.")
        }
        if(!password) {
            setPasswordError("비밀번호를 입력해주세요.")
        }
        if(!title) {
            setTitleError("제목을 입력해주세요.")
        }
        if(!contents) {
            setContentsError("내용을 입력해주세요.")
        }
        if(writer && password && title && contents) {
            const result =  await createBoard({
                variables: {
                    createBoardInput: {
                        // writer: writer,
                        // password: password,
                        // title: title,
                        // contents: contents

                        // KEY와 VALUE가 같으면, VALUE를 생략할 수도 있다.
                        // == shorthand-property
                        writer,
                        password,
                        title,
                        contents
                    }
                }
            })
            console.log(result)
        }
        // router.push("/board/")
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
                <Subject type="text" placeholder="제목을 입력해주세요." onChange={onChangeTitle}></Subject>
                <Error>{titleError}</Error>
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