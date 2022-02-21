import React, { FC } from 'react';
import Container from '../Container/Container';
import classes from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footer__content}>
                    <p style={{fontSize: '13px', fontWeight: '700'}}>Equilibrium Calculator</p>
                    <p style={{fontSize: '10px'}}>Calculator v2.0.1</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;