import React from "react";
import * as S from './styled'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Home/Banner'
import Products from '../../components/Home/Products'

export default function Home() {

    return(
        <>
            <Header/>
            <S.main>
                <Banner />
                <Products />
            </S.main>
            <Footer />
        </>
    )
}