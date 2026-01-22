'use client';

import Image from 'next/image';
import { Behance, InstagramIcon, LinkedInIcon } from '../Hook/Svgicons';

const Contact = () => {
    return (
        <section className="w-full bg-white py-24 px-4 sm:px-8 lg:px-16" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Illustration Side */}
                <div className="flex-1 w-full flex justify-center md:justify-start">
                    <div className="relative w-full max-w-md aspect-square">
                        <Image
                            src="/contact_illustration.png"
                            alt="Get in touch"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
                        Let&apos;s <span className="font-semibold">Connect</span>
                    </h2>

                    <p className="text-lg text-gray-500 max-w-md font-light leading-relaxed">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex items-center gap-6 mt-4">
                        <a
                            href='https://www.instagram.com/_chilla_art/'
                            target='_blank'
                            className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/jibin-stephen-2739071b7'
                            target='_blank'
                            className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a
                            href='https://www.behance.net/jibinstephen'
                            target='_blank'
                            className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                            aria-label="Behance"
                        >
                            <Behance className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="pt-8 w-full">
                        <a
                            href="mailto:jibinstephen82@gmail.com"
                            className="inline-block border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 tracking-wide font-light text-sm uppercase"
                        >
                            Send me a message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
