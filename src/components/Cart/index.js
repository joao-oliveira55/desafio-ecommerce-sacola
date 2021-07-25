import React, {useState, useEffect} from "react";
import * as S from './styled'

export default function Header() {
    const [products, setProducts] = useState([])
    const [totalCart, setItotalCart] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [cep, setCep] = useState("")
    const [adress, setAdress] = useState("")

    const [message, setMessage] = useState(["","","","",""])

    function attPrice(res){
        let price = 0

        for(let product of res){
           price += (product.price * product.qtd)
        }
        return price
    }
    
    function removeCard(id){
        let miniCart = []
        miniCart = JSON.parse(localStorage.getItem('Cart'))
        let index = miniCart.findIndex( product => Number(product.id)  === Number(id) )

        miniCart.splice(index,1)
        
        setProducts(miniCart)
        setItotalCart(attPrice(miniCart))

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
        
        console.log(id)
        setProducts(miniCart)
        setItotalCart(attPrice(miniCart))

        localStorage.setItem('Cart', JSON.stringify(miniCart) )
    }   

    function submitCliente(e){
        e.preventDefault();

        let messageValidate = ['','','','','']

        if(name.length < 5){
            messageValidate[0] = "digite seu nome completo"

        }
        else{
            messageValidate[0] = ""
        }

        if(parseInt(cpf.length)  !== 11 ){
            messageValidate[1] = "CPF incorreto"

        }
        else{
            messageValidate[1] = ""
        }

        if(cep.length !== 8){
            messageValidate[2] = "CEP incorreto"

        }
        else{
            messageValidate[2] = "" 
        }
        if(adress.length < 6){
            messageValidate[3] = "endereço incorreto"

        }else{
            messageValidate[3] = ""
        }

        setMessage(messageValidate)
        
        if(messageValidate[0] === "" && messageValidate[1] === "" && messageValidate[2] === "" && messageValidate[3] === "" ){
            messageValidate[4] = "Cadastro realizado com sucesso"
            let client = [
                {
                    "name": name,
                    "email":email,
                    "cpf": cpf,
                    "cep": cep,
                    "adress": adress

                }
            ]
            localStorage.setItem('Client', JSON.stringify(client))
        }
    }

    function finalizarCompra(){
        let cliente =  localStorage.getItem('Client')
        let products = localStorage.getItem('Cart')

        let minicart = []

        if(cliente){
            let pedido = {
                "cliente" : JSON.parse(cliente),
                "produto" : JSON.parse(products) 
            }
            window.alert("Pedido Ralizado com sucesso")

            localStorage.setItem('Cart', minicart)
            localStorage.setItem('Pedido', JSON.stringify(pedido))
            window.location.href = "/";
            
        }else{
            window.alert("Realise seu cadastro")
        }
    }

    useEffect(() => {

        let products = localStorage.getItem('Cart')

        setProducts(JSON.parse(products))
        setItotalCart(attPrice(JSON.parse(products)))

    },[])

    return (

        products.length > 0 ?
        <>  
            <S.section >
                <S.Table>
                    <S.topTable>
                        <nav>
                            <div className="produto">Produto</div>
                            <div>QTD</div>
                            <div>Unitário</div>
                            <div>Total</div>
                        </nav>
                    </S.topTable>
                    <S.bodyTable>
                    {
                        products.map((product) =>{
                            return(
                                <>
                                    <nav>
                                        <div className="image" ><img src={product.url} alt={product.name} /></div>
                                        <div className="name"><p >{product.name}</p></div>
                                        <div className="qtd"> 
                                            <span className="menos" id={product.id} onClick={e => attQuantidade(false, e.target.id)}></span>
                                            <input id="qtd" value={product.qtd}/>
                                            <span className="mais" id={product.id} onClick={e => attQuantidade(true, e.target.id)}></span>
                                        </div>
                                        <div><p className="price">R$ {product.price.toFixed(2).replace('.',',')}</p></div>
                                        <div><p className="price">R$ {(product.price * product.qtd).toFixed(2).replace('.',',')}</p></div>
                                        <button>
                                            <img id={product.id} onClick={e => removeCard(e.target.id)} src={process.env.PUBLIC_URL + '/images/lixo.png'} alt="close-cart" />
                                        </button>
                                    </nav>
                                </>
                            )
                        })
                    }
                
                </S.bodyTable>

                </S.Table>

                <S.salvarContato>
                    <form method="POST" onSubmit={ e =>submitCliente(e)}>
                        <S.Fildset>
                            <label for="name">Nome</label>
                            <input type="text"  id="name" value={name} name="name" onChange= {e => setName(e.target.value)} required/>
                            <span>{message[0]}</span>
                        </S.Fildset>
                        <S.Fildset>
                            <label for="email">Email</label>
                            <input type="email" id="email" value={email}  name="email" onChange= {e => setEmail(e.target.value)} required/>
                        </S.Fildset>
                        <S.Fildset>
                            <label for="cpf">CPF</label>
                            <input  type="number" id="cpf" value={cpf}  name="cpf" onChange= {e => setCPF(e.target.value)}  required/>
                            <span>{message[1]}</span>
                        </S.Fildset>
                        <S.Fildset>
                            <label for="cep">CEP</label>
                            <input type="number" id="cep" value={cep}  name="cep" onChange= {e => setCep(e.target.value)}  required/>
                            <span>{message[2]}</span>
                        </S.Fildset>
                        <S.Fildset>
                            <label for="adress">Enredeço</label>
                            <input type="text" id="adress" value={adress}  name="adress" onChange= {e => setAdress(e.target.value)} required/>
                            <span>{message[3]}</span>
                        </S.Fildset>

                        <button type="submit">Salvar Cadastro</button>

                        <span>{message[4]}</span>
                    </form>

                    <S.buyDiv>
                        <div>
                            <p >Total</p>
                            <p>R$ {totalCart.toFixed(2).replace('.',',')}</p>
                        </div>
                        <button onClick={() => finalizarCompra()}>Fechar pedido</button>
                    </S.buyDiv>
                </S.salvarContato>
            
            </S.section>
        </>
        :
        <S.CarrinhoVazio>
            <h1>Seu carrinho está vazio</h1>
            <p>Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</p>
            <S.LinkHome to="/" >
                Continuar comprando
            </S.LinkHome>
        </S.CarrinhoVazio>

    );
  }