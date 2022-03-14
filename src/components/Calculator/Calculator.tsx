import React, { FC } from 'react';
import classes from './Calculator.module.css';

interface CalculatorProps {
    children: React.ReactChild | React.ReactNode
}

const Calculator: FC<CalculatorProps>= ({children}) => {
    return (
        <div className={classes.CalculatorBlock}>
            {children}
        </div>
    );
};

export default Calculator;