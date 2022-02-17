import { engHeader, engMenuList, rusHeader, rusMenuList, turHeader, turMenuList } from "./MenuList";


export const DATA_LANGUAGES = {
    'rus': {type: 'rus', text: 'Русский', menuList: rusMenuList, header: rusHeader},
    'eng': {type: 'eng', text: 'English', menuList: engMenuList, header: engHeader},
    'tur': {type: 'tur', text: 'Türkçe', menuList: turMenuList, header: turHeader},
}