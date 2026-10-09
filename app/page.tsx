'use client'
import LazyImage from "./Component/LazyImage";
import ImageLoadGate, { ImageLoadState } from "./Component/ImageLoadGate";
import LoadingScreen from "./Component/LoadingScreen";
import Link from "next/link";
import { Navbar } from './Component/Navbar'
import Contact from './Component/Contact'
import IllustrationSection from './Component/IllustrationSection'
import GraphicDesignSection from './Component/GraphicDesignSection'
import FeaturedProject from './Component/FeaturedProject'
import { useEffect, useState } from "react";
import { AutoVideo } from "./Component/AutoVideo";
import slideImg1 from "./assets/new/Slide 16_9 - 712.png";
import slideImg2 from "./assets/new/Slide 16_9 - 713.png";
import slideImg3 from "./assets/new/Slide 16_9 - 714.png";
import slideImg4 from "./assets/new/Slide 16_9 - 715.png";
import slideImg5 from "./assets/new/Slide 16_9 - 718.png";
import slideImg6 from "./assets/new/Slide 16_9 - 716.png";
import slideImg7 from "./assets/new/Slide 16_9 - 719.png";
import slideImg8 from "./assets/new/Slide 16_9 - 720.png";
import slideImg9 from "./assets/new/Slide 16_9 - 721.png";
import slideImg10 from "./assets/new/Slide 16_9 - 723.png";
import slideImg11 from "./assets/new/Slide 16_9 - 724.png";
import slideImg12 from "./assets/new/Slide 16_9 - 725.png";
import slideImg13 from "./assets/new/Slide 16_9 - 726.png";
import slideImg14 from "./assets/new/Slide 16_9 - 722.png";
import slideImg15 from "./assets/new/Slide 16_9 - 717.png";
import slideImg16 from "./assets/new/Slide 16_9 - 728.png";
import slideImg17 from "./assets/new/8825927.png";
import slideImg18 from "./assets/new/8825928.png";
import slideImg19 from "./assets/new/8825946.png";
import slideImg20 from "./assets/new/8825931.png";
import slideImg21 from "./assets/new/Slide 16_9 - 729.png";
import slideImg22 from "./assets/new/8825932.png";
import slideImg23 from "./assets/new/8825933.png";
import slideImg24 from "./assets/new/8825934.png";
import slideImg25 from "./assets/new/Slide 16_9 - 730.png";
import slideImg26 from "./assets/new/Slide 16_9 - 670.png";
import slideImg27 from "./assets/new/8825935.png";
import slideImg28 from "./assets/new/8825936.png";
import slideImg29 from "./assets/new/8825937.png";
import slideImg30 from "./assets/new/8825938.png";
import slideImg31 from "./assets/new/8825939.png";
import slideImg32 from "./assets/new/8825940.png";
import slideImg33 from "./assets/new/8825941.png";
import slideImg34 from "./assets/new/8825942.png";
import slideImg35 from "./assets/new/8825945.png";
import slideImg36 from "./assets/new/8825946.png";
import slideImg37 from "./assets/new/8825943.png";
import slideImg38 from "./assets/new/8825776.png";
import slideImg39 from "./assets/new/8825777.png";
import slideImg40 from "./assets/new/8825778.png";
import slideImg41 from "./assets/new/8825779.png";
import slideImg42 from "./assets/new/8825780.png";
import slideImg43 from "./assets/new/8825781.png";
import slideImg44 from "./assets/new/8825782.png";
import slideImg45 from "./assets/new/8825783.png";
import slideImg46 from "./assets/new/8825784.png";
import slideImg47 from "./assets/new/8825785.png";
import slideImg48 from "./assets/new/8825786.png";
import slideImg49 from "./assets/new/8825787.png";
import slideImg50 from "./assets/new/8825788.png";
import slideImg51 from "./assets/new/8825789.png";
import slideImg52 from "./assets/new/8825790.png";
import slideImg53 from "./assets/new/8825791.png";
import slideImg54 from "./assets/new/8825792.png";
import slideImg55 from "./assets/new/8825793.png";



export default function Home() {
  const [bg, setBg] = useState('bg-red')
  const [showNavbar, setShowNavbar] = useState(false);
  const [imageLoad, setImageLoad] = useState<ImageLoadState>({
    loaded: 0,
    total: 0,
    ready: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (imageLoad.ready) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeout = window.setTimeout(() => {
      setImageLoad((current) => ({ ...current, ready: true }));
    }, 60000);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timeout);
    };
  }, [imageLoad.ready]);

  const handleImageLoad = (state: ImageLoadState) => {
    setImageLoad((current) => {
      if (current.ready) return current;
      if (
        current.loaded === state.loaded &&
        current.total === state.total &&
        current.ready === state.ready
      ) {
        return current;
      }
      return state;
    });
  };

  const loadPercent = imageLoad.total
    ? Math.round((imageLoad.loaded / imageLoad.total) * 100)
    : 0;

  return (
    <>
      <LoadingScreen progress={loadPercent} hidden={imageLoad.ready} />
      <div
        className={`sticky top-0 z-50 bg-white/80 backdrop-blur transition-all duration-300 ${showNavbar
          ? "translate-y-0 opacity-100 "
          : "-translate-y-full opacity-0 pointer-events-none  hidden"
          }`}
      >
        <Navbar />
      </div>

      <ImageLoadGate onChange={handleImageLoad}>
      <main className="w-full bg-white">
        {/* <AutoVideo src="/333333.mp4" />
<AutoVideo src="/secondforafter.mp4" />
 <AutoVideo src="/3rdpage2_3.mp4" /> */}

        {/* <section className="m-0 p-0 overflow-hidden -mt-px">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="block w-full h-auto scale-[1.01]"
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
        </section>*/}

        {/* Hero Image */}
        <section>
          <LazyImage
            src={slideImg1}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg2}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg3}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg4}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg5}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg6}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>

        <section>
          <LazyImage
            src="/ANADHAVANDIFIRST.gif"
            alt="Anandavandi main banner"
            width={1920}
            height={1080}
            className=" w-fit"
          />
        </section>

        <section>
          <LazyImage
            src={slideImg7}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg8}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg9}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg10}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg11}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg12}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg13}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg14}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg15}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>

        <section>
          <LazyImage
            src={slideImg16}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>

        <section>
          <LazyImage
            src={slideImg17}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg18}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg19}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg20}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg21}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg22}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg23}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg24}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg25}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg26}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg27}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg28}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg29}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg30}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg31}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg32}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg33}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg34}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg35}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        {/* <section>
          <Image
            src={slideImg36}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section> */}
        <section>
          <LazyImage
            src={slideImg37}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg38}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg39}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg40}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg41}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg42}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg43}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg44}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg45}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg46}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg47}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg48}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg49}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg50}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg51}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg52}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg53}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg54}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>
        <section>
          <LazyImage
            src={slideImg55}
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section>


        {/* <section>
          <Image
            src="/anandavandilast-01.png"
            alt="Anandavandi visual"
            width={1920}
            height={1080}
            className="w-fit"
          />
        </section> */}

        {/* Education Image*/}


        {/* <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cDEpBoEdX7E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <section>
          <Image
            src="/222-01.png"
            alt="Education showcase"
            width={1920}
            height={1080}
            className="w-full relative top-3 "
          />
        </section> */}

        {/* Video Section */}
        {/* <section >
          <Image
            src="/Untitled-2-02.png"
            alt="Education showcase"
            width={1920}
            height={1080}
            className="w-full relative top-3 "
          />
        </section>
        <section className=" relative">
          <div className="  absolute top-0 right-0 z-10 h-auto w-auto p-2 lg:p-4 m-2 lg:m-4 rounded-xl bg-gray-200">
            <span className="text-sm md:text-2xl lg:text-5xl  font-serif"> No: 1</span>
          </div>
          <Image
            src="/Recovered01.png"
            alt="Education showcase"
            width={1920}
            height={1080}
            className="w-full relative top-3 "
          />
        </section>
        <section className="m-0 p-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="block w-full h-auto scale-[1.01]"
          >
            <source src="/6385IMG.MP4" type="video/mp4" />
          </video>
        </section>
        <section >
          <Image
            src="/3RDPAGE-01.png"
            alt="Education showcase"
            width={1920}
            height={1080}
            className="w-full relative top-3 "
          />
        </section> */}

        {/* Image Below Video */}
        {/* <section className=" relative">
          <div className="  absolute top-0 right-0 z-10 h-auto w-auto p-2 lg:p-4 m-2 lg:m-4 rounded-xl bg-gray-200">
            <span className="text-sm md:text-2xl lg:text-5xl  font-serif"> No: 2</span>
          </div>
          <Image
            src="/PG-01.png"
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
      </ImageLoadGate>
    </>

  );
}