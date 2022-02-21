import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { useLanguageActions } from '../../hooks/redux/useActions';
import { ISideBarData } from '../../modules/data/ISidebarData';
import { ISidebarLangsData } from '../../modules/data/ISidebarLangsData';
import { ILanguage } from '../../modules/ILanguage';
import { allStates } from '../../store/customSelector';
import classes from './Sidebar.module.css';

interface SidebarLangsProps {
    sidebarDataUi: ISideBarData,
    langsUi: ISidebarLangsData
}

const SidebarLangs:FC<SidebarLangsProps> = ({sidebarDataUi, langsUi}) => {
    const {language} = useAppSelector(allStates.languageState)
    const {changeLanguage} = useLanguageActions()

    const handleLanguageSelect = (language: 'rus' | 'eng' | 'tur') => {
        changeLanguage(language)
    }

    return (
        <div className={classes.Langs}>
            <span>{sidebarDataUi[language].choose}</span>
            <FontAwesomeIcon icon={faLanguage} style={{fontSize: '30px', color: '#9BAAD3'}}/>

            <div className={classes.LangItemsBox}>
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
    );
};

export default SidebarLangs;