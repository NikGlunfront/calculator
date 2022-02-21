import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { ISideBarData } from '../../modules/data/ISidebarData';
import { ISidebarLangsData } from '../../modules/data/ISidebarLangsData';
import { allStates } from '../../store/customSelector';
import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem';
import SidebarLangs from './SidebarLangs';
import SidebarMobileLangs from './SidebarMobileLangs';

interface SidebarProps {
    sidebarDataUi: ISideBarData
    langsUi: ISidebarLangsData
}

const Sidebar: FC<SidebarProps>= ({sidebarDataUi, langsUi}) => {
    const {language} = useAppSelector(allStates.languageState)

    return (
        <aside>
            <div className={classes.ContentWrapper}>
                <ul className={classes.Menu}>
                    {langsUi[language].menuList.map(item=>
                        <SidebarItem
                            key={item.key}
                            item={item}
                        />
                    )}
                    <SidebarMobileLangs 
                        langsUi={langsUi}
                        sidebarDataUi={sidebarDataUi}
                    />
                </ul>
                <SidebarLangs 
                    sidebarDataUi={sidebarDataUi} 
                    langsUi={langsUi}
                />
            </div>
        </aside>
    );
};

export default Sidebar;