import React, { FC } from 'react';
import Input from '../UI/input/Input';

interface CardInputProps {
    name: string,
}

const CardInput: FC<CardInputProps> = ({name}) => {
    return (
        <Input 
            typeNum
            name={name} 
        />
    );
};

export default CardInput;