import React, { FC } from 'react';
import classes from './Section.module.css';

interface SectionSubtitleProps {
    children: React.ReactChild | React.ReactNode
}

const SectionSubtitle: FC<SectionSubtitleProps> = ({children}) => {
    return (
        <div className={classes.SubTitle}>{children}</div>
    );
};

export default SectionSubtitle;