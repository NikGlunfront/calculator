import React, { FC } from 'react';
import Calculator from '../components/Calculator/Calculator';
import CalculatorField from '../components/Calculator/CalculatorField';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import PreviewSection from '../components/Section/PreviewSection';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionInfo from '../components/Section/SectionInfo';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import { DATA_MAIN } from '../data/main';
import { DATA_TALENTS } from '../data/talents';
import { useAppSelector } from '../hooks/redux/redux';
import { allStates } from '../store/customSelector';

const Talents: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    const dataMain = DATA_MAIN.calc[language]
    const dataInputs = DATA_TALENTS.inputs[language];
    const dataUiTexts = DATA_TALENTS.ui[language];
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

            <Section>
                <SectionSubtitle>{dataMain.calculateText}</SectionSubtitle>
                <SectionInfo>{dataMain.info}</SectionInfo>
                <SectionBody>
                    <Calculator>
                        <CalculatorField inputsData={dataInputs} textUiData={dataUiTexts} />
                    </Calculator>
                </SectionBody>
            </Section>
        </main>
    );
};

export default Talents;