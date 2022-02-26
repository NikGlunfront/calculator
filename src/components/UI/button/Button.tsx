import React, { FC } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    classModify?: string,
    children: React.ReactChild | React.ReactNode
}

const Button: FC<ButtonProps> = ({children, classModify, onClick}) => {
    const initClass = classes.Button;
    const modifyClass = classes.Button + classModify
    return (
        <button onClick={onClick} className={classModify ? modifyClass : initClass}>
            {children}
        </button>
    );
};

export default Button;