'use client'

import ProductDescriptions from "./components/ProductDescriptions";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import { product } from "./data/product";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useDimensions";

export default async function Home() {
    const { width } = useWindowSize();
    const { description, images, details } = await product;
    return (
        <div className="container px-[71px] mx-auto">
            <div className="grid grid-cols-12 ">
                {width >= 1280 ? (
                    <div className="xl:col-span-3 ">
                        <div className="sticky top-0">
                            <ProductDescriptions data={description} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div className="xl:col-span-6 col-span-12">
                    <ProductImages data={images} />
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="sticky top-0">
                        <ProductDetails data={details} />
                    </div>
                </div>
            </div>
            <div className="pb-[84px] pt-[108px] text-center">
                <div className="flex justify-center gap-6 pb-[120px]">
                    <Link href="/" className="uppercase underline">
                        Jonathan Simkhai
                    </Link>
                    <Link href="/" className="uppercase underline">
                        Blazers
                    </Link>
                    <Link href="/" className="uppercase underline">
                        Viscose
                    </Link>
                </div>
                <div className="max-w-[864px] mx-auto">
                    <p className="uppercase text-sm font-bold mb-4">
                        a note from the editor
                    </p>
                    <p className="text-[32px] mb-4">
                        The Forte Lurex Linen Viscose Jacket in Mother of Pearl
                        features lunar lavishness by night and by day: a blazer
                        in a linen blend shot with lurex for a shimmering
                        surface that shines like a star in the sky.{" "}
                    </p>
                    <p className="trext-sm">
                        By{" "}
                        <span className="uppercase underline">MINNA SHIM,</span>{" "}
                        Fashion Editor
                    </p>
                </div>
            </div>
        </div>
    );
}
