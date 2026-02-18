import React from 'react';
import { Mail, Github, ArrowRight, Zap } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="relative pt-24 sm:pt-32 pb-12">
            {/* CTA block */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="glass-card p-8 sm:p-12 text-center glow-emerald relative overflow-hidden">
                    {/* Decorative orb */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.08] rounded-full blur-[80px] pointer-events-none" />

                    <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Ready to <span className="text-gradient">Cut Your Fees?</span>
                    </h2>
                    <p className="relative max-w-lg mx-auto text-slate-400 text-base sm:text-lg mb-8">
                        Let's talk about how custom payment rails can put thousands back into your business every year.
                    </p>
                    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:haris@harisms.com"
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-navy-950 font-semibold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            haris@harisms.com
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://github.com/harris305"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass glow-border text-white font-semibold text-base hover:bg-white/[0.08] hover:scale-[1.03] transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-navy-950" />
                        </div>
                        <span className="text-sm font-semibold">
                            haris<span className="text-emerald-400">MS</span>
                        </span>
                    </div>
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} HarisMS. Built with React & Tailwind in San Antonio, TX.
                    </p>
                </div>
            </div>
        </footer>
    );
}
