import cn from 'classnames';
import React from 'react';

interface ToggleProps {
    className?: string;
    onToggle?: (toggled: boolean) => void;
    size?: "xs" | "sm" | "md" | "lg";
    state?: "success" | "warning" | "info" | "error"
}

const classesMap = {
    "xs": "tw-toggle-xs",
    "sm": "tw-toggle-sm",
    "md": "tw-toggle-md",
    "lg": "tw-toggle-lg",
    "success": "tw-toggle-success",
    "warning": "tw-toggle-warning",
    "info": "tw-toggle-info",
    "error": "tw-toggle-error",
};

export function Toggle({
    onToggle,
    size,
    state,
    className = '',
}: ToggleProps) {
    const [toggled, setToggled] = React.useState(false);

    const handleToggle = () => {
        const newToggledState = !toggled;
        setToggled(newToggledState);
        if (onToggle) {
            onToggle(newToggledState);
        }
    };

    const [sizeClass, stateClass] = [size ? classesMap[size] : "", state ? classesMap[state] : ""];

    return (
        <input type="checkbox" className={cn("tw-toggle", sizeClass, stateClass, className)} checked onChange={handleToggle} />
    );
};
