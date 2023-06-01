import React from "react";

export default function IconSearch({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`w-[1em] h-[1em] ${className}`}
        >
            <g clipPath="url(#clip0_7564_745)">
                <rect width="24" height="24" fill="none" />
                <circle
                    cx="11.1953"
                    cy="10.1924"
                    r="6.5"
                    transform="rotate(45 11.1953 10.1924)"
                    stroke="currentColor"
                />
                <rect
                    x="16.0234"
                    y="14.3145"
                    width="7"
                    height="1"
                    rx="0.5"
                    transform="rotate(45 16.0234 14.3145)"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_7564_745">
                    <rect width="24" height="24" fill="none" />
                </clipPath>
            </defs>
        </svg>
    );
}
