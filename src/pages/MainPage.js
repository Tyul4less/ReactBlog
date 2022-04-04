import React from 'react';
import '../css/Pages.css';
import styled from'styled-components';


const MainPage = () => {

    return (
        <div className='pageDiv'>
            <div className='pageContent' >
                <img className='contentImg'
                    src={require('../content/kisspng-logo-abstergo-industries-font-vector-graphics-bran-abstergo-logo-deviantart-bing-images-5b72dc2e5881d7.4244685215342541263625.png')}/>
                <hr/>
                <div>
                    안녕! 나는 주인장이고 언제나 방문자들을 환영해!
                </div>
                <img style={{width:'200px'}} src={require('../content/익명이 곤봉.gif')}/>
            </div>
        </div>
    )
}

export default MainPage;