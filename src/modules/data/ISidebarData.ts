export interface ISideBarData {
    "rus": SideBarDataProps,
    "eng": SideBarDataProps,
    "tur": SideBarDataProps,
}

interface SideBarDataProps {
    choose: string,
    lang: string
}