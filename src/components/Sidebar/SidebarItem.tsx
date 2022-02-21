import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMenuList } from '../../modules/data/ISidebarLangsData';
import classes from './Sidebar.module.css';

interface SidebarItemProps {
    item: IMenuList
}

const SidebarItem:FC<SidebarItemProps> = ({item}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigation = (link: string) => {
        navigate(link)
    }

    return (
        <li
            className={location.pathname === item.navigateTo 
                        ? classes.Item + ' ' + classes.ActiveItem 
                        : classes.Item}
            onClick={() => handleNavigation(item.navigateTo)}
        >
            
            <div className={classes.ItemInner}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
            </div>

        </li>
    );
};

export default SidebarItem;