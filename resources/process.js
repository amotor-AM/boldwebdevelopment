import Image from "next/image";
import Code from "@/assets/images/code.jpg"
import Meeting from "@/assets/images/meeting.jpg"
import Figma from "@/assets/images/figma.jpg"
import Servers from "@/assets/images/servers.jpg"

export const process = [
    {
        title: "1) Book a Free Strategy Session",
        description: "Embark on your web project with a comprehensive discovery session. Our team dives deep into your business needs, target audience, and project goals. We'll explore your industry landscape, discuss your unique selling points, and identify key functionalities your site needs. This thorough understanding forms the foundation of a website that truly serves your business objectives.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={Meeting}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "2) We Create a Figma Mockup of your new site",
        description: "Visualize your future website with our interactive Figma mockups. This crucial step translates our strategy into a tangible design. You'll see how your site will look and function across various devices, ensuring a consistent user experience. Our iterative process allows for refinements, guaranteeing the final design aligns perfectly with your vision and business needs.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={Figma}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "3) We code everything from scratch",
        description: "Experience the power of custom development. Our expert team builds your site from the ground up using modern frameworks, ensuring fast page load times and pixel-perfect design. This bespoke approach allows us to optimize every aspect of your site's performance and functionality. The result? A unique, high-performance website tailored to your specific requirements and free from the limitations of pre-built templates.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={Code}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "4) We launch your site on fast, reliable servers",
        description: "Your meticulously crafted website deserves a robust hosting environment. We deploy your site on high-performance servers, optimized for speed and reliability for a low monthly cost of $20. This fee includes ongoing maintenance and support to keep your site running smoothly.Prefer to use your own hosting service? No problem. Our team will work closely with your IT department to deploy the site on your chosen platform, ensuring optimal performance and seamless integration with your existing infrastructure.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={Servers}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    }
]