import {ContentsInput, SubjectInput, WriterInput} from "../../../../../styles/emotion";
import {RedInput, BlueButton} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

    return (
        <>
            <div>qqqqqq</div>
            작성자 : <RedInput type="text" placeholder="작성자를 입력하세요" onChange={props.onChangeWriter}></RedInput>
            제목 : <SubjectInput type="text" placeholder="제목을 입력하세요" onChange={props.onChangeSubject}></SubjectInput>
            내용 : <ContentsInput type="text" placeholder="내용을 입력하세요" onChange={props.onChangeContent}></ContentsInput>
            <BlueButton onClick={props.onClickSubmit}>GRAPHQL-API(동기) 요청하기</BlueButton>
        </>
    )
}