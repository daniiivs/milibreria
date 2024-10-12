import { MouseEventHandler } from 'react';
export interface MyFavoriteBorderProps {
    color: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavoriteBorder(props: MyFavoriteBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavoriteBorder;
