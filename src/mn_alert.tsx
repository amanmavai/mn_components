import "./mn_alert.css";
export interface MnAlertProps {
    type: string
}
export function MnAlert(props: MnAlertProps) {
    return <span className={"txtLarge"}>Hello Alert Component</span>;
}