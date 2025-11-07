import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
    );
};

export default Home;
