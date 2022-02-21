import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ISidebarLangsData {
    "rus": ISidebarLangsDataProps,
    "eng": ISidebarLangsDataProps,
    "tur": ISidebarLangsDataProps,
}

export interface ISidebarLangsDataProps {
    type: string,
    text: string,
    menuList: IMenuList[],
    header: IHeader[]
}

export interface IMenuList {
    text: string,
    navigateTo: string,
    key: string,
    icon: IconDefinition
}

export interface IHeader {
    text: string,
    id: string
    onClick: Function
}