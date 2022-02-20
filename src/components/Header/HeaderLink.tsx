import React, { FC, MouseEventHandler } from 'react';

interface HeaderLinkProps {
    children: React.ReactChild
    onClick: MouseEventHandler
}

const HeaderLink:FC<HeaderLinkProps> = ({children, onClick}:HeaderLinkProps) => {
    return (
        <a href='#' onClick={onClick}>
            {children}
        </a>
    );
};

export default HeaderLink;