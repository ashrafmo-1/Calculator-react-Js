import './App.css';
import {useState, useEffect} from "react";
import { NumericFormat } from 'react-number-format';

function App() {
    const [valueNum, setValueNum] = useState('');

    const operation = (e) => {
        setValueNum(valueNum + e.target.value)
    }

  return (
    <div className="App">
      <div className={'container'}>
        <div className={'calc'}>
            <h2>calculator</h2>
          <form>
                  <input type={'text'} value={valueNum} placeholder={'0'} />
              <div>
                  <input type={'button'} value={'AC'} onClick={ele => setValueNum('')} />
                  <input type={'button'} value={'X'} onClick={ele => setValueNum(valueNum.slice(0, -1))} />
                  <input type={'button'} value={'/'} onClick={operation} />
                  <input type={'button'} value={'*'} onClick={operation} />
              </div>
              <div>
                  <input type={'button'} value={'7'} onClick={operation} />
                  <input type={'button'} value={'8'} onClick={operation}  />
                  <input type={'button'} value={'9'} onClick={operation} />
                  <input type={'button'} value={'-'} onClick={operation} />
              </div>
              <div>
                  <input type={'button'} value={'4'} onClick={operation} />
                  <input type={'button'} value={'5'} onClick={operation} />
                  <input type={'button'} value={'6'} onClick={operation} />
                  <input type={'button'} value={'+'} onClick={operation} />
              </div>
              <div>
                  <input type={'button'} value={'1'} onClick={operation} />
                  <input type={'button'} value={'2'} onClick={operation} />
                  <input type={'button'} value={'3'} onClick={operation} />
                  <input type={'button'} value={'='} className={'equal'} onClick={ele => setValueNum(eval(valueNum))} />
              </div>
              <div>
                  <input type={'button'} value={'0'} className={'zero'}  onClick={operation} />
                  <input type={'button'} value={'.'}  onClick={operation} />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;