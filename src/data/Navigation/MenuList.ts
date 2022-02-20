import { faHeart, faHome, faRing, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { RouteNames } from "../../router";
import { exitHandler, reviewHandler } from "./HeaderFunctions";

export const rusMenuList = [
    {text: "Главная", navigateTo: RouteNames.HOME, key: "Home", icon: faHome},
    {text: "Обаяние", navigateTo: RouteNames.CHARM, key: "Charm", icon: faHeart},
    {text: "Близость", navigateTo: RouteNames.PROXIMITY, key: "Proximity", icon: faRing},
    {text: "Таланты", navigateTo: RouteNames.TALENTS, key: "Talents", icon: faStar},
]

export const engMenuList = [
    {text: "Home", navigateTo: RouteNames.HOME, key: "Home", icon: faHome},
    {text: "Charm", navigateTo: RouteNames.CHARM, key: "Charm", icon: faHeart},
    {text: "Proximity", navigateTo: RouteNames.PROXIMITY, key: "Proximity", icon: faRing},
    {text: "Talents", navigateTo: RouteNames.TALENTS, key: "Talents", icon: faStar},
]

export const turMenuList = [
    {text: "Anasayfa", navigateTo: RouteNames.HOME, key: "Home", icon: faHome},
    {text: "Cazibe", navigateTo: RouteNames.CHARM, key: "Charm", icon: faHeart},
    {text: "Samimiyet", navigateTo: RouteNames.PROXIMITY, key: "Proximity", icon: faRing},
    {text: "Yeteneği", navigateTo: RouteNames.TALENTS, key: "Talents", icon: faStar},
]


export const rusHeader = [
    {text: "Оставить отзыв (анонимно)", id: 'review', onClick: reviewHandler},
    {text: "Выйти", id: 'exit', onClick: exitHandler}
]

export const engHeader = [
    {text: "Leave a review (anonymous)", id: 'review',  onClick: reviewHandler},
    {text: "Exit", id: 'exit', onClick: exitHandler}
]

export const turHeader = [
    {text: "Bir inceleme bırakın (anonim)", id: 'review',  onClick: reviewHandler},
    {text: "çıkış", id: 'exit', onClick: exitHandler}
]

