import React, { useState } from 'react'
import Button from '../components/button/Button'
import Display from '../components/display/Display'
import './Calculator.css'




export default props => {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operator, setOperator] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)


    // 

    const cleanDisplay = e => {
        if (e === 'A/C') {
            setDisplayValue('0')
            setCurrent(0)
        }


    }
    
    const setOperation = e => {
        if (current === 0) {
            setCurrent(1)
            setClearDisplay(true)
            setOperator(e)
        } else {
            const equals = e === '='
            const currentOperator = operator
            
            const auxValues = values
            switch (currentOperator) {
                case '/':
                    auxValues[0] = auxValues[0] / auxValues[1]
                    auxValues[1] = 0
    
                    break;
                case '*':
                    auxValues[0] = auxValues[0] * auxValues[1]
                    auxValues[1] = 0
                    break;
                case '-':
                    auxValues[0] = auxValues[0] - auxValues[1]
                    auxValues[1] = 0
                    break;
                case '+':
                    auxValues[0] = auxValues[0] + auxValues[1]
                    auxValues[1] = 0
                    break;
              
                default:
    
                    break;
            }

            setDisplayValue(auxValues[0])
            setOperator(equals ? null : operator)
            setCurrent(equals ? 0 : 1)
            setClearDisplay(true)
            setValues(auxValues)

        }

        console.log(e);

    }
    const addNum = e => {
        setDisplayValue(e)

        if (e === '.' && displayValue.includes('.')) {
            return
        }
        const limparDisplay = displayValue === '0' || clearDisplay


        const currentValue = limparDisplay ? '' : displayValue


        const valorDisplay = currentValue + e


        setDisplayValue(valorDisplay)


        setClearDisplay(false)


        // const auxValues = values
        // auxValues[current] = parseFloat(valorDisplay)
        // setValues(auxValues)
        // console.log(values);

        if (e !== '.') {
            const auxValues = values
            auxValues[current] = parseFloat(valorDisplay)
            setValues(auxValues)
            console.log(values);

        }





    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Button label="A/C" triple Click={cleanDisplay} />
            <Button label="/" operation Click={setOperation} />
            <Button label="7" Click={addNum} />
            <Button label="8" Click={addNum} />
            <Button label="9" Click={addNum} />
            <Button label="*" operation Click={setOperation} />
            <Button label="4" Click={addNum} />
            <Button label="5" Click={addNum} />
            <Button label="6" Click={addNum} />
            <Button label="-" operation Click={setOperation} />
            <Button label="1" Click={addNum} />
            <Button label="2" Click={addNum} />
            <Button label="3" Click={addNum} />
            <Button label="+" operation Click={setOperation} />
            <Button label="0" double Click={addNum} />
            <Button label="." Click={addNum} />
            <Button label="=" operation Click={setOperation} />
        </div>
    )
}