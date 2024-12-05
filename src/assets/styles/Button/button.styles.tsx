import styled, {css} from "styled-components";
import { Button, Tooltip } from "antd";
import { ButtonHTMLAttributes } from "react";

interface Styles extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: string,
    icon?: React.ReactNode,
}


export const GroupedButtons = styled(Button.Group)`
    padding: 1rem;
    background-color: #fff;

    display: flex;
    gap: 1rem;
`;

export const TooltipTitle = styled(Tooltip)`


`;

const buttonStyles = ( props : Styles) => {
    const { variant = "default" } = props;
    if (variant === "edit") {
        return css`
            background-color: green;
        `;
    } else if (variant === "delete") {
        return css`
            background-color: red;
        `;
    } 
    return css`
        background-color: gray;
    `;
}


export const GlobalButton = styled(Button)<Styles>`
    font-size: 16px;
    cursor: pointer;
    color: white;

    &:hover {
        opacity: .6;
        color: black;
    }
    .anticon {
        margin-right: 8px; 
        font-size: 16px; 
  }


    ${(props) => buttonStyles(props)}
`;

