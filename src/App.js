import './App.css';
import {useState, useEffect} from "react";
import { NumericFormat } from 'react-number-format';

function App() {

const [preState, setPreState] = useState('')
const [currState, setCurrState] = useState('')
const [input, setInput] = useState('')
const [operator, setOperator] = useState(null)
const [total, setTotal] = useState(false)

    const inputNumber = (num) =>{
        if(currState.includes('.') && num.target.innerText === '.') return
        if (total) setPreState('')

        currState ? setCurrState((prev) => prev + num.target.innerText) : setCurrState(num.target.innerText);
    }
    useEffect(() => {
        setInput(currState)
    }, [currState]);

    useEffect(() => {
        setInput('')
    }, []);

    // clear calc screen
    const removeNums = (e) => {
        setPreState('0')
        setCurrState('')
        setInput('')
    }

    const backspace = () => {
        setCurrState(currState.slice(0, -1))
    }

    const operatorType = (e) => {
        setTotal(false);
        setCurrState((prev) => prev +  e.target.innerText)
        setOperator(e.target.innerText)
        if(currState === '') return
        if(preState !== '') {
            equals()
        }
        setPreState(currState)
        setCurrState('')
    }

    // start calculation Operator
    const equals = (e) => {
        if(e?.target.innerText === '=') {
            setTotal(true)
        }

        let calc
        switch(operator) {
            case '/':
                calc = String(parseFloat(preState) / parseFloat(currState));
                break;

            case '*':
                calc = String(parseFloat(preState) * parseFloat(currState));
                break;

            case '+':
                calc = String(parseFloat(preState) + parseFloat(currState));
                break;

            case '-':
                calc = String(parseFloat(preState) - parseFloat(currState));
                break;
        }
                setInput('');
                setPreState(calc);
                setCurrState('')

    }

  return (
    <div className="App">
      <div className={'container'}>
        <div className={'calc'}>
            <div className={'screen'}>
                {input !== "" || input === "0" ? (
                    <NumericFormat
                        value={input}
                        displayType={"text"}
                        thousandSeparator={true}
                    />
                ) : (
                    <NumericFormat
                        value={preState}
                        displayType={"text"}
                        thousandSeparator={true}
                    />
                )}
            </div>

            <div className={'btn control'} onClick={removeNums}>AC</div>
            <div className={'btn control'} onClick={backspace}>x</div>
            <div className={'btn control'} onClick={operatorType}>/</div>
            <div className={'btn control'} onClick={''}>%</div>

            <div className={'btn'} onClick={inputNumber}>7</div>
            <div className={'btn'} onClick={inputNumber}>8</div>
            <div className={'btn'} onClick={inputNumber}>9</div>
            <div className={'btn control'} onClick={operatorType}>*</div>

            <div className={'btn'} onClick={inputNumber}>4</div>
            <div className={'btn'} onClick={inputNumber}>5</div>
            <div className={'btn'} onClick={inputNumber}>6</div>
            <div className={'btn control'} onClick={operatorType}>+</div>

            <div className={'btn'} onClick={inputNumber}>3</div>
            <div className={'btn'} onClick={inputNumber}>2</div>
            <div className={'btn'} onClick={inputNumber}>1</div>
            <div className={'btn control'} onClick={operatorType}>-</div>

            <div className={'btn'} onClick={inputNumber}>0</div>
            <div className={'btn'} onClick={inputNumber}>.</div>
            <div className={'btn equal control'} onClick={equals}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;