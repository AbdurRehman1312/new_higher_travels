import React from "react";

const GradientButton = ({
    children,
    onClick,
    className = "",
    type = "button",
    href,
    target,
    rel,
}) => {
    const baseClassName = `group relative inline-flex items-center justify-center px-8 py-3 bg_gradient text-white font-bold rounded-xl transform transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden ${className}`;

    const content = (
        <>
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-custom-light-gold to-custom-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Text */}
            <span className="relative z-10">{children}</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                onClick={onClick}
                className={baseClassName}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClassName}
        >
            {content}
        </button>
    );
};

export default GradientButton;
