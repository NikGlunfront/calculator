import React, { FC } from 'react';
import { DATA_MAIN } from '../../data/main';
import { useAppSelector } from '../../hooks/redux/redux';
import { allStates } from '../../store/customSelector';
import Section from '../Section/Section';
import SectionInfo from '../Section/SectionInfo';
import SectionSubtitle from '../Section/SectionSubtitle';
import WhiteBoxWrapper from '../WhiteBoxWrapper/WhiteBoxWrapper';
import classes from './PartnersBlock.module.css';

const PartnersBlock: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    return (
        <Section>
            <SectionSubtitle>{DATA_MAIN.ui[language].partnersTitle}</SectionSubtitle>
            <SectionInfo>{DATA_MAIN.ui[language].partnersDescription}</SectionInfo>
            <WhiteBoxWrapper modifyClass={classes.WrapperBox}>
                {/* <Card>
                    <CardImage imgSrc={partnerInput.img} description={partnerInput.text} />
                    <CardInputBlock data={partnerInput} />    
                </Card>   */}
            </WhiteBoxWrapper>
        </Section>
    );
};

export default PartnersBlock;