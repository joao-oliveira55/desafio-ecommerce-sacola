import React from "react";
import * as S from './styled'

export default function Header() {
    return (
        <S.Footer>
            <h2>Siga a Toks Tok</h2>

            <div>
                <img  src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="tiwter" />
                <img  src={process.env.PUBLIC_URL + '/images/pinterest.png'} alt="pinterest" />
                <img  src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="facebookt" />
                <img  src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="instagram" />
            </div>
        </S.Footer>
    );
  }