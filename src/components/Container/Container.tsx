import React, { FC } from 'react';
import classes from './Container.module.css'

interface ContainerProps {
    children: React.ReactChild | React.ReactNode
}

const Container: FC<ContainerProps> = ({children}: ContainerProps) => {
    return (
        <div className={classes.Container}>
            {children}
        </div>
    );
};

export default Container;