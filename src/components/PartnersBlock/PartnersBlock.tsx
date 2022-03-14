import React, { FC } from 'react';
import { DATA_CHARM } from '../../data/charm';
import { DATA_MAIN } from '../../data/main';
import { useAppSelector } from '../../hooks/redux/redux';
import { allStates } from '../../store/customSelector';
import Card from '../Card/Card';
import CardImg from '../Card/CardImg';
import CardInput from '../Card/CardInput';
import Section from '../Section/Section';
import SectionInfo from '../Section/SectionInfo';
import SectionSubtitle from '../Section/SectionSubtitle';
import WhiteBoxWrapper from '../WhiteBoxWrapper/WhiteBoxWrapper';
import classes from './PartnersBlock.module.css';

const PartnersBlock: FC = () => {
    const dataUI = DATA_CHARM.inputs;
    const {language} = useAppSelector(allStates.languageState)
    return (
        <Section>
            <SectionSubtitle>{DATA_MAIN.ui[language].partnersTitle}</SectionSubtitle>
            <SectionInfo>{DATA_MAIN.ui[language].partnersDescription}</SectionInfo>
            <WhiteBoxWrapper modifyClass={classes.WrapperBox}>
                <Card>
                    <CardImg 
                        imgSrc={DATA_MAIN.partnerInput[language].img} 
                        description={DATA_MAIN.partnerInput[language].id} 
                    />
                    <CardInput 
                        id={DATA_MAIN.partnerInput[language].id} 
                        name={DATA_MAIN.partnerInput[language].text}
                    />
                </Card>
            </WhiteBoxWrapper>
        </Section>
    );
};

export default PartnersBlock;