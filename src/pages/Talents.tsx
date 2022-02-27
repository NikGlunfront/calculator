import React, { FC } from 'react';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import PreviewSection from '../components/Section/PreviewSection';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import { DATA_TALENTS } from '../data/talents';
import { useAppSelector } from '../hooks/redux/redux';
import { allStates } from '../store/customSelector';

const Talents: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    return (
        <main className="main">
            <PreviewSection
                title={DATA_TALENTS.title[language].title}
                subtitle={DATA_TALENTS.title[language].subtitle}
            />

            <Section>
                <SectionBody>
                    <div className='text-row'>
                        {DATA_TALENTS.text.map((item, index) => 
                            <InfoBlock key={index} text={item[language].text} />
                        )}
                    </div> 
                </SectionBody>
            </Section>
        </main>
    );
};

export default Talents;