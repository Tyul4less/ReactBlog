import React from 'react';
import '../css/Title.scss';
import '../css/Base.scss'
import { FaReact } from 'react-icons/fa';
import { IoLogoVue } from 'react-icons/io5';
import { SiSvelte, SiJava } from 'react-icons/si';

const Head = () => {
    console.log("Head")
    return (
        <>
            <div className="title" >
                <div className="content">
                    <div className="content__container">
                        <p className="content__container__text">
                            Hello
                        </p>

                        <ul className="content__container__list">
                            <li className="content__container__list__item" style={{color:'blue'}}>React <FaReact/></li>
                            <li className="content__container__list__item" style={{color:'green'}}>VUE <IoLogoVue/></li>
                            <li className="content__container__list__item" style={{color:'orange'}}>Java <SiJava/></li>
                            <li className="content__container__list__item" style={{color:'red'}}>Svelte <SiSvelte/></li>
                        </ul>
                    </div>
                </div>
            </div>


            </>
    )
}

export default React.memo(Head);