import React from "react";
import Image from "next/image";
import { IconHeart } from "../icons";
import { useWindowSize } from "@/hooks/useDimensions";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

export default function ProductImages({ data }) {
    const { width } = useWindowSize();
    return (
        <div className="px-6">
            <button className="text-xl ml-auto sticky top-0 p-2 block mr-6 xl:mr-14 z-10">
                <IconHeart />
            </button>
            {width >= 1280 ? (
                <ul className="flex flex-wrap gap-2 max-w-[562px] mx-auto -mt-9">
                    {data.map((img, index) => {
                        return (
                            <li
                                key={index}
                                className={`aspect-[.83333] relative ${
                                    img.size && img.size === "lg"
                                        ? "basis-full"
                                        : "basis-[calc(50%-8px)]"
                                }`}
                            >
                                <Image src={img.url} alt="" fill></Image>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {data.map((img, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="aspect-[.83333] relative">
                                    <Image src={img.url} alt="" fill></Image>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
        </div>
    );
}
