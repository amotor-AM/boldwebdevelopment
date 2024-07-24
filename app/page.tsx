'use client'
import React from 'react'
import "@/resources/home.css"
import { motion } from "framer-motion"
import { AuroraBackground } from '@/app/components/aurora-background'
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card"
import Design from "@/assets/images/eyecatchingDesign.png"
import FullStack from "@/assets/images/fullstacksolutions.png"
import UI from "@/assets/images/ui:ux.png"
import Image from "next/image";
import { InfiniteMovingCards } from "@/app/components/infinite-moving-cards";
import { testimonials } from "@/resources/testimonials"
import { text } from "@/resources/text"
import { ButtonsCard } from '@/app/components/buttons'
import Link from 'next/link'
import InfiniteScrollingText from "@/app/components/infinite-scrolling-text"

function Index() {
    return (
        <div className="wrapper">
            <div className="w-full">
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className="uppercase mb-0 tracking-widest text-5xl md:text-9xl lg:text-[250px] text-white text-center">
                            Think BIG
                        </div>
                        <div className="uppercase mb-0 tracking-widest text-5xl md:text-9xl lg:text-[250px] text-white text-center">
                            Think <span className="font-bold">BOLD</span>
                        </div>
                        <ButtonsCard>
                            <Link target="_blank" rel="noopener noreferrer" href="https://boldwebdevelopment.hbportal.co/public/6680abc60c7050001919bd73">
                                <button className="text-white px-12 py-4 mt-20 rounded-full bg-[#ff5e1a] font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-300 transition-colors duration-200">
                                    Book A Free Strategy Session
                                </button>
                            </Link>
                        </ButtonsCard>
                    </motion.div>
                </AuroraBackground>
            </div>

            <div className="w-full bg-[#ff5e1a] rounded-[5%_5%_100%_0%_/_0%_0%_15%_5%] md:rounded-[10%_10%_100%_0%_/_0%_0%_30%_10%] flex justify-center items-center py-5 mb-10 lg:py-40 lg:mb-40 font-light">
                <div className="w-11/12 lg:w-3/4 mx-auto text-center text-white">
                    <p className="text-4xl lg:text-6xl font-medium py-4 lg:py-10">
                        The Web Is Evolving. We're Leading The Change.
                    </p>
                    <div className="max-w-[900px] m-auto">
                        <p className="text-xl lg:text-2xl pb-20">
                        In today's hyper-competitive digital arena, a powerful website isn't just an asset, it's your secret weapon. 
                        At Bold Web Development, we're not just keeping pace with change; we're driving it. 
                        We're not just developers or designers, we're{' '}
                            <b>architects of industry-leading online experiences</b>.
                            <br /><br />
                            <b>Whether you're a seasoned competitor or a fearless newcomer</b>, we create websites that <b>dominate</b> and <b>convert</b>.
                            We don't just build websites, we craft <b>strategic digital fortresses</b> that fuel your growth.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full my-20 lg:my-40 text-center">
                <h2 className="text-white text-3xl lg:text-5xl md:text-5xl font-bold text-neutral-600">We're More Than Just Web Developers</h2>
                <div className="w-[85vw] md:w-[60vw] lg:w-[50vw] m-auto pt-20">
                <p className="text-xl lg:text-2xl pb-20">
                Our expertise goes beyond coding and design. We're strategic partners in your digital success, combining cutting-edge technology with business acumen to deliver results that impact your bottom line.
                <br/>
                <br/><b>We're Committed to Your Growth</b>
                <br/>
                <br/>
                We don't build websites and walk away. We create scalable digital ecosystems that evolve with your business, ensuring you're always ahead of the curve and ready for whatever challenges come your way.
                </p>
                </div>
                <div className="flex gap-50 justify-center items-start mt-0 mb-10 lg:mt-20 lg:mb-40 flex-wrap">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 m-auto text-orange"
                            >
                                Strategic Web Development
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-m max-w-m mt-2 text-neutral-300"
                            >
                                We don't just build websites; we craft digital fortresses that fuel your growth. Our development process is meticulous, ensuring every line of code contributes to your business objectives.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={UI}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 m-auto text-orange"
                            >
                                Conversion-Focused Design
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-m max-w-m mt-2 text-neutral-300"
                            >
                                Forget forgettable websites. Our award-winning designs don't just look pretty—they perform. We create visually stunning, highly intuitive user experiences that guide visitors towards taking action.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={Design}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 m-auto text-orange"
                            >
                                Full-Stack Solutions for Scalable Growth
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-m max-w-m mt-2 text-neutral-300"
                            >
                                Whether you need a simple website or a complex custom application, our full-stack development expertise has you covered.
                                We build solutions that are not only powerful but also scalable.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={FullStack}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full overflow-hidden">
                <div className="flex gap-4 text-3xl md:text-7xl text-white whitespace-nowrap animate-scroll-text">
                    <InfiniteScrollingText items={text} />
                </div>
                <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#030303] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>

            <div className="w-full mt-[100px] bg-[#ff5e1a] lg:flex justify-center items-center lg:px-40 md:px-10 pb-10 mb-0 py-10">
                <div className="max-w-[600px] text-3xl lg:text-6xl text-white m-auto text-center my-10 lg:my-0">
                    Stop fighting an uphill battle with a mediocre website
                </div>
                <div className="max-w-[800px] flex flex-col items-center justify-center text-center">
                    <p className="text-lg lg:text-2xl md:text-2xl text-white pb-[50px]">
                        Partner with the Bold leaders at the forefront of web development. Contact us today for a free consultation!
                    </p>
                    <ButtonsCard>
                        <Link href="/Contact" className="text-[#ff5e1a] px-12 py-4 rounded-full bg-white font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-300 transition-colors duration-200">
                          Contact Us To Get Started
                        </Link>
                    </ButtonsCard>
                </div>
            </div>

        </div>
    )
}

export default Index