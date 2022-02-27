import React, { FC } from 'react';
import classes from './WhiteBoxWrapper.module.css';

interface WhiteBoxWrapperProps {
    children: React.ReactChild | React.ReactNode,
    modifyClass?: string,
}

const WhiteBoxWrapper: FC<WhiteBoxWrapperProps> = ({children, modifyClass}) => {
    const initClassName = classes.Wrapper
    const newClassList = classes.Wrapper + " " + modifyClass
    return (
        <div 
            className={modifyClass ? newClassList : initClassName}
        >
            {children}
        </div>
    );
};

export default WhiteBoxWrapper;