// import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../Backgrounds/RadialGradientBackground";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* <RadialGradientBackground /> */}
      <RadialGradientBackground variant="hero"></RadialGradientBackground>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 py-20  w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-3 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6 leading-tight">
                Hi, I'm Md. Tamim Hasan
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/5- to-primary/20 rounded-full"></div>
                {/* <h3 className="text-2xl mb-4">MERN / Full Stack Developer</h3> */}
                <h1 className="text-4xl font-bold mb-4">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("MERN / Full Stack Developer")
                        .changeDelay(30)
                        .callFunction(() => {
                          typewriter.stop(); // এখানে পুরো animation থেমে যাবে
                        })
                        .start();
                    }}
                  />
                </h1>
              </div>
              <p className="text-lg text-white/70 mb-8 max-w-137">
                I am a web developer with practical experience in building
                full-stack (MERN) applications using React, Node.js, Express,
                and MongoDB.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex gap-0 group items-center mb-12"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-2xl px-6.5 py-3 text-base font-medium border border-white ">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                    key={index}
                  >
                    <div className="text-2xl font-normal text-primary font-mono mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* Right column developer image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-1 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>
                {/* image container */}
                <div className="relative overflow-auto  m-1 rounded-2xl h-[calc(100%-2px)]">
                  <img
                    className="w-full h-full object-cover"
                    src="/tamim-removebg-preview.png"
                    alt="developer-portrait"
                  />
                </div>
                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className=" w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNodedotjs className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary"></ChevronDown>
      </button>
    </section>
  );
};

export default Hero;
