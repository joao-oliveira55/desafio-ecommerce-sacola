import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-top: 20px;

    h2{
        font-size: 20px;
        margin: 10px 0;
    }
    div{
        width: 100%;
        display: flex;
        justify-content:center ;
        margin-bottom: 30px;
    }

    img{
        width: 40px;
        padding: 0px 6px;
        cursor: pointer;
    }

`