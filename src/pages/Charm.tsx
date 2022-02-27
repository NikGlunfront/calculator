import React, { FC } from 'react';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import PreviewSection from '../components/Section/PreviewSection';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionTitle from '../components/Section/SectionTitle';
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
        </main>
    );
};

export default Charm;