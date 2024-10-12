import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtColor: string;
    bgColor: string;
    borderColor: string;
    border: string;
    size: "small" | "medium" | "large";
    hoverTxtColor: string;
    hoverBgColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
