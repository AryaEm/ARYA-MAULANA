'use client';

import { GridBackground } from '@/components/layout/gridBackground';
import { FadeIn } from '@/components/animations/fadeIn';
import { ScrollReveal } from '@/components/animations/scrollReveal';
import { socials } from '@/lib/data/social';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Code2, Sparkles, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const getIcon = (iconName: string) => {
        const icons = {
            github: Github,
            linkedin: Linkedin,
            instagram: Instagram,
            mail: Mail
        };
        return icons[iconName as keyof typeof icons] || Mail;
    };

    const heroOpacity = Math.max(1 - scrollY * 0.0015, 0);
    const heroScale = Math.max(1 - scrollY * 0.0003, 0.9);

    return (
        <section className="relative lg:h-dvh min-h-dvh bg-zinc-950 overflow-hidden py-18 lg:my-0">
            <GridBackground variant="hero" />

            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-1/3 left-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]"
                    style={{ 
                        transform: `translateY(${scrollY * 0.2}px)`
                    }} 
                />
                <div 
                    className="absolute bottom-1/3 right-1/4 w-112.5 h-112.5 bg-purple-500/10 rounded-full blur-[120px]"
                    style={{ 
                        transform: `translateY(${scrollY * 0.25}px)`
                    }} 
                />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 rounded-full blur-[140px]"
                />
            </div>

            <div 
                className="fixed w-87.5 h-87.5 pointer-events-none z-0 transition-all duration-700 ease-out"
                style={{
                    left: `${mouseX}px`,
                    top: `${mouseY}px`,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                }}
            />

            <div 
                className="relative z-10 container mx-auto px-6 max-w-7xl h-full flex items-center"
                style={{
                    opacity: heroOpacity,
                    transform: `scale(${heroScale})`
                }}
            >
                
                <div className="w-full grid grid-cols-12 gap-8 items-center">
                    
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl backdrop-blur-xl border border-zinc-800/50"
                                 style={{
                                     background: 'rgba(24, 24, 27, 0.5)',
                                     boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255,255,255,0.03)'
                                 }}>
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                                    <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                                </div>
                                <span className="text-sm font-medium text-zinc-300 tracking-wide">AVAILABLE FOR WORK</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <div className="relative">
                                <div className="absolute inset-0 opacity-20 blur-sm select-none">
                                    <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter text-zinc-800">
                                        ARYA MAULANA
                                    </h1>
                                </div>
                                
                                <h1 className="relative text-6xl lg:text-8xl font-black leading-none tracking-tighter">
                                    <span className="bg-linear-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                                        ARYA MAULANA
                                    </span>
                                </h1>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="space-y-4 max-w-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-12 bg-linear-to-r from-blue-500 to-purple-500" />
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                        Frontend Developer
                                    </h2>
                                </div>
                                
                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    Crafting <span className="text-white font-semibold">pixel-perfect</span> interfaces with 
                                    <span className="text-white font-semibold"> React</span>, 
                                    <span className="text-white font-semibold"> Next.js</span>, and 
                                    <span className="text-white font-semibold"> TypeScript</span>. 
                                    Building beautiful digital experiences that users love.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={scrollToProjects}
                                    className="group px-8 py-4 rounded-2xl bg-linear-to-br cursor-pointer from-white to-zinc-200 text-zinc-950 font-bold transition-all hover:scale-105 flex items-center gap-3"
                                    style={{
                                        boxShadow: '6px 6px 12px #0a0a0a, -3px -3px 9px #1f1f23'
                                    }}
                                >
                                    <span>View Projects</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <button
                                    onClick={scrollToContact}
                                    className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 cursor-pointer"
                                    style={{
                                        background: 'rgba(39, 39, 42, 0.6)',
                                        boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(63, 63, 70, 0.5)'
                                    }}
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="col-span-12 lg:col-span-5 space-y-4">
                        
                        <ScrollReveal direction="scale">
                            <div className="group relative p-6 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl"
                                     style={{
                                         background: 'linear-gradient(145deg, #18181b, #0f0f10)',
                                         boxShadow: '12px 12px 24px #0a0a0a, -12px -12px 24px #1f1f23'
                                     }} />
                                
                                <div className="absolute inset-0.5 rounded-3xl backdrop-blur-2xl border border-zinc-800/50"
                                     style={{ background: 'rgba(24, 24, 27, 0.4)' }} />
                                
                                <div className="relative z-10">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-4xl font-black text-white mb-1">3+</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-black text-white mb-1">5+</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider">Projects</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                     style={{
                                         background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
                                     }} />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="scale">
                            <div className="group relative p-6 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl"
                                     style={{
                                         background: 'linear-gradient(145deg, #18181b, #0f0f10)',
                                         boxShadow: '12px 12px 24px #0a0a0a, -12px -12px 24px #1f1f23'
                                     }} />
                                
                                <div className="absolute inset-0.5 rounded-3xl backdrop-blur-2xl border border-zinc-800/50"
                                     style={{ background: 'rgba(24, 24, 27, 0.4)' }} />
                                
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                             style={{
                                                 background: 'linear-gradient(145deg, #1f1f23, #18181b)',
                                                 boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.4), inset -3px -3px 6px rgba(255,255,255,0.05)'
                                             }}>
                                            <Code2 className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <span className="text-sm text-zinc-400 uppercase tracking-wider font-medium">Tech Stack</span>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Figma', 'Supabase', 'SQL'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-xs font-medium text-zinc-300 rounded-lg"
                                                style={{
                                                    background: 'rgba(39, 39, 42, 0.6)',
                                                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.03)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                     style={{
                                         background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
                                     }} />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="scale">
                            <div className="group relative p-6 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 rounded-3xl"
                                     style={{
                                         background: 'linear-gradient(145deg, #18181b, #0f0f10)',
                                         boxShadow: '12px 12px 24px #0a0a0a, -12px -12px 24px #1f1f23'
                                     }} />
                                
                                <div className="absolute inset-0.5 rounded-3xl backdrop-blur-2xl border border-zinc-800/50"
                                     style={{ background: 'rgba(24, 24, 27, 0.4)' }} />
                                
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/50">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                             style={{
                                                 background: 'linear-gradient(145deg, #1f1f23, #18181b)',
                                                 boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.4), inset -3px -3px 6px rgba(255,255,255,0.05)'
                                             }}>
                                            <MapPin className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-zinc-500">Based in</div>
                                            <div className="text-base font-bold text-white">Malang, Indonesia</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-purple-400" />
                                        <div className="flex gap-2 flex-1">
                                            {socials.map((item) => {
                                                const Icon = getIcon(item.icon);
                                                return (
                                                    <Link
                                                        key={item.name}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/link flex-1 p-3 rounded-xl transition-all hover:scale-110"
                                                        style={{
                                                            background: 'rgba(39, 39, 42, 0.6)',
                                                            boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.4), inset -3px -3px 6px rgba(255,255,255,0.05)'
                                                        }}
                                                    >
                                                        <Icon className="w-4 h-4 text-zinc-400 group-hover/link:text-white transition-colors mx-auto" />
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                     style={{
                                         background: 'linear-gradient(145deg, rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05))'
                                     }} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <FadeIn delay={500}>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-zinc-600 uppercase tracking-[0.3em]">Scroll</span>
                        <div className="w-[2px] h-12 bg-gradient-to-b from-zinc-700 to-transparent rounded-full animate-pulse" 
                             style={{ animationDuration: '2s' }} />
                    </div>
                </FadeIn>
            </div>

            {/* Decorative Elements */}
            <div 
                className="absolute top-20 right-20 w-20 h-20 rounded-2xl rotate-12 hidden lg:block"
                style={{
                    background: 'linear-gradient(145deg, #18181b, #0f0f10)',
                    boxShadow: '10px 10px 20px #0a0a0a, -10px -10px 20px #1f1f23',
                    transform: `rotate(12deg) translateY(${scrollY * 0.1}px)`
                }}
            />
            <div 
                className="absolute bottom-20 left-20 w-16 h-16 rounded-full hidden lg:block"
                style={{
                    background: 'linear-gradient(145deg, #18181b, #0f0f10)',
                    boxShadow: '8px 8px 16px #0a0a0a, -8px -8px 16px #1f1f23',
                    transform: `translateY(${scrollY * 0.12}px)`
                }}
            />
        </section>
    );
}