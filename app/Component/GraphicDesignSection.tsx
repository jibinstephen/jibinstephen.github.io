'use client';

import Link from "next/link";

const GraphicDesignSection = ({
  title,
  subTitle,
  hoverBg,
  setBg,
  bg,
  href
}: {
  title: string;
  subTitle: string;
  hoverBg: string;
  bg: string;
  href:string;
  setBg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <section className={`w-full py-32 px-4 sm:px-8 lg:px-10 ${bg}`}>
      <div className="max-w-7xl mx-auto space-y-16 text-center ">

        <div
          className="relative inline-flex items-center gap-6 group "
          onMouseEnter={() => setBg(hoverBg)}
          onMouseLeave={() => setBg('bg-transparent')}
        >
          {/* Title */}
          <Link href={href}>

          <h2 className="text-3xl font-bold md:text-5xl font-light tracking-tight text-gray-900 border-b pb-4 border-gray-100">
            {title}
          </h2>

          {/* Right-facing icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-[2.8rem] md:h-[3.5rem] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" />
          </svg>

          {/* Subtitle */}
          <span className="absolute -top-2 right-0 text-sm text-gray-400">
            {subTitle}
          </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GraphicDesignSection;