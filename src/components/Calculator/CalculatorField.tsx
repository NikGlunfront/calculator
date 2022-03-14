import React, { FC } from 'react';
import { ICalculatorInput, ICalculatorUI } from '../../modules/ICalculator';
import CardImg from '../Card/CardImg';
import CardInput from '../Card/CardInput';
import WhiteBoxWrapper from '../WhiteBoxWrapper/WhiteBoxWrapper';
import classes from './Calculator.module.css';

interface CalculatorFieldProps {
    inputsData: ICalculatorInput[],
    textUiData: ICalculatorUI
}

const CalculatorField: FC<CalculatorFieldProps> = ({inputsData, textUiData}) => {
    return (
        <div className={classes.Field}>
            {inputsData.map(item => 
                <WhiteBoxWrapper 
                    modifyClass={classes.BoxWrapper}
                    key={item.id}
                >
                    <CardImg imgSrc={item.img} />
                    <CardInput
                        id={item.id}
                        name={item.text}
                    />
                </WhiteBoxWrapper>    
            )}
        </div>
    );
};

export default CalculatorField;