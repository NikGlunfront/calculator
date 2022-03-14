import React, { FC, useState } from 'react';
import classes from './Input.module.css';

interface InputProps {
    id: string,
    name: string,
    typeText?: true
    typeNum?: true
}

const Input: FC<InputProps> = ({name, typeNum, typeText, id}) => {
    const [value, setValue] = useState<string>(name)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onInputFocus = () => {
        setValue('')
    }

    const onInpuBlur = () => {
        if (value.length === 0) {
            if (typeNum) {
                setValue('0')
            } else {
                setValue(name)
            }
        }
    }
    return (
        <div className={classes.InputContainer}>
            {typeText && 
                <input
                    value={value}
                    name={id}
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInpuBlur}
                    type='text'
                    autoComplete='off'
                    placeholder={name}
                />
            }
            {typeNum && 
                <input
                    value={value}
                    name={id}
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInpuBlur}
                    type='number'
                    inputMode='numeric'
                    autoComplete='off'
                    placeholder={name}
                />
            }
            <label>{name}</label>
        </div>
    );
};

export default Input;