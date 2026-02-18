import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* ── Animated background orbs ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.07] blur-[120px] animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-emerald-400/[0.05] blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-600/[0.04] blur-[140px] animate-pulse-slow" />
            </div>

            {/* ── Grid overlay ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-xs sm:text-sm font-medium text-emerald-400 mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    San Antonio, TX — Open for Projects
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] animate-slide-up">
                    Native Payment Rails
                    <br />
                    <span className="text-gradient">for Local Business.</span>
                </h1>

                {/* Sub-headline */}
                <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Helping San Antonio merchants cut fees and reclaim profit through custom{' '}
                    <span className="text-white font-medium">Stripe</span>,{' '}
                    <span className="text-white font-medium">Square</span>, and{' '}
                    <span className="text-emerald-400 font-medium">USDC</span> implementations.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-navy-950 font-semibold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300"
                    >
                        View Demos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#calculator"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass glow-border text-white font-semibold text-base hover:bg-white/[0.08] hover:scale-[1.03] transition-all duration-300"
                    >
                        See Your Savings
                    </a>
                </div>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    {[
                        { value: '2.9%', label: 'Avg. Fee Today' },
                        { value: '1.5%', label: 'Our Rate' },
                        { value: '48%', label: 'Fee Reduction' },
                    ].map((m) => (
                        <div key={m.label} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{m.value}</div>
                            <div className="text-xs sm:text-sm text-slate-500 mt-1">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#calculator"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-emerald-400 transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <ChevronDown className="w-6 h-6" />
            </a>
        </section>
    );
}
