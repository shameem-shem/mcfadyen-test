'use client'

import Link from "next/link";
import React from "react";
import { navigations } from "../data/navigations";
import { IconBag, IconUser, IconSearch } from "./icons";
import { useWindowSize } from "@/hooks/useDimensions";

export default function Header() {
    const { width } = useWindowSize();
    return (
        <div className="container mx-auto py-6 pl-[71px] pr-6">
            <div className="flex items-center">
                <Link href={"/"} className="text-xl uppercase">
                    MY COMPANY.COM
                </Link>
                {width >= 1280 ? (
                    <ul className="flex pl-12">
                        {navigations.map((nav, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={nav.url}
                                        className="uppercase text-sm p-2"
                                    >
                                        {nav.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    ""
                )}
                <ul className="flex ml-auto">
                    <li>
                        <Link href={"/"} className="text-2xl p-2 block">
                            <IconSearch />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-2xl p-2 block">
                            <IconBag />
                        </Link>
                    </li>
                    {width >= 1280 ? (
                        <li>
                            <Link href={"/"} className="text-2xl p-2 block">
                                <IconUser />
                            </Link>
                        </li>
                    ) : (
                        ""
                    )}
                </ul>
            </div>
        </div>
    );
}
