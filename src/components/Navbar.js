import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { label: 'Calculator', href: '#calculator' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    { label: '🥙 Store Demo', href: 'https://store.harisms.com', external: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
                            <Zap className="w-5 h-5 text-navy-950" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            haris<span className="text-emerald-400">MS</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-navy-950 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 border-b border-white/[0.06]' : 'max-h-0'
                    }`}
            >
                <div className="px-4 py-4 bg-navy-950/95 backdrop-blur-xl space-y-1">
                    {navLinks.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block mt-2 px-4 py-3 text-sm font-semibold text-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-navy-950 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </nav>
    );
}
