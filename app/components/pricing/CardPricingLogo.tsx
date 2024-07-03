import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { ButtonsCard } from '@/app/components/buttons'
import Link from "next/link"

interface CardPricingLogoProps {
    description: string;
    title: string;
    list: string[];
    line?: "orange"; // Optional with default value
    image: any;
    // button: Button.ButtonProps; // Utilize Button component's props interface
}


export default function CardPricingLogo({
    description,
    title,
    list,
    line = "orange",
    image,
    // button,
}: CardPricingLogoProps) {
    const colors = {
        blueGray: "border-orange-500",
    };
    return (
        <>
            <div
                className="mt-24 shadow-lg rounded-lg bg-gray-800 w-full mb-6 text-white" // Dark background, white text
            >
                <div className="pt-10">
                    <Image alt="..." className="h-[50px] w-[50px] block mx-auto" src={image} />
                </div>
                <div className="text-center p-5 flex-auto">
                    <div className="flex flex-wrap">
                        <div className="px-4 relative w-full">
                            <span className="text-5xl">{description}</span>
                            <h5 className="text-2xl font-bold leading-tight mt-2 mb-2">
                                {title}
                            </h5>
                            <hr className="border-orange-500 my-2 mx-auto w-1/5" /> {/* Orange horizontal row */}
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <ul className="mt-2 mb-6 list-none mx-auto text-center flex flex-col">
                            {list.map((prop, key) => (
                                <li key={key} className="py-1">
                                    {prop}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pb-10">
                        <Link target="_blank" rel="noopener noreferrer" href="https://boldwebdevelopment.hbportal.co/public/6680abc60c7050001919bd73">
                        <ButtonsCard>
                            <button className="text-white px-12 py-4 rounded-full bg-[#ff5e1a] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#ff5e1a] transition-colors duration-200">Get Started</button>
                        </ButtonsCard>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}