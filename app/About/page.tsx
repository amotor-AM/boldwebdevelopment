"use client"
import React from 'react'
import Hero from "@/assets/images/aboutHero.png"
import Objects from "@/assets/images/objects.png"
import Image from 'next/image'
import { LampContainer } from '@/app/components/lamp';
import { ButtonsCard } from '@/app/components/buttons'
import { motion } from "framer-motion";
import Link from "next/link"

function About() {
  return (
    <div className="wrapper">
      <div className="flex flex-col h-auto lg:flex-row justify-center gap-10 lg:gap-20 items-start md:items-center p-12">
        <div className="w-[45%] md:w-[96%]">
          <h1 className="text-white text-4xl lg:text-6xl md:text-5xl font-bold pb-20">
            We Don't Just Build Websites. <br />We Build Conversion Machines.
          </h1>
          <p className="text-light-grey text-xl lg:text-2xl mt-4">
            We're Bold Web Development, and mediocrity is our enemy. We're a passionate team of web architects obsessed with crafting <b>award-winning online experiences</b> that <b>dominate</b> the digital landscape.
            <br /><br />
            Forget cookie-cutter websites built on yesterday's trends. We take a scalpel to the ordinary, meticulously crafting conversion-focused websites that <b>convert</b> visitors into <b>loyal customers</b>.
            <br /><br />
            We're more than just developers - we're your strategic partners in the ever-evolving digital battlefield. We'll help you outmaneuver the competition and <b>propel your brand to the forefront</b>.
          </p>
        </div>
        <div
          className="relative min-w-[300px] min-h-[450px] lg:w-[500px] lg:h-[750px] xl:w-[750px] xl:h-[900px]"
        >
          <Image
            src={Hero}
            alt="about page hero image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
      </div>
      <div className="text-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Born from Frustration, <br /> Fueled by Passion
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-light-grey text-xl lg:text-2xl max-w-3xl py-10"
          >
            Our story starts with a simple truth: most small businesses get a raw deal online.
            They're stuck with outdated, slow, ineffective websites that drain their budgets and deliver zero results.
            We saw this frustration firsthand and decided to take a stand. That's how Bold Web Development was born.
            <br /><br />
            We're more than just developers – we're your strategic partners in the ever-evolving digital landscape.
            We go beyond aesthetics.
            We delve into your business goals, target audience, and competitive landscape to craft a website that's a powerful marketing weapon.
          </motion.p>
        </LampContainer>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 py-12 min-h-[600px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Objects.src})` }}>
        <p className="text-4xl lg:text-6xl text-white">Ready to join the Bold revolution?</p>
        <p className="text-2xl lg:text-3xl text-white">Let's chat about your project!</p>
        <ButtonsCard>
          <Link href="/Contact">
            <button className="text-white px-12 py-4 rounded-full bg-[#ff5e1a] font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-300 transition-colors duration-200">
              Contact Us
            </button>
          </Link>
        </ButtonsCard>
      </div>
    </div>
  );
}

export default About