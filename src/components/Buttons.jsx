import React, { useState } from "react";

const Button = ({ tag = 'button', contrast = false, outlined = false, isDisabled = false, children }) => {
    const Tag = tag;
    const className = [
        'button',
        contrast && 'button__contrast',
        outlined && 'button__outlined',
        isDisabled && 'button__disabled',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Tag className={className} disabled={isDisabled}>
            <span className="button__text">{children}</span>
        </Tag>
    )
}

export default Button;