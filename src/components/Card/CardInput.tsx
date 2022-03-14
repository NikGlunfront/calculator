import React, { FC } from 'react';
import Input from '../UI/input/Input';

interface CardInputProps {
    id: string,
    name: string,
}

const CardInput: FC<CardInputProps> = ({name, id}) => {
    return (
        <Input 
            typeNum
            id={id}
            name={name} 
        />
    );
};

export default CardInput;