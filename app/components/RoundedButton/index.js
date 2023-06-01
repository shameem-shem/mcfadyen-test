import React from "react";

export default function RoundedButton({
    className,
    children,
    outlined,
    size,
    onClick,
    disabled,
}) {
    return (
        <button
            onClick={onClick}
            className={`border text-sm rounded-full uppercase min-w-[78px] ${
                outlined
                    ? "border-gray-200"
                    : "bg-black border-black text-white"
            } ${
                size == "sm"
                    ? "py-2 px-4 leading-[12.4px]"
                    : "py-3 px-6 leading-[22.4px]"
            } ${className ? className : ""} ${disabled?'cursor-default !border-gray-200 line-through text-[#a6a6a6]':""}`}
        >
            {children}
        </button>
    );
}
