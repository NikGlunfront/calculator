import React, { FC } from 'react';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import PartnersBlock from '../components/PartnersBlock/PartnersBlock';
import PreviewSection from '../components/Section/PreviewSection';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import { DATA_CHARM } from '../data/charm';
import { useAppSelector } from '../hooks/redux/redux';
import { allStates } from '../store/customSelector';

const Charm: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    return (
        <main className="main">
            <PreviewSection
                title={DATA_CHARM.title[language].title}
                subtitle={DATA_CHARM.title[language].subtitle}
            />

            <Section>
                <SectionBody>
                    <div className='text-row'>
                        {DATA_CHARM.text.map((item, index) => 
                            <InfoBlock key={index} text={item[language].text} />
                        )}
                    </div> 
                </SectionBody>
            </Section>

            <PartnersBlock />
        </main>
    );
};

export default Charm;