"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Smartphone, Calendar, MapPin, Sparkles, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Home() {
  const experiences = [
    {
      role: "Graphic Designer",
      company: "EastNet Computer Tg Malim",
      date: "Jan 2025 - now",

    },
    {
      role: "Personal Mystep E29",
      company: "Jabatan Perangkaan Malaysia ",
      date: "Mac 2024 -  Dis 2024",
      desc: "Bahagian Perangkaan Perkhidmatan"
    },
    {
      role: "Production Crew",
      company: "I-Creative Sdn Bhd ",
      date: "Jan 2023 - Dis 2023",

    },
    {
      role: "Production Crew",
      company: "Dimensi Jaya Enterprise",
      date: "Ogos 2021- Dis 2022",

    }
  ];

  const education = [
    {
      degree: "Diploma Pemprosesan Kayu dan Kemasan ",
      school: "Kolej Vokasional Slim River",
      date: "2016 - 2020",
      location: "Slim River, Perak"
    }
  ];

  const technicalSkills = ["Ai", "Ps", "Ae", "Fi"];
  const interests = ["Design", "Arts & Craft", "Music", "Cinema", "Design thinking", "Develop"];

  return (
    <div className="min-h-screen relative font-plus-jakarta antialiased">
      {/* Hero Section (Folder Layout) */}
      <section
        className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center bg-[url('/images/images-01.webp')] bg-cover bg-center"
      >
        <div
          className="absolute z-0 flex flex-col items-center -translate-x-[50%] md:-translate-x-[40%] -translate-y-10 md:-translate-y-40"
        >
          <h1
            className="text-[18vw] font-extrabold text-[#596AFA] select-none tracking-tight uppercase leading-[0.8] -translate-x-[20%] md:-translate-x-[10%]"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontVariationSettings: '"wdth" 75',
            }}
          >
            PORT
          </h1>
          <div
            className="w-[80%] h-[1.5vw] bg-[#596AFA] mt-[2vw] -translate-x-[50%] md:-translate-x-[15%]"
          ></div>
          <p
            className="text-xl font-regular text-black uppercase tracking-widest mt-2 -translate-x-[100%] md:-translate-x-[140%]"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontVariationSettings: '"wdth" 75',
            }}
          >
            WEB DEVELOPER
          </p>
        </div>
        
        {/* folio text */}
        <div
          className="absolute z-0 flex flex-col items-center translate-x-[50%] md:translate-x-[40%] translate-y-[20%] md:translate-y-[25%]"
        >
          <p
            className="text-xl font-regular text-black uppercase tracking-widest translate-x-[80%] md:translate-x-[150%]"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontVariationSettings: '"wdth" 75',
            }}
          >
            GRAPHIC DESIGNER
          </p>
          <div
            className="w-[80%] h-[1.5vw] bg-[#596AFA] mb-[2vw] translate-x-[50%] md:translate-x-[15%]"
          ></div>

          <h1
            className="text-[18vw] font-extrabold text-[#596AFA] select-none tracking-tight uppercase leading-[0.8] translate-x-[20%] md:translate-x-[10%]"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontVariationSettings: '"wdth" 75',
            }}
          >
            FOLIO
          </h1>
        </div>

        {/* folder menu content */}
        <div
          className="absolute z-20 flex flex-col gap-[2.2vw] w-[40vw] md:w-[25vw] -translate-x-[2vw] translate-y-[5vw]"
        >
          {/* About Me */}
          <div className="flex items-center cursor-pointer group">
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] w-[6vw] text-center"
            >
              01
            </div>
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] uppercase tracking-widest pl-[2vw] group-hover:text-blue-200 transition-colors"
            >
              About Me
            </div>
          </div>
          {/* Web Project */}
          <div className="flex items-center cursor-pointer group">
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] w-[6vw] text-center"
            >
              02
            </div>
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] uppercase tracking-widest pl-[2vw] group-hover:text-blue-200 transition-colors"
            >
              Web Project
            </div>
          </div>
          {/* Design Project */}
          <div className="flex items-center cursor-pointer group">
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] w-[6vw] text-center"
            >
              03
            </div>
            <div
              className="text-white font-bold text-[2.5vw] md:text-[1.8vw] uppercase tracking-widest pl-[1vw] group-hover:text-blue-200 transition-colors"
            >
              Design Project
            </div>
          </div>
        </div>

        {/* Folder Frame Image */}
        <div
          className="absolute inset-0 z-10 bg-[url('/images/file.webp')] bg-contain bg-center bg-no-repeat scale-125 md:scale-100"
        ></div>
      </section>

      {/* Visual background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0 select-none overflow-hidden">
        <Sparkles className="absolute top-[10%] left-[5%] text-accent-blue/10" size={150} />
      </div>

      <div className="max-w-6xl mx-auto p-8 md:p-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 relative">

          {/* LEFT COLUMN: Sidebar style */}
          <div className="space-y-12">
            {/* Profile Area */}

            <div className="relative w-full aspect-[4/5] mb-12">
              {/* Blue Background (Ngam & Clean) */}
              <div className="absolute inset-0 bg-accent-blue rounded-full shadow-2xl ">
                <div className="absolute  bg-gradient-to-br from-orange-600 to-blue-600 opacity-0" />

                {/* Image centered perfectly inside the box */}
                <img
                  src="/images/1.png"
                  alt="Ikhwan"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badges positioned neatly */}
              <div className="absolute -top-4 -right-4 flex gap-2 z-20">
                <div className="w-12 h-12 rounded-full border-2 border-text-dark bg-white flex items-center justify-center font-black text-sm shadow-xl">IN</div>
                <div className="w-12 h-12 rounded-full border-2 border-text-dark bg-white flex items-center justify-center shadow-xl">
                  <Sparkles size={18} fill="currentColor" className="text-accent-blue" />
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <section className="bg-white/30 backdrop-blur-sm p-8 rounded-[32px] border border-white/50">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="heading-wide text-2xl tracking-tighter">Contact</h2>
                <Sparkles size={20} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="space-y-6">
                {/* TikTok */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-11 h-11 bg-text-dark text-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C10.8954 2 10 2.89543 10 4V14.1706C9.48912 13.8824 8.89456 13.7143 8.26087 13.7143C6.4604 13.7143 5 15.1747 5 16.9752C5 18.7756 6.4604 20.236 8.26087 20.236C10.0613 20.236 11.5217 18.7756 11.5217 16.9752V7H12.422C14.1594 7 15.5414 8.01235 16.0357 10H18V7C16.8954 7 16 6.10457 16 5V2H12Z" /></svg>
                  </div>
                  <span className="font-bold text-sm tracking-tight text-gray-700 underline-offset-8 decoration-accent-blue decoration-2 hover:underline">Tiktok</span>
                </div>
                {/* Gmail */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-11 h-11 bg-text-dark text-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-colors"><Mail size={20} /></div>
                  <span className="font-bold text-sm tracking-tight underline decoration-accent-blue underline-offset-8 decoration-2 text-gray-800">ikhwannnazri0608@gmail.com</span>
                </div>
                {/* GitHub */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-11 h-11 bg-text-dark text-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-colors"><Github size={20} /></div>
                  <span className="font-bold text-sm tracking-tight underline decoration-accent-blue underline-offset-8 decoration-2 text-gray-800">IkhwanNazri-github</span>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="heading-wide text-2xl tracking-tighter">Technical Skills</h2>
                <Sparkles size={20} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {technicalSkills.map((skill) => (
                  <div key={skill} className="skill-tile shadow-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* LANGUAGES */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="heading-wide text-2xl tracking-tighter">Languages</h2>
                <Sparkles size={20} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center pr-4">
                  <span className="font-bold text-gray-400 italic text-lg tracking-tight">Malay</span>
                  <span className="font-black text-sm underline decoration-accent-blue underline-offset-8 decoration-4">Native</span>
                </div>
                <div className="flex justify-between items-center pr-4">
                  <span className="font-bold text-gray-400 italic text-lg tracking-tight">English</span>
                  <span className="font-black text-sm underline decoration-accent-blue underline-offset-8 decoration-4">Intermediate</span>
                </div>
              </div>
            </section>

            {/* INTERESTS */}
            <section tabIndex={0}>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="heading-wide text-2xl tracking-tighter">Interests</h2>
                <Sparkles size={20} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <div key={interest} className="interest-chip bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                    {interest}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Content Style */}
          <div className="space-y-20">
            {/* ABOUT ME */}
            <section className="relative pt-10">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles size={32} className="text-accent-blue animate-pulse" fill="currentColor" />
                <h2 className="heading-wide text-4xl tracking-tighter">About Me</h2>
              </div>
              <p className="text-[1.35rem] leading-[1.65] font-semibold text-gray-700 tracking-tight max-w-2xl italic">
                &quot;I&apos;m a Malaysian designer specialized in branding and graphic design. My passion lies in crafting and enhancing projects that stand out with a distinctive style.&quot;
              </p>
              <p className="text-lg leading-[1.8] font-medium text-gray-600 mt-6 max-w-3xl">
                Inspired by the stars, I believe in limitless creativity, where every idea has the potential to shine
                and leave a lasting impact. My focus is on ensuring they convey the right message with a
                genuine and unique personality.
              </p>
              <div className="section-divider mt-14 mb-1.5 opacity-40" />
              <div className="blue-line w-full h-[3px] bg-accent-blue rounded-full" />
            </section>



            {/* EXPERIENCE */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <h2 className="heading-wide text-4xl tracking-tighter">Experience</h2>
                <Sparkles size={32} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="space-y-16">
                {experiences.map((exp, i) => (
                  <div key={i} className="grid grid-cols-[140px_1fr] gap-8 group">
                    <div className="flex flex-col">
                      <span className="font-black text-[10px] uppercase opacity-20 group-hover:opacity-100 transition-opacity mb-2 tracking-[0.2em] text-accent-blue">{exp.role}</span>
                      <span className="font-black text-gray-300 italic text-xl tracking-tighter group-hover:text-accent-blue transition-colors">{exp.date}</span>
                    </div>
                    <div className="pl-6 border-l-2 border-transparent group-hover:border-accent-blue transition-all duration-500">
                      <h3 className="heading-wide text-2xl mb-3 flex items-center justify-between tracking-tight">
                        {exp.company}
                        <ArrowUpRight className="text-accent-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" size={28} />
                      </h3>
                      <p className="font-bold text-gray-500 leading-relaxed max-w-lg text-[1.1rem]">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <h2 className="heading-wide text-4xl tracking-tighter">Education</h2>
                <Sparkles size={32} className="text-accent-blue" fill="currentColor" />
              </div>
              <div className="space-y-12">
                {education.map((edu, i) => (
                  <div key={i} className="grid grid-cols-[140px_1fr] gap-8 group">
                    <span className="font-black text-gray-300 italic text-xl mt-1 tracking-tighter group-hover:text-accent-blue transition-colors">{edu.date}</span>
                    <div className="bg-white/10 p-2 rounded-2xl group-hover:bg-white/20 transition-all">
                      <h3 className="heading-wide text-2xl mb-2 tracking-tight">{edu.degree}</h3>
                      <p className="font-black text-gray-600 mb-1">{edu.school}</p>
                      <p className="text-sm font-bold opacity-30 italic">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* LOGOFOLIO SECTION */}
      <section className="blue-section min-h-[70vh] flex flex-col mt-40">
        {/* Marquee Bar */}
        <div className="marquee-container z-20">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white/90 text-sm font-black tracking-widest uppercase">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span>PORTFOLIO</span>
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"><Sparkles size={10} fill="currentColor" /></div>
                <span>2025</span>
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center font-bold text-[8px]">S</div>
                <span>IKHWAN NAZRI</span>
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"><Sparkles size={10} fill="currentColor" /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-white p-30 relative">
          <Sparkles size={120} className="mb-20 text-black opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4]" fill="currentColor" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center z-10"
          >
            <Sparkles size={64} className="mb-10 text-black" fill="currentColor" />
            <h2 className="logofolio-text text-[8rem] md:text-[15rem] leading-[0.8] text-center text-white">
              WEB<br />PROJECTS
            </h2>
          </motion.div>
        </div>
      </section>
      <div className="marquee-container z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white/90 text-sm font-black tracking-widest uppercase">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>PORTFOLIO</span>
              <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"><Sparkles size={10} fill="currentColor" /></div>
              <span>2025</span>
              <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center font-bold text-[8px]">S</div>
              <span>IKHWAN NAZRI</span>
              <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"><Sparkles size={10} fill="currentColor" /></div>
            </div>
          ))}
        </div>
      </div>

      {/* WEB PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={24} className="text-accent-blue" fill="currentColor" />
              <span className="text-sm font-black uppercase tracking-[0.3em] opacity-30">Selected Works</span>
            </div>
            <h2 className="heading-wide text-6xl md:text-8xl tracking-tighter leading-none">
              WEB<br />PROJECTS
            </h2>
          </div>
          <p className="max-w-sm text-gray-500 font-bold leading-relaxed italic">
            &quot;Merging high-end graphic design with functional, robust web development to create unique digital experiences.&quot;
          </p>
        </div>

        {/* Parallel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {[
            { id: "01", title: "Pusat Tuisyen Akademik Terbilang", category: "Full-stack Tuition Management System", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" },
            { id: "02", title: "NEO ARCHIVE", category: "Portfolio Engine", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
            { id: "03", title: "CYBER PULSE", category: "Real-time Dashboard", img: "https://images.unsplash.com/photo-1551288049-762281abb20d?auto=format&fit=crop&q=80&w=800" },
            { id: "04", title: "VINTAGE CO.", category: "Marketing Platform", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" }
          ].map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col ${i % 2 === 1 ? 'md:translate-y-24' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-gray-200 mb-8 shadow-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent-blue shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black tracking-widest text-accent-blue">
                  {project.id}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="heading-wide text-3xl mb-1">{project.title}</h3>
                  <p className="font-bold text-gray-400 italic text-sm">{project.category}</p>
                </div>
                <div className="blue-line w-8 h-[2px] mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#222] text-white py-3.5 px-6 rounded-[32px] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 z-[100] hover:scale-105 transition-transform duration-500 border border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-accent-blue rounded-xl flex flex-col items-center justify-center font-black text-[9px] leading-tight text-center border border-white/10 ring-2 ring-accent-blue/20">
            <span>PORT</span>
            <span>FOLIO</span>
          </div>
          <div>
            <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.2em]">Graphic Designer</p>
            <p className="font-black text-[12px] uppercase underline decoration-accent-blue decoration-2 underline-offset-4 tracking-tight">Ikhwan Nazri</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white text-black px-5 py-2 rounded-full text-[11px] font-black hover:bg-accent-blue hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-md">Follow Me</button>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md animate-pulse">
            <Sparkles size={20} fill="currentColor" className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
