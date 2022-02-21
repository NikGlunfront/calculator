import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import classes from './Sidebar.module.css';
import { useAppSelector } from '../../hooks/redux/redux';
import { ISideBarData } from '../../modules/data/ISidebarData';
import { ISidebarLangsData } from '../../modules/data/ISidebarLangsData';
import { allStates } from '../../store/customSelector';
import { useLanguageActions } from '../../hooks/redux/useActions';

interface SidebarMobileLangsProps {
    sidebarDataUi: ISideBarData
    langsUi: ISidebarLangsData
}

const SidebarMobileLangs: FC<SidebarMobileLangsProps> = ({langsUi, sidebarDataUi}) => {
    const {language} = useAppSelector(allStates.languageState)
    const [isVisibleLangsMobile, setIsVisibleLangsMobile] = useState<boolean>(false);
    const {changeLanguage} = useLanguageActions()

    const setMobileLangsVisible = () => {
        if (isVisibleLangsMobile) {
            setIsVisibleLangsMobile(false)
        } else {
            setIsVisibleLangsMobile(true)
        }
    }

    const handleLanguageSelect = (lang: 'rus' | 'eng' | 'tur') => {
        changeLanguage(lang)
        if (isVisibleLangsMobile) {
            setIsVisibleLangsMobile(false)
        }
    }

    return (
        <li
            key={'mobile-langs'}
            className={classes.Item + " " + classes.ItemLang}
            onClick={() => setMobileLangsVisible()}
        >
            
            <div className={classes.ItemInner}>
                <FontAwesomeIcon icon={faLanguage} />
                <span>{sidebarDataUi[language].lang}</span>
                <div 
                    className={isVisibleLangsMobile 
                                ? classes.MobileLangsItem + " " + classes.ActiveMobileLangsItem 
                                : classes.MobileLangsItem}>
                    {Object.values(langsUi).map(lang => 
                        <div
                            key={lang.type}
                            onClick={() => handleLanguageSelect(lang.type)}
                            className={lang.type === language 
                                        ? classes.LangItem + ' ' + classes.ActiveLangItem 
                                        : classes.LangItem}>
                                {lang.text}
                        </div>
                    )}
                </div>
            </div>

        </li> 
    );
};

export default SidebarMobileLangs;