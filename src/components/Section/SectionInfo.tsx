import React, { FC } from 'react';
import classes from './Section.module.css';

interface SectionInfoProps {
    children: React.ReactChild | React.ReactNode
}

const SectionInfo: FC<SectionInfoProps> = ({children}) => {
    return (
        <div className={classes.Info}>{children}</div>
    );
};

export default SectionInfo;