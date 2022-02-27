import React, { FC } from 'react';
import classes from './Card.module.css';

interface CardImageProps {
    imgSrc?: string,
    description?: string,
}

const CardImg: FC<CardImageProps> = ({description, imgSrc}) => {
    return (
        <div>
            <div className={classes.ImgContainer}>
                {imgSrc && <img src={imgSrc} alt={description} />}
            </div>
        </div>
    );
};

export default CardImg;