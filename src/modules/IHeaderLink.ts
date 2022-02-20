import { MouseEventHandler } from "react";

export interface IHeaderLink {
    text: string,
    id: string,
    onClick: MouseEventHandler
}