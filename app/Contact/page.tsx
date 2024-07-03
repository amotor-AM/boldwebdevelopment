import React from 'react'
import Script from 'next/script'
import Image from 'next/image';
import ContactHero from "@/assets/images/contactHero.png"

function Contact() {
  return (
    <div className="flex flex-col xl:flex-row items-center lg:items-start justify-between px-4 lg:px-16 py-10 lg:py-20">
      <div className="xl:w-1/2 w-full lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl md:text-4xl font-bold mb-4">
          Need a website that stands out? We can help.
        </h1>
        <p className="text-xl mb-8">
          From stunning design to powerful functionality, Bold Web Development builds websites that get noticed. Don&apos;t wait any longer to take control of your online presence. Schedule your free consultation today and let&apos;s get started!
        </p>
        <div className="flex items-center mb-8">
          <span className="text-xl">123-456-7890</span>
        </div>
        <div className="hb-p-6657601bdcb8e00037991139-1"></div>
        <Image
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.honeybook.com/p.png?pid=6657601bdcb8e00037991139"
          alt="tracking pixel"
        />
        <Script
          id="honeybook-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,b,s,n,i,p,e,t) {
                h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
                t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
              })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6657601bdcb8e00037991139");
            `,
          }}
        />
      </div>
      <div className="relative xl:w-1/2 w-full h-[1200px] xl:block hidden">
          <Image
            src={ContactHero}
            alt="Contact Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
    </div>
  )
}

export default Contact