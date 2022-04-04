import React, { useState} from "react";
import '../css/Pages.css'

const Count = () => {

    let value="";
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }
    const applyBtn = () => {
        if (value === ""){
            alert("값을 입력해 주세요!")
        }else if(value >= 0){
            setCount(count+parseInt(value))
        }else if(value < 0){
            setCount(count+parseInt(value))
        }else{
            alert("잘못된 값입니다.")
        }
    }
    const setVal = (e) => {
        value = e.target.value;
        console.log(value)
    }
    return (
        <div className='pageDiv'>
            <div className='pageContent'>
                <div style={{width:'300px', height:'auto', marginLeft:'auto', marginRight:'auto', marginTop:'150px', padding:'10px', border:'1px solid black'}}>
                    <input type='text' id='t1' onChange={setVal}/><button onClick={applyBtn}>반영</button>
                    <br/>
                    <button onClick={increase}>+</button>
                    <button onClick={decrease}>-</button>
                    <hr/>
                    <p>카운트 수:{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Count;