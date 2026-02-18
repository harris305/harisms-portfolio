import React from 'react';
import { Plug, Fingerprint, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: Plug,
        title: 'Native API Integration',
        description:
            'Direct Stripe and Square API implementations — no bloated plugins. Lower latency, lower fees, full control over the checkout experience.',
        features: ['Stripe Connect', 'Square Terminal API', 'Webhook orchestration', 'PCI-compliant flows'],
    },
    {
        icon: Fingerprint,
        title: 'Custom Loyalty Programs',
        description:
            'Google Auth-powered customer identity tied to a rewards engine. Repeat customers get seamless login, merchants get retention analytics.',
        features: ['Google OAuth 2.0', 'Points & stamps', 'Push notifications', 'Analytics dashboard'],
    },
    {
        icon: ShieldCheck,
        title: 'Zero-Custody Crypto Payments',
        description:
            'Accept USDC/stablecoin payments that settle instantly in USD — no exchange risk, no custodial wallets, and dramatically lower processing fees.',
        features: ['USDC on Ethereum/Solana', 'Instant USD settlement', 'No custody risk', 'Circle API integration'],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-xs sm:text-sm font-medium text-emerald-400 mb-6">
                        <Plug className="w-4 h-4" />
                        What I Build
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Services <span className="text-gradient">& Expertise</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-slate-400 text-base sm:text-lg">
                        Everything a local merchant needs to modernize their payment stack — built from scratch, not off-the-shelf.
                    </p>
                </div>

                {/* Service cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className="group glass-card p-6 sm:p-8 hover:-translate-y-1 hover:border-emerald-500/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                    <Icon className="w-6 h-6 text-emerald-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">{s.description}</p>

                                <ul className="space-y-2">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
