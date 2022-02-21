import React, { FC } from 'react';
import classes from './Section.module.css';

interface SectionTitleProps {
    children: React.ReactChild | React.ReactNode
}

const SectionTitle: FC<SectionTitleProps> = ({children}) => {
    return (
        <div className={classes.Title}>{children}</div>
    );
};

export default SectionTitle;