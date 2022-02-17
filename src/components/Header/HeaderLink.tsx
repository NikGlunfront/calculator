import React, { FC } from 'react';

interface HeaderLinkProps {
    children: React.ReactChild
}

const HeaderLink:FC<HeaderLinkProps> = ({children}:HeaderLinkProps) => {
    return (
        <a href='#'>
            {children}
        </a>
    );
};

export default HeaderLink;