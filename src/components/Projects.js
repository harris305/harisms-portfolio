import React from 'react';
import {
    ShoppingCart,
    MapPin,
    Coins,
    ArrowUpRight,
} from 'lucide-react';

const projects = [
    {
        icon: ShoppingCart,
        title: 'The Shawarma Station',
        subtitle: 'Full-Stack POS Demo',
        description:
            'A complete point-of-sale system with real-time order management, integrated Square checkout, and kitchen display. Built for a San Antonio restaurant.',
        tags: ['React', 'Node.js', 'Square API', 'WebSockets'],
        color: 'amber',
        href: '/demo',
    },
    {
        icon: MapPin,
        title: 'Multi-Modal Transit App',
        subtitle: 'Algorithm-Driven Directions',
        description:
            'Custom transit routing engine using Google Maps API with a proprietary algorithm for combining bus, bike, and rideshare into optimal multi-modal journeys.',
        tags: ['React Native', 'Google Maps API', 'Python', 'Graph Algorithms'],
        color: 'blue',
        href: '/demo',
    },
    {
        icon: Coins,
        title: 'Stable-Pay Demo',
        subtitle: 'USDC Stablecoin Bridge',
        description:
            'A payment gateway that lets merchants accept USDC stablecoin payments — bypassing traditional banking fees entirely while settling in USD.',
        tags: ['Solidity', 'ethers.js', 'React', 'Circle API'],
        color: 'emerald',
        href: '/demo',
    },
];

const colorMap = {
    amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        text: 'text-amber-400',
        icon: 'bg-amber-500/20',
        tag: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        glow: 'group-hover:shadow-amber-500/10',
    },
    blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        icon: 'bg-blue-500/20',
        tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        glow: 'group-hover:shadow-blue-500/10',
    },
    emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-400',
        icon: 'bg-emerald-500/20',
        tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        glow: 'group-hover:shadow-emerald-500/10',
    },
};

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-xs sm:text-sm font-medium text-emerald-400 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Featured Work
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Built for <span className="text-gradient">Real Business</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-slate-400 text-base sm:text-lg">
                        Production-grade demos showcasing what native payment integrations look like in the wild.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((p) => {
                        const c = colorMap[p.color];
                        const Icon = p.icon;
                        return (
                            <a
                                key={p.title}
                                href={p.href}
                                className={`group glass-card p-6 sm:p-8 flex flex-col hover:-translate-y-2 hover:shadow-2xl ${c.glow} transition-all duration-300`}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-6`}
                                >
                                    <Icon className={`w-6 h-6 ${c.text}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                                <p className={`text-sm font-medium ${c.text} mb-3`}>{p.subtitle}</p>
                                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.tag}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link indicator */}
                                <div className={`flex items-center gap-1 mt-6 text-sm font-medium ${c.text} group-hover:gap-2 transition-all`}>
                                    View Demo
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
