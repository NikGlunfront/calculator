import React, { FC } from 'react';
import classes from './Section.module.css';

interface SectionBodyProps {
    children: React.ReactChild | React.ReactNode
}

const SectionBody: FC<SectionBodyProps> = ({children}) => {
    return (
        <div className={classes.Body}>{children}</div>
    );
};

export default SectionBody;