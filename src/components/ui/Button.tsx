import React, { type ComponentPropsWithRef } from 'react'

type ButtonVariant = "primary" | "secondary" | "default";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    variant?: ButtonVariant,
    children: React.ReactNode,
    styles?: string,
}

const Button = ({ variant = "default", children, styles = "", onClick }: ButtonProps) => {

    let baseStyles = styles;
    baseStyles += baseStyles.includes("rounded") ? "" : " rounded-lg";

    const variantStyles: Record<ButtonVariant, string> = {
        "default": "",
        "primary": "bg-accent hover:bg-brand-emphasis",
        "secondary": "bg-brand-muted"
    }

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${baseStyles} cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button