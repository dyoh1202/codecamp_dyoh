import { useState } from "react"
import { Emailerror } from "../../styles/emotion"

export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailerror] = useState("")

    // 이벤트 핸들러 함수
    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup() {
        console.log(email)
        console.log(password)

        // 검증하기
        if(email.includes("@") === false) {
            setEmailerror("이메일 형식이 올바르지 않습니다.")
        } else {
            // alert 이전 먼저 Backend에 있는 API 요청하기


            setEmailerror("회원가입이 완료되었습니다.")
        }
    }

    return (
        <>
            이메일 : <input type="text" onChange={onChangeEmail} />
            <Emailerror>{emailError}</Emailerror>
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}