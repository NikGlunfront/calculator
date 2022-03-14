import React, { FC } from 'react';
import Calculator from '../components/Calculator/Calculator';
import CalculatorField from '../components/Calculator/CalculatorField';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import PartnersBlock from '../components/PartnersBlock/PartnersBlock';
import PreviewSection from '../components/Section/PreviewSection';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionInfo from '../components/Section/SectionInfo';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import { DATA_CHARM } from '../data/charm';
import { DATA_MAIN } from '../data/main';
import { useAppSelector } from '../hooks/redux/redux';
import { allStates } from '../store/customSelector';

const Charm: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    const dataMain = DATA_MAIN.calc[language]
    const dataInputs = DATA_CHARM.inputs[language];
    const dataUiTexts = DATA_CHARM.ui[language];

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

export default Charm;