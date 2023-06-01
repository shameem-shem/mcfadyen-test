"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RoundedButton from "../RoundedButton";
import {IconArrow} from "../icons";

export default function ProductDetails({ data }) {
    const [selectedSize, setSelectedSize] = useState("");
    const handleSelectSize = (size) => {
        if(size.available){
            setSelectedSize(size.value);
        }
    };
    return (
        <div>
            <h2 className="text-5xl">{data.name}</h2>
            <p className="text-sm mb-2">{data.description}</p>
            <h6 className="text-sm font-bold">${data.price}</h6>
            <div className="pt-6 flex text-sm pb-2">
                <h6 className="font-bold">Color</h6>
                <p className="">{data.color}</p>
            </div>
            <ul className="flex gap-1 pb-6">
                {data.variants.map((item, index) => {
                    return (
                        <li
                            className={`aspect-[.83333] relative w-[53px] border ${
                                index == 0 ? "border-black" : "border-gray-200"
                            }`}
                            key={index}
                        >
                            <Image
                                src={item}
                                fill
                                alt=""
                                className="object-contain"
                            ></Image>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex gap-x-2 gap-y-2.5 flex-wrap pb-6">
                {data.sizes.map((size, index) => {
                    return (
                        <li key={index}>
                            <RoundedButton
                                size="sm"
                                disabled={!size.available}
                                outlined={size.value != selectedSize}
                                onClick={() => handleSelectSize(size)}
                            >
                                {size.label}
                            </RoundedButton>
                        </li>
                    );
                })}
            </ul>
            <RoundedButton className="flex items-center w-full justify-center mb-6">
                add to bag <IconArrow className="pl-2" />
            </RoundedButton>
            <p className="text-sm mb-4">
                {data.offer.text}
                <Link
                    href={data.offer.url}
                    className="uppercase underline ml-1"
                >
                    Learn more
                </Link>
            </p>
            <p className="text-sm">
                Speak to a Personal Stylist
                <Link href="/" className="uppercase underline ml-1">
                    CHAT NOW
                </Link>
            </p>
        </div>
    );
}
