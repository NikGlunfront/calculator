import React, { FC } from 'react';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionTitle from '../components/Section/SectionTitle';

const Home: FC = () => {
    return (
        <main className="main">
            <Section isFirst={true}>
                <SectionTitle>Home page</SectionTitle>
                <SectionSubtitle>Home page subtitle here!</SectionSubtitle>
            </Section>
            <Section>
                <SectionBody>
                    HOME PAGE
                </SectionBody>
            </Section>
        </main>
    );
};

export default Home;