import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import WhiteBoxWrapper from '../WhiteBoxWrapper/WhiteBoxWrapper';
import classes from './InfoBlock.module.css';

interface InfoBlockProps {
    text: string
}

const InfoBlock: FC<InfoBlockProps> = ({text}) => {
    return (
        <WhiteBoxWrapper modifyClass={classes.WrapperBox} >
            <div className={classes.Note}>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className={classes.Text}>
                <p>{text}</p>
            </div>
        </WhiteBoxWrapper>
    );
};

export default InfoBlock;