import React, { FC } from 'react';
import { IHeaderLink } from '../../modules/IHeaderLink';
import Container from '../Container/Container';
import classes from './Header.module.css';
import HeaderLink from './HeaderLink';

interface HeaderProps {
    links: IHeaderLink[]
}

const Header: FC<HeaderProps> = ({links}) => {

    return (
        <header className={classes.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>

                    {links.map(link => 
                        <HeaderLink key={link.id} onClick={link.onClick}>
                            {link.text}
                        </HeaderLink>    
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;