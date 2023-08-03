import { useState } from 'react'


import './index.css'

// const numbers = [
//     {id: 1,
//     number:1,
//     value:'1'
//     },
//     {id: 2,
//     number:2,
//     value:'2'
//     },
//     {id: 3,
//     number:3,
//     value:'3'
//     },
//     {id: 4,
//     number:"/",
//     value:'/'
//     },
//     {id: 5,
//     number:4,
//     value:'4'
//     },
//     {id: 6,
//     number:5,
//     value:'5'
//     },
//     {id: 7,
//     number:6,
//     value:'6'
//     },
//     {id: 8,
//     number:"x",
//     value:'x'
//     },
//     {id: 9,
//     number:7,
//     value:'7'
//     },
//     {id: 10,
//     number:8,
//     value:'8'
//     },
//     {id: 11,
//     number:9,
//     value:'9'
//     },
//     {id: 12,
//     number:"-",
//     value:'-'
//     },
//     {id: 13,
//     number:0,
//     value:'0'
//     },
//     {id: 14,
//     number:".",
//     value:'.'
//     },
//     {id: 15,
//     number:"+",
//     value:'+'
//     },
//     // {id: 16,
//     // number:"=",
//     // value:'='
//     // },

// ]

const Calculator = () =>{
    const [number,setNumber] = useState('')
    const [result,setResult] = useState(0)

    const setOne = () =>{
        setNumber(number+"1")
    }

    const setTwo = () =>{
        setNumber(number+"2")
    }

    const setThree = () =>{
        setNumber(number+"3")
    }
    const setDivid = () =>{
        setNumber(number+"/")
    }
    const setFour = () =>{
        setNumber(number+"4")
    }
    const setFive = () =>{
        setNumber(number+"5")
    }
    const setSix = () =>{
        setNumber(number+"6")
    }
    const setMultipl = () =>{
        setNumber(number+"*")
    }
    const setSeven = () =>{
        setNumber(number+"7")
    }
    const setEignt = () =>{
        setNumber(number+"8")
    }
    const setNine = () =>{
        setNumber(number+"9")
    }
    const setSub = () =>{
        setNumber(number+"-")
    }
    const setZero = () =>{
        setNumber(number+"0")
    }
    const setDot = () =>{
        setNumber(number+".")
    }
    const setAdd = () =>{
        setNumber(number+"+")
    }

    const resultButton = () =>{
        setResult(eval(number))
    }
 

 


    return(
        <div className='app_container'>
        <h1 className='heading'>Calculator</h1>
        <div className='container'>
            <div className='result_container'>
            <input type='text'  className='result_input'
            value={number}
            />
            <p>{result}</p>
            </div>
          
            <ul className='ul'>
                    <button className='result_button' type='button' onClick={setOne}>1</button>
                    <button className='result_button' type='button' onClick={setTwo}>2</button>
                    <button className='result_button' type='button' onClick={setThree}>3</button>
                    <button className='result_button' type='button' onClick={setDivid}>/</button>
                    <button className='result_button' type='button' onClick={setFour}>4</button>
                    <button className='result_button' type='button' onClick={setFive}>5</button>
                    <button className='result_button' type='button' onClick={setSix}>6</button>
                    <button className='result_button' type='button' onClick={setMultipl}>x</button>
                    <button className='result_button' type='button' onClick={setSeven}>7</button>
                    <button className='result_button' type='button' onClick={setEignt}>8</button>
                    <button className='result_button' type='button' onClick={setNine}>9</button>
                    <button className='result_button' type='button' onClick={setSub}>-</button>
                    <button className='result_button' type='button' onClick={setZero}>0</button>
                    <button className='result_button' type='button' onClick={setDot}>.</button>
                    <button className='result_button' type='button' onClick={setAdd}>+</button>
                    <button className='result_button' type='button' onClick={resultButton}>=</button>
                </ul>
        </div>
        </div>

    )
}

export default Calculator