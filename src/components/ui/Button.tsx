import React from 'react'

type ButtonVariant = "primary" | "secondary" | "default";

type ButtonProps = {
    variant?: ButtonVariant,
    children: React.ReactNode,
    styles?: string,
}

const Button = ({variant = "default", children, styles = ""}: ButtonProps) => {
    
    const baseStyles = styles;

    const variantStyles: Record<ButtonVariant, string> = {
        "default": "",
        "primary": "bg-accent hover:bg-brand-emphasis",
        "secondary": "bg-brand-muted"
    }

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${baseStyles.includes("rounded") ? "" : "rounded-lg" } cursor-pointer`}>
            {children}
        </button>
    )
}

export default Button