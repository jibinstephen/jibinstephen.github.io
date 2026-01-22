import Image from "next/image";
import Link from "next/link";

export default function BinPage() {
  return (
    <>
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur ">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <Link
            href="/"
            aria-label="Go back"
            className="inline-flex items-center gap-2 text-black font-medium hover:opacity-70"
          >
            {/* Back Icon */}
            <span className="text-xl">
              <svg
                viewBox="0 0 24 24"
                className="h-[2.8rem] md:h-[3.5rem]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                >
              <circle cx="12" cy="12" r="10" />
              <path d="M14 8l-4 4 4 4" />
            </svg></span>
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

    <main className="w-full lg:pl-48 lg:pr-48 ">
      <Image
        src="/conne2-01.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full  border-1 border-black mb-6 "
        priority
      />
       <Image
        src="/fstart1-01.png"
        alt="Anandavandi cultural visual"
        width={900}
        height={800}
        className="w-full border-1 border-black mb-6 "
        priority
      />
       <Image
        src="/vesham-01.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />


    </main>
    </>
  );
}