import React from "react";
import Link from "next/link";

export default function ProductDescriptions({data}) {
    return (
        <div>
            <ul className="flex gap-6">
                <li className="uppercase text-sm font-bold py-1">Details</li>
                <li className="uppercase text-sm py-1">Delivery</li>
                <li className="uppercase text-sm py-1">Fit</li>
                <li className="uppercase text-sm py-1">Share</li>
            </ul>
            <p className="text-sm mb-4">
                {data}
            </p>
            <p className="text-sm mb-4">
                See the <Link href="/" className="uppercase underline">EDITOR’S NOTE</Link>
            </p>
            <p className="text-sm">
                Learn about the <Link href="/" className="uppercase underline">DESIGNER</Link>
            </p>
        </div>
    );
}
