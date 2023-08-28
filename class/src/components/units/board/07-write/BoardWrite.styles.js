// emotion 대신 스타일 시트 역할
import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
    border-radius: 5px;
    height: 20px;
    padding: 5px 10px;
`

export const BlueButton = styled.button`
    border-radius: 5px;  
    height: 25px;
    color: ${props => props.zzz === true ? "brown" : "black"};
    font-size: ${props => props.fontSize};
    background-color: ${props => props.zzz === true ? "gold" : "default"};
`