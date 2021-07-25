import styled from "styled-components"
import { Link } from "react-router-dom"

export const header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    position: fixed;
    background: white;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #e8e8e8;

    
    p{
        margin: 0 25px;
    }
  
`
export const Logo = styled(Link)`
    img{
        margin: 0 25px;
    }
`

export const form = styled.div`
    max-width: 29.375rem!important;
    background-color: #f4f4f4;
    width: 35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 45px;
    border-radius: 8px;

    img{
        width: 26px;
    }

`
export const formInput = styled.input`
    border: 0;
    background: transparent;
    outline: none;
    font-size: 16px;
    width: 70%;

    @media screen and (max-width: 600px) {
        img{
            width: 130px;
        }
    }
`
