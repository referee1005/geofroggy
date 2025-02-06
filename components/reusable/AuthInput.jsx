import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function Input({
    label,
    placeholder,
    id,
    name,
    type = 'text',
    mb = 4,
    textColor = 'text-gray-700',
    inputHeight = 12,
    onChange,
    border = true,
    startIcon,
    endIcon
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);

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
                {/* Start Icon */}
                {startIcon && (
                    <span className={`absolute inset-y-0 left-0 flex items-center pl-4 ${isFocused ? 'text-[#003C6E]' : 'text-gray-500'}`}>
                        {startIcon}
                    </span>
                )}
                <input
                    type={type == 'password' ? isPasswordVisible ? 'text' : 'password' : type}
                    id={id}
                    name={name}
                    className={`block w-full px-4 py-2 text-base text-black transition-all duration-200
                ${isFocused ? 'bg-white' : 'bg-white'}
                border-l-8 border-t border-r border-b focus:outline-none ${startIcon ? 'pl-10' : 'pl-3'} ${endIcon ? 'pr-10' : 'pr-3'
                        }`}
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
                {
                    type == 'password' && (<button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
                        onClick={() => setPasswordVisible(!isPasswordVisible)} // Toggle visibility
                    >
                        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>)
                }
                {/* End Icon */}
                {endIcon && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                        {endIcon}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;
