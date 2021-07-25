import styled from "styled-components"
import { Link } from "react-router-dom"

export const section = styled.section`
    width: 100%;
    display: grid;
    gap: 20px;
    max-width: 1200px;
    grid-template-columns: 1.8fr 1fr;
    
    img{
        width: 100%;
    }
`

export const Table = styled.div`
    max-width: 100%;
    width: 100%;
`
export const topTable = styled.div`

    nav{
        display: flex;
        width: 100%;
    }
    .produto{
        flex-basis: 46%;
    }
    div{
        flex-basis: 14%;
    }
    
`
export const bodyTable = styled.div`
    
    .image{
        flex-basis: 14%;
    }
    .name{
        flex-basis: 33%;
    }
    div{
        flex-basis: 14%;
    }
    nav{
        display: flex;
        background-color: #f4f4f4;
        border-radius: 10px;
        height: 120px;
        align-items: center;
        margin: 10px 0;
        position: relative;
    }
    img{
        mix-blend-mode: multiply;
        width: 80px;
        height: 80px;
        max-width: none;
    }
    .qtd{
        display: flex;
        align-items: center;
    }
    .qtd input{
        text-align:center;
        border: 1px solid black;
        border-radius: 4px;
        width: 24px;
        height: 20px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 7px;
    }
    .qtd span{
        width: 16px;
        height: 16px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }
    .qtd .mais:after{
        content: "+";
        position: absolute;
        font-size: 15px;
        top: -3px;
        left: 2.5px
            
    }
    .qtd .menos:after{
        content: "-";
        position: absolute;
        font-size: 15px;
        top: -3px;
        left: 4.5px
    }
    button{
        background: transparent;
        border: 0;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    button img{
        width: 100%;
        height: inherit;
    }
`
export const salvarContato = styled.div`

    button{
        margin: 10px 0;
        height: 43px;
        width: 54%;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        background: #0f795d;
        border: none;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
`
export const Fildset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 0;
    margin-bottom: 10px;
    
    label{
        font-size: 14px;
    }
    input{
        width: 64%;
        height: 45px;
        max-width: 100%;
        font-size: 16px;
        padding: 0 15px;
        box-shadow: none!important;
        transition: border 1.5s ease-in-out;
        background: none!important;
        font-family: Margem,serif;
        font-weight: 500;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    span{
        color: red;
        font-size: 13px;
        height: 10px;
    }
`

export const buyDiv = styled.div`

    border: 1px solid #ebebeb;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    div{
        display: flex;
        width: 90%;
        font-size: 28px;
        font-weight: 600;
        justify-content: space-between;
    }

    button{
        height: 60px;
        width: 80%;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        background: #0f795d;
        border: none;
        padding: 0;
        line-height: 60px;
        box-shadow: none;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        transition: all 195ms ease-in-out;
        -ms-flex-order: 3;
        order: 3;
        margin: 15px
    }
    
`


export const productInfos = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;

    p{
        font-size: 14px;
    }

    button{
        width: 5.4375rem;
        height: 2.1rem;
        max-width: 5.3rem;
        max-height: 2.1rem;
        font-weight: 700;
        color: #007958;
        padding: .375rem .1rem;
        text-align: center;
        font-size: .7rem;
        cursor: pointer;
        line-height: .7rem;
        border-radius: .375rem;
        border: .063rem solid #007a57;
    }

`

export const Cart = styled.div`
    width: 350px;
    position: fixed;
    top: 0;
    height: 100vh;
    background: white;
    right: 0;
    transform: translateX(400px);
    transition: 400ms;

    &.active{
        transform: translateX(0);
    }
`


export const divTop = styled.div`
    display: flex;
    background: #009845;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    padding: 0 21px;

    span{
        color: white;
    }
    img{
        width: 25px;
        cursor: pointer;
    }
`
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: auto;
`

export const cartProduct = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    height: 143px;

    img{
        width: 100px;
        margin-right: 5px;
    }
`

export const cartProductInfos = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;

    
    .name{
        font-size: 14px;
        margin-top: 10px;
    }
    .price{
        margin-top: 21px;
        font-size: 15px;
        color: #009845;
        font-weight: 600;
    }
    button{
        background: transparent;
        border: 0;
        width: 25px;
        height: 25px;
    }

    img{
        width: 20px;
        height: 20px;

        cursor: pointer;
    }

`



export const totalPrice = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-around;

    .total{
        font-size: 20px;
        color: #007958;
        font-weight: 600;
    }

`
export const CarrinhoVazio = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 40px;
    }

    p{
       margin: 30px;
       font-size: 15px;
    }

`
export const LinkHome = styled(Link)`

    height: 60px;
    width: 225px;
    background: #0f795d;
    border: none;
    padding: 0;
    line-height: 60px;
    box-shadow: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    transition: all 195ms ease-in-out;
    -ms-flex-order: 3;
    order: 3;
    margin: 35px 0 70px;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;

`

