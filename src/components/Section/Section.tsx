import React, { FC } from 'react';
import Container from '../Container/Container';
import classes from './Section.module.css';

interface SectionProps {
    isFirst: boolean
    children: React.ReactChild | React.ReactNode
    yakor: string
}

const Section: FC<SectionProps> = ({isFirst, children, yakor}) => {
    return (
        <section id={yakor} className={isFirst ? classes.PageSection + " " + classes.FirstPageSection : classes.PageSection}>
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default Section;