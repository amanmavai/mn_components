import cn from 'classnames';
import React from 'react';

interface ToggleProps {
    className?: string;
    onToggle?: (toggled: boolean) => void;
    size?: "xs" | "sm" | "md" | "lg";
    state?: "success" | "warning" | "info" | "error"
}

const classesMap = {
    "xs": "toggle-xs",
    "sm": "toggle-sm",
    "md": "toggle-md",
    "lg": "toggle-lg",
    "success": "toggle-success",
    "warning": "toggle-warning",
    "info": "toggle-info",
    "error": "toggle-error",
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
        <input type="checkbox" className={cn("toggle", sizeClass, stateClass, className)} checked onChange={handleToggle} />
    );
};
