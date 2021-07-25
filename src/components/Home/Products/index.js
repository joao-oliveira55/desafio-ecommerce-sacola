import React, {useState, useEffect} from "react";
import * as S from './styled'
import Produtos from "../../../products.json"


export default function Header() {
    const [products, setProducts] = useState([])
    const [itemCart, setItemCart] = useState([])
    const [totalCart, setItotalCart] = useState("")
    const [number, setNumber] = useState("")
    const [active, setActive] = useState(false)

    function handleComprar(id){

        if( itemCart.findIndex(product => Number(product.id)  === Number(id) ) === -1){
            let miniCart = []
            let product =  products.filter((prod) => Number(prod.id) === Number(id) )
            
            if(localStorage.getItem('Cart')){
                miniCart = JSON.parse(localStorage.getItem('Cart'))
                miniCart.push(product[0])

                setItemCart(miniCart)
            }
            else{
                miniCart.push(product[0])
                setItemCart(miniCart)
            }

            setItotalCart(attPrice(miniCart))
            setNumber(attNumber(miniCart))
            localStorage.setItem('Cart', JSON.stringify(miniCart))
        }
        
    }

    function handleRemove(removeId){
        let miniCart = []
        miniCart = JSON.parse(localStorage.getItem('Cart'))
        let index = miniCart.findIndex(product => Number(product.id)  === Number(removeId) )

        miniCart.splice(index,1)
        
        setItemCart(miniCart)

        setItotalCart(attPrice(miniCart))
        setNumber(attNumber(miniCart))

        localStorage.setItem('Cart', JSON.stringify(miniCart) )
    }
    
    function attQuantidade(add,id){
        let miniCart = []
        miniCart = JSON.parse(localStorage.getItem('Cart'))
    
        let index = miniCart.findIndex(product => Number(product.id)  === Number(id) )

        if(add){
            miniCart[index].qtd = parseInt(miniCart[index].qtd) + 1
        }
        else{
            if(parseInt(miniCart[index].qtd) > 1){
                miniCart[index].qtd = parseInt(miniCart[index].qtd) - 1
            }
        }
        

        setItemCart(miniCart)
        setItotalCart(attPrice(miniCart))
        setNumber(attNumber(miniCart))

        localStorage.setItem('Cart', JSON.stringify(miniCart) )
    }   

    function attPrice(res){
        let price = 0

        for(let product of res){
            price += (product.price * product.qtd)
        }

        return price
    }

    function attNumber(res){
        let number = res.length
        console.log(res)
        return number
       
    }
    

    useEffect(() => {

        setProducts(Produtos)

        let products = localStorage.getItem('Cart')
        if(products){
            setItemCart(JSON.parse(products))
            setItotalCart(attPrice(JSON.parse(products)))
            setNumber(attNumber(JSON.parse(products)))
        }else{
            setItotalCart(attPrice([]))
            setNumber(attNumber([]))
        }

        

    },[])

    return (
        <>
            <S.section>
                {
                    products.map((product) => {
                        return(
                            <>
                                <S.cardProduct className="card-product">
                                    <img src={product.url} alt={product.name} />

                                    <p className="name">{product.name}</p>

                                    <S.productInfos>
                                        <p className="price">R$ {product.price.toFixed(2).replace('.',',')}</p>
                                        <button onClick ={e => handleComprar(e.target.id) } id={product.id}>adicionar ao carrinho</button>
                                    </S.productInfos>

                                </S.cardProduct>
                            </>
                        )
                    })
                }
            </S.section>

            <S.carrinho className="carrinho" onClick={() => setActive(!active)}>
                <p>{number}</p>
                <img src={process.env.PUBLIC_URL + '/images/carrinho-de-compras.png'} alt="search" />
                <span>carrinho</span>
            </S.carrinho>

            <S.Cart className={active ? 'active' : ''}>
                <S.divTop >
                    <span>Carrinho</span>
                    <img onClick={() => setActive(!active)} src={process.env.PUBLIC_URL + '/icon/close_icon.svg'} alt="close-cart" />
                </S.divTop>

                <S.Products>
                    {
                        itemCart.length  > 0 ?
                        itemCart.map(product =>{
                            return(
                                <S.cartProduct>
                        
                                    <img src={product.url} alt={product.name} />

                                    <S.cartProductInfos>
                                        <div>
                                            <p className="name">{product.name}</p>
                                            <div className="qtd"> 
                                                <span className="menos" id={product.id} onClick={e => attQuantidade(false, e.target.id)}></span>
                                                <input id="qtd" value={product.qtd}/>
                                                <span className="mais" id={product.id} onClick={e => attQuantidade(true, e.target.id)}></span>
                                            </div>
                                            <p className="price">R$ {product.price.toFixed(2).replace('.',',')}</p>
                                        </div>

                                        <button >
                                            <img onClick ={e => handleRemove(e.target.id) } id={product.id} src={process.env.PUBLIC_URL + '/images/lixo.png'} alt="close-cart" />
                                        </button>
                                    </S.cartProductInfos>

                                </S.cartProduct>
                            )
                        }):
                        <S.CarrinhoVazio>Nenhum produto no carrinho</S.CarrinhoVazio>
                    }
                </S.Products>
                    {   
                        itemCart.length  > 0 ?
                        <>
                        
                            <S.totalPrice>
                                <p className="total"> TOTAL :  R$  {totalCart.toFixed(2).replace('.',',')} </p>
                            </S.totalPrice>

                            <S.buyButton to="/cart">
                                Comprar
                            </S.buyButton>
                        </>
                        : null
                    }
                
            </S.Cart>

        </>
    );
  }