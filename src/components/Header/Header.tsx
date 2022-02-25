import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { useAuthActions } from '../../hooks/redux/useActions';
import { IHeaderLink } from '../../modules/IHeaderLink';
import { allStates } from '../../store/customSelector';
import Container from '../Container/Container';
import classes from './Header.module.css';
import HeaderLink from './HeaderLink';

interface HeaderProps {
    links: IHeaderLink[]
}

const Header: FC<HeaderProps> = ({links}) => {
    const {setIsLogged} = useAuthActions()
    const {auth} = useAppSelector(allStates.authState)

    const logout = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsLogged(false)
    }

    return (
        <header className={classes.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {auth && <a href='#'>NIKITA</a>}
                    {auth && <a 
                        onClick={logout}
                        href="#"
                    >
                        Выйти
                    </a>
                    }   

                    {/* {links.map(link => 
                        <HeaderLink key={link.id} onClick={link.onClick}>
                            {link.text}
                        </HeaderLink>    
                    )} */}
                </div>
            </Container>
        </header>
    );
};

export default Header;