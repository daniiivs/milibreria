export interface DanielVSProps {
    defaultValue: number;
    color: string;
    precision: 0.5 | 1;
    max: number;
    readOnly?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
}
declare function DanielVS(props: DanielVSProps): import("react/jsx-runtime").JSX.Element;
export default DanielVS;
