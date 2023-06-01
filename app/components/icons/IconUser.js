import React from "react";

export default function IconUser({className}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`w-[1em] h-[1em] ${className}`}
        >
            <g clipPath="url(#clip0_7564_750)">
                <rect width="24" height="24" fill="none" />
                <circle cx="12.5" cy="8" r="3" stroke="currentColor" />
                <path
                    d="M6 19.1924C6 15.6025 8.91015 12.6924 12.5 12.6924C16.0899 12.6924 19 15.6025 19 19.1924"
                    stroke="currentColor"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_7564_750">
                    <rect width="24" height="24" fill="none" />
                </clipPath>
            </defs>
        </svg>
    );
}
