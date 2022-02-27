import React, { FC, useState } from 'react';
import classes from './Input.module.css';

interface InputProps {
    name: string,
    typeText?: true
    typeNum?: true
}

const Input: FC<InputProps> = ({name, typeNum, typeText}) => {
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
            {typeText && 
                <input
                    value={value}
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInpuBlur}
                    type='text'
                    autoComplete='off'
                />
            }
            {typeNum && 
                <input
                    value={value}
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInpuBlur}
                    type='number'
                    inputMode='numeric'
                    autoComplete='off'
                />
            }
            <label>{name}</label>
        </div>
    );
};

export default Input;