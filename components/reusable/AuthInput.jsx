import React, { useState } from 'react';

function Input({
    label,
    placeholder,
    id,
    name,
    type,
    mb = 4,
    textColor = 'text-gray-700',
    inputHeight = 12,
    onChange,
    border = true,
}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`w-full ${mb ? `mb-${mb}` : ''}`}>
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-900 mb-1.5"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {/* Input Field */}
                <input
                    type={type}
                    id={id}
                    name={name}
                    className={`block w-full px-4 py-2 text-base text-black transition-all duration-200
                ${isFocused ? 'bg-white' : 'bg-white'}
                border-l-8 border-t border-r border-b focus:outline-none`}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        height: `${inputHeight * 0.25}rem`,
                        borderRadius: '0px', // Sharp corners
                    }}
                />

                {/* Left Border Highlight (Blue) */}
                {isFocused && (
                    <div
                        className="absolute top-0 left-0 h-full w-2 bg-[#003C6E]"
                        style={{ borderRadius: '0px' }}
                    />
                )}
            </div>
        </div>
    );
}

export default Input;
