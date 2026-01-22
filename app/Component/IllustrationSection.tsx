'use client';


import FeaturedProject from './FeaturedProject';



const IllustrationSection = () => {
    return (
        <section className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-white border-s" id="illustrations">
            <div className="max-w-7xl mx-auto space-y-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 border-b pb-8 border-gray-100">

                </h2>

                <FeaturedProject
            title="Binfarash"
            category="Education Platform"
            imageSrc="/illustration front page-01.jpg"
            imageAlt="Anandavandi educational visual"
            href="/Binfarash"
          />
            </div>
        </section>
    );
};

export default IllustrationSection;
