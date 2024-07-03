"use client"
import React from 'react'
import Laptop from "@/assets/images/laptopWithCode.png"
import { services } from '@/resources/offerings.js'
import Image from 'next/image'
import { TextGenerateEffect } from '@/app/components/text-generate'
import { HeroParallax } from '@/app/components/hero-parallax'
import { products } from "@/resources/products.js"
import Heading3 from '@/app/components/pricing/heading3'
import CardPricingLogo from '@/app/components/pricing/CardPricingLogo'
import { Highlight } from '@/app/components/hero-highlight'
import { Boxes } from '@/app/components/background-boxes'
import { cn } from '@/utils/cn'
import { ButtonsCard } from '@/app/components/buttons'
import Link from "next/link"

function Services() {
    const words = "Unleash Your Brand's Potential With Web Development That Drives Results"
    return (
        <div className="max-w-[99vw] overflow-x-hidden flex flex-col items-center">
      <HeroParallax products={products} />
      <div className="max-w-[80%]">
        <TextGenerateEffect className="flex flex-wrap justify-center text-[#ff5e1a] text-center" words={words} />
      </div>
      <div className="flex flex-wrap justify-center items-center pb-40 mb-40 xl:mb-0">
        <div className="hidden xl:block w-1/2 h-auto flex align-center">
          <Image src={Laptop} alt="laptop running code" layout="responsive" objectFit="cover" />
        </div>
        <div className="w-full xl:w-1/2 flex justify-center">
          <div className="w-[90%] xl:w-[80%]">
            <p className="text-white text-2xl xl:py-20 pb-10 xl:md:text-4xl lg:text-5xl">Ditch the Bloat, Craft Domination</p>
            <p className="text-white text-xl md:text-2xl">
              Tired of frameworks and page builders leaving you with sluggish, cookie-cutter websites?
              We do things differently at Bold Web Development.
              We believe in <Highlight delay={0.5}>hand-coded excellence</Highlight>, meticulously crafting clean, efficient code line by line.
              This results in unparalleled design control and <Highlight delay={1}>lightning-fast performance</Highlight> – a winning combination for both you and your visitors.
              <br /><br /><br />
              <Highlight delay={1.5}>Our websites outperform the competition</Highlight>.
              They're not just faster than most WordPress sites and drag-and-drop builders, they deliver a <Highlight delay={2}>superior user experience</Highlight>.
              And because the digital world is constantly changing, we offer lifetime updates to keep your website optimized and future-proofed.
              <br /><br /><br />
              We're not just building websites, we're building websites that dominate online.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 w-full">
        <div className="container mx-auto px-4">
          <Heading3
            title="Flexible Plans To Fit All Budgets"
            subtitle="Choose the plan that fits your needs"
            description="Say goodbye to one-size-fits-all pricing! 
                    We understand that every project has unique goals and budgetary constraints. 
                    That's why we offer a range of flexible pricing options to empower you to achieve your vision. 
                    Whether you're looking for a quick and efficient launch, a predictable monthly cost structure, or ongoing development support, we have a plan that fits your requirements perfectly."
            color="dark"
            alignment='center'
          />
          <div className="flex flex-wrap -mx-4">
            {services.map((cardProps: any, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12 mb-8">
                <CardPricingLogo {...cardProps} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg h-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>

        <Boxes />

        <div className="w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 mx-auto flex flex-col gap-3 items-center text-center">
          <h1 className={cn("md:text-4xl text-xl pt-20 text-white relative z-20")}>
            Have a project in mind but not sure where to start? We should talk!
          </h1>
          <p className="mt-2 text-neutral-300 text-xl pt-4 relative z-20 mb-10">
            Feeling overwhelmed by the possibilities or confused about the next step?
            That's totally normal! We've been there. At Bold Web Development, we're
            experts at untangling complex ideas and turning them into stunning,
            user-friendly websites. Let's chat about your vision, and we'll help you
            navigate the process with clarity and confidence. We'll break down the
            project into manageable steps and guide you every step of the way.
          </p>
          <ButtonsCard>
            <Link href="/Contact">
              <button className="text-[#ff5e1a] px-12 py-4 rounded-full bg-[#fff] mb-20 font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-[#ff5e1a] hover:text-white transition-colors duration-200">
                Contact Us To Get Started
              </button>
            </Link>
          </ButtonsCard>
        </div>
      </div>
    </div>
    )
}

export default Services