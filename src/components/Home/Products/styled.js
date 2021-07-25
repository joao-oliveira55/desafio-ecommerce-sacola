import styled from "styled-components"
import { Link } from "react-router-dom"

export const section = styled.section`
    width: 80%;
    display: grid;
    max-width: 1300px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    img{
        width: 100%;
    }
`

export const cardProduct = styled.div`
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: center;

    &:hover{
        background-color: #f6f6f6;
    }

    img{
        mix-blend-mode: multiply;
    }

    .name{
        font-size: 13px;
        width: 100%;
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
    z-index: 3;

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
    height: 75vh;
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
    .qtd{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .qtd input{
        text-align: center;
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
        width: 25px;
        height: 25px;
    }

    img{
        width: 20px;
        height: 20px;

        cursor: pointer;
    }

`

export const carrinho = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    top: 18px;
    right: 50px;
    z-index: 2;

    img{
        width: 22px;
    }
    span{
        font-size: 14px;
    }
    p{
        position: absolute;
        background: #007958;
        color: white;
        font-size: 11px;
        padding: 2px;
        border-radius: 27px;
        width: 11px;
        height: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -7px;
        right: 0;
    }

`

export const buyButton = styled(Link)`

    height: 50px;
    background-color: #007958;
    width: 80%;
    margin: 0 auto;
    color: white;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    
`

export const totalPrice = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;

    .total{
        font-size: 20px;
        color: #007958;
        font-weight: 600;
    }

`

export const CarrinhoVazio = styled.div`

    margin-top: 30vh;
    font-size: 20px;
    text-align: center;

`



