import React, { FC } from 'react';
import classes from './Card.module.css';

interface CardProps {
    children: React.ReactChild | React.ReactNode
}

const Card: FC = ({children}) => {
    return (
        <div className={classes.Wrapper}>
            {children}
        </div>
    );
};

export default Card;