import React, { FC, useState } from 'react';
import { getAllTabs, getToken } from '../API/AdminService';
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
                    HOME
                </SectionBody>
            </Section>
        </main>
    );
};

export default Home;