import Image from "next/image";
import Link from "next/link";

export default function AnandavandiPage() {
  return (
    <> <div className="sticky top-0 z-50 bg-white/80 backdrop-blur ">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <Link
            href="/"
            aria-label="Go back"
            className="inline-flex items-center gap-2 text-black font-medium hover:opacity-70"
          >
            {/* Back Icon */}
            <span className="text-xl">←</span>
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

    <main className="w-full lg:pl-48 lg:pr-48 ">

      <Image
        src="/1.gif"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />

      <Image
        src="/aanadavandifinal-01.jpg"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
      <Image
        src="/secnd-02.jpg"
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