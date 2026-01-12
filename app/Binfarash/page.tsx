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
            <span className="text-xl">←</span>
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

    <main className="w-full lg:pl-48 lg:pr-48 ">
      <Image
        src="/bin/1.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/2.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/3.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/4.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/5.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/6.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/7.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/8.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/9.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/10.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/11.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/12.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/13.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/14.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/15.png"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/16.jpeg"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/17.jpeg"
        alt="Anandavandi cultural visual"
        width={1200}
        height={800}
        className="w-full "
        priority
      />
       <Image
        src="/bin/18.png"
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