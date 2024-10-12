import { MouseEventHandler } from 'react';
export interface MyFavoriteProps {
    color: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavorite(props: MyFavoriteProps): import("react/jsx-runtime").JSX.Element;
export default MyFavorite;
