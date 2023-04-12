import cn from "classnames";
export interface MnButtonProps {
    className: string
    children: React.ReactNode;
}
export function MnButton({className, children}: MnButtonProps) {
    return <button className={cn("tw-btn", className)}>{children}</button>;
}