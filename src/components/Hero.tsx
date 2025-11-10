import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Hero: React.FC = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; // Offset for sticky header
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Rohit is an <span className="text-primary">AI/ML developer</span> with OpenCV and YOLO experience.
          </h1>
          <p className="text-gray-text mt-6 mb-8">He crafts Projects where technologies meet creativity</p>
          <HashLink to="/#contacts" smooth scroll={scrollWithOffset} className="inline-block px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors">
            Contact me!!
          </HashLink>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
             <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e515/331d/832a7d3dbfc9f1b1f1747464a916f8f5?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fPk~F1tmR2C4-W56tvulbOXjSb46yAzCpVxGzKZYKtDD2XDP24GQ4H4OAZ4XY-nz9ecms2aL-A5TBtfyTC2toFeD384jPPUUX6EH~ORRKPRBlzQA1Kdyz3C-PIvmr~5U1oihJo3tphy89gPHoiQ6QgQpSvnnT~LmwYjHBnO1uRkiLgm6VXsjsJQivRV96wvVmXgvwMQQAeCcwLB2vXjuamDFjKUJghZi1VX-yrDXG9hJTHCAO2T5gMAGxp1qbVPYxyiuC84NpQxJPx0OBkrfNC-Wt8UlFgzTn2FXjcCRFdlhVBLo1ewcgY4KOS-kDukwZG2UM9ynfo63i8ACvxpXcA__" 
              alt="Rohit, the developer" 
              className="w-full h-full object-cover rounded-full border-4 border-primary/50"
            />
          </div>
          <div className="flex items-center gap-2 border border-gray-text p-2 mt-4">
            <div className="w-4 h-4 bg-primary"></div>
            <p className="text-gray-text">Currently working on <span className="text-white">Portfolio</span></p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 mt-24">
        <div className="max-w-2xl mx-auto">
          <figure className="border border-accent p-8 relative text-center md:text-left">
            <blockquote className="text-2xl font-medium text-accent">
              "With deep learning comes shallow sleep"
            </blockquote>
            <div className="absolute top-[-1px] left-4 bg-background px-2 text-5xl text-gray-text">“</div>
            <div className="absolute bottom-[-20px] right-4 bg-background px-2 text-5xl text-gray-text">”</div>
          </figure>
          <div className="w-full flex justify-end mt-[-1px]">
            <figcaption className="border border-accent p-4 text-accent">
              - Dr. Who
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
