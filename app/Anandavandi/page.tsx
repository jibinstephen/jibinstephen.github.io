import Image from "next/image";
import Link from "next/link";

export default function AnandavandiPage() {
  return (
    <main className="w-full lg:pl-48 lg:pr-48">

      <div>
        <Link href="/" className=" font-bold"> Back</Link>
      </div>

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
  );
}