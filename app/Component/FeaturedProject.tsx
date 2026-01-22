'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectProps {
    title: string;
    category: string;
    imageSrc: string;
    href: string;
    imageAlt: string;
    width?: number;
    height?: number;
}

const FeaturedProject = ({
    title,
    category,
    imageSrc,
    href,
    imageAlt,
    width = 800,
    height = 600,
}: FeaturedProjectProps) => {
    return (
        <Link href={href} scroll className="group block w-full">
            <div className="relative   aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-0 lg:group-hover:opacity-10 transition-opacity duration-500 z-10" />
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className=" object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Mobile: Always visible content overlay */}
                <div className="absolute inset-0  bottom-6 flex flex-col justify-end md:hidden bg-gradient-to-t from-black/60 to-transparent text-center">
                    <span className="text-white/80 text-sm font-medium tracking-widest uppercase mb-1">{category}</span>
                    <h3 className="text-white text-2xl font-light">{title}</h3>
                </div>
            </div>

            {/* Desktop: Content below image */}
            <div className="hidden md:flex flex-col mt-6 space-y-1">
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-4 group-hover:border-gray-300 transition-colors duration-500">
                    <h3 className="text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">{title}</h3>
                    <span className="text-sm font-medium text-gray-400 tracking-widest uppercase group-hover:text-gray-900 transition-colors duration-300">{category}</span>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedProject;
