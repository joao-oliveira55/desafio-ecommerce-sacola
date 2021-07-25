import React from "react";
import * as S from './styled'


import Header from '../../components/HeaderCart'
import Footer from '../../components/Footer'
import Products from '../../components/Cart'

export default function Home() {

    return(
        <>
            <Header/>
            <S.main>
                <Products />
            </S.main>
            <Footer />
        </>
    )
}