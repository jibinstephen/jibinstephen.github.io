'use client'
import Image from "next/image";
import Link from "next/link";
import { Navbar } from './Component/Navbar'
import Contact from './Component/Contact'
import IllustrationSection from './Component/IllustrationSection'
import GraphicDesignSection from './Component/GraphicDesignSection'
import FeaturedProject from './Component/FeaturedProject'
import { useState } from "react";

export default function Home() {
  const [bg,setBg]= useState('bg-red')
  return (
    <>
     <div className="sticky top-0 z-50 bg-white/80 backdrop-blur ">
        <div className=" ">
          <Navbar />

        </div>
      </div>
      <main className="w-full bg-white">
        <section aria-label="Video showcase m-0 p-0 bg-transparent ">
          <video
           autoPlay
           loop
           muted
           playsInline
           preload="metadata"
           className="block w-full h-auto  scale-[1.01]"
          >
            <source src="/first2.mp4" type="video/mp4" />
          </video>
        </section>
        <section aria-label="Video m-0 p-0 bg-transparent">
          <video
           autoPlay
           loop
           muted
           playsInline
           preload="metadata"
           className="block w-full h-auto  scale-[1.01]"
          >
            <source src="/secondforafter.mp4" type="video/mp4" />
          </video>
        </section>
        <section aria-label="Video m-0 p-0 bg-transparent">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="block w-full h-auto  scale-[1.01]"
          >
            <source src="/3rdpage2_3.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Hero Image */}
        {/* <section>
          <Image
            src="/first2.gif"
            alt="Anandavandi main banner"
            width={1920}
            height={1080}
            priority
            className=" w-fit"
          />
        </section>

        {/* Second Image
        <section>
          <Image
            src="/secondforafter.gif"
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>*/}

        {/* Education Image
        <section>
          <Image
            src="/3rdpage2.gif"
            alt="Education showcase"
            width={1920}
            height={1080}
            className="w-full relative top-3 "
          />
        </section>*/}

        {/* Video Section */}
        {/* <section aria-label="Video showcase m-0 p-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto"
          >
            <source src="/17.32.47.mp4" type="video/mp4" />
          </video>
        </section> */}

        {/* Image Below Video */}
        {/* <section>
          <Image
            src="/IMG_6216.JPG"
            alt="Anandavandi featured visual"
            width={1920}
            height={1080}
            className="w-full relative"
          />
        </section> */}

        {/* Featured Projects */}
        {/* <section className="flex  flex-col lg:flex-row  w-full gap-4  bg-white/80">
          <FeaturedProject
            title="Anandavandi"
            category="Campaign For Calicut Corporation"
            imageSrc="/AANANDAVANDI03.jpg"
            imageAlt="Anandavandi cultural visual"
            href="/Anandavandi"
          />

          <FeaturedProject
            title="Binfarash"
            category="Package Designing"
            imageSrc="/AANANDAVANDI04.png"
            imageAlt="Anandavandi educational visual"
            href="/Binfarash"
          />
        </section> */}



        {/* <IllustrationSection /> */}
        {/* <GraphicDesignSection
          title="VISUAL ILLUSTRATION"
          subTitle=""
          hoverBg="bg-blue-600 "
          setBg={setBg}
          bg={bg}
          href="visual-Illustration"
        /> */}


        <Contact />

      </main >
    </>

  );
}