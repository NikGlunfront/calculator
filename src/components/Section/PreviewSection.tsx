import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { allStates } from '../../store/customSelector';
import Section from './Section';
import SectionSubtitle from './SectionSubtitle';
import SectionTitle from './SectionTitle';

interface PreviewSectionProps {
    title: string,
    subtitle: string,
}

const PreviewSection: FC<PreviewSectionProps> = ({subtitle, title}) => {
    return (
        <Section isFirst={true}>
            <SectionTitle>{title}</SectionTitle>
            <SectionSubtitle>{subtitle}</SectionSubtitle>
        </Section>
    );
};

export default PreviewSection;