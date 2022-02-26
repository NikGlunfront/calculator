import React, { FC } from 'react';
import classes from './Input.module.css';

interface InputProps {
    value?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,

}

const Input: FC<InputProps> = ({onChange, value}) => {
    return (
        <div className={classes.InputContainer}>
            <input
                value={value}
                onChange={onChange}
                type="text"  
                autoComplete='off'
        />
        </div>
    );
};

export default Input;