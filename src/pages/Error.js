import React from 'react';

const Error = () => {
    return (
        <fieldset className='errorDiv'>
            <legend >에러!</legend>
            <div className='errorText'>
            <span style={{fontSize:'30px'}}>페이지가 공사중입니다.
            <img className="miningShiba" src={require("../content/pngaaa.com-326350.png")}/></span>
            </div>
        </fieldset>
    )
}

export default Error;
