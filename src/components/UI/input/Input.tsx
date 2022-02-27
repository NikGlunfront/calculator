import React, { FC, useState } from 'react';
import classes from './Input.module.css';

interface InputProps {
    name: string,

}

const Input: FC<InputProps> = ({name}) => {
    const [value, setValue] = useState<string>(name)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onInputFocus = () => {
        setValue('')
    }

    const onInpuBlur = () => {
        if (value.length === 0) {
            setValue(name)
        }
    }
    return (
        <div className={classes.InputContainer}>
            <input
                value={value}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInpuBlur}
                type="text"  
                autoComplete='off'
            />
            <label>{name}</label>
        </div>
    );
};

export default Input;