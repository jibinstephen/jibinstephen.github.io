import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Image */}
      <section>
        <Image
          src="/IMG_5753.PNG"
          alt="Anandavandi main banner"
          width={1920}
          height={1080}
          priority
          className="w-full relative"
        />
      </section>

      {/* Second Image */}
      <section>
        <Image
          src="/IMG_6104.JPG"
          alt="Anandavandi visual"
          width={1920}
          height={1080}
          className="w-full relative -top-3"
        />
      </section>

      {/* Education Image */}
      <section>
        <Image
          src="/education.jpg"
          alt="Education showcase"
          width={1920}
          height={1080}
          className="w-full relative -top-3"
        />
      </section>

      {/* Video Section */}
      <section aria-label="Video showcase">
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
      </section>

      {/* Image Below Video */}
      <section>
        <Image
          src="/IMG_5873.PNG"
          alt="Anandavandi featured visual"
          width={1920}
          height={1080}
          className="w-full relative"
        />
      </section>

      {/* Hover Zoom Images */}
      <section className="flex w-full gap-4">
        <div className="flex-1 overflow-hidden rounded-xl">
        <Link
         href="/Anandavandi"
         scroll
         >
          <Image
            src="/AANANDAVANDI03.jpg"
            alt="Anandavandi cultural visual"
            width={800}
            height={600}
            className="
              w-full h-full
              cursor-pointer
              transition-transform duration-300
              hover:scale-110
            "
          />
          </Link>
        </div>

        <div className="flex-1 overflow-hidden rounded-xl">
        <Link
         href="/Binfarash"
         scroll
        >
          <Image
            src="/AANANDAVANDI04.png"
            alt="Anandavandi educational visual"
            width={800}
            height={600}
            className="
              w-full h-full
              cursor-pointer
              transition-transform duration-300
              hover:scale-110
            "
          />
          </Link>
        </div>
      </section>

    </main>
  );
}