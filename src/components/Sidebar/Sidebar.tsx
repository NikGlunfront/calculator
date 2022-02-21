import React, { FC } from 'react';
import { ISideBarData } from '../../modules/data/ISidebarData';
import { ISidebarLangsData } from '../../modules/data/ISidebarLangsData';
import classes from './Sidebar.module.css';
import SidebarLangs from './SidebarLangs';

interface SidebarProps {
    sidebarDataUi: ISideBarData
    langsUi: ISidebarLangsData
}

const Sidebar: FC<SidebarProps>= ({sidebarDataUi, langsUi}) => {
    return (
        <aside>
            <div className={classes.ContentWrapper}>
                {/* <ul className={classes.Menu}>
                    {DATA_LANGUAGES[language].menuList.map(item=>
                        <li
                            key={item.key}
                            className={location.pathname === item.navigateTo ? classes.Item + ' ' + classes.ActiveItem : classes.Item}
                            onClick={() => handleNavigation(item.navigateTo)}>
                            
                            <div className={classes.ItemInner}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </div>

                        </li> 
                    )}
                    <li
                        key={'langs'}
                        className={classes.Item + " " + classes.ItemLang}
                        onClick={() => setMobileLangsVisible()}>
                        
                        <div className={classes.ItemInner}>
                            <FontAwesomeIcon icon={faLanguage} />
                            <span>{DATA_SIDEBAR[language].lang}</span>
                            <div 
                                className={isVisibleLangsMobile ? classes.MobileLangsItem + " " + classes.ActiveMobileLangsItem : classes.MobileLangsItem}>
                                {Object.values(DATA_LANGUAGES).map(lang => 
                                    <div
                                        key={lang.type}
                                        onClick={() => handleLanguageSelect(lang.type)}
                                        className={lang.type === language ? classes.LangItem + ' ' + classes.ActiveLangItem : classes.LangItem}>
                                            {lang.text}
                                    </div>
                                )}
                            </div>
                        </div>

                    </li> 
                </ul> */}
                <SidebarLangs 
                    sidebarDataUi={sidebarDataUi} 
                    langsUi={langsUi}
                />
            </div>
        </aside>
    );
};

export default Sidebar;