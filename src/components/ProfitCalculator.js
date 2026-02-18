import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const STANDARD_RATE = 0.029;
const STANDARD_PER_TX = 0.30;
const OPTIMIZED_RATE = 0.015;
const AVG_TX_SIZE = 25; // assumed average transaction size

export default function ProfitCalculator() {
    const [monthlySales, setMonthlySales] = useState(30000);

    const stats = useMemo(() => {
        const txCount = Math.round(monthlySales / AVG_TX_SIZE);
        const standardMonthly = monthlySales * STANDARD_RATE + txCount * STANDARD_PER_TX;
        const optimizedMonthly = monthlySales * OPTIMIZED_RATE;
        const monthlySavings = standardMonthly - optimizedMonthly;
        const annualSavings = monthlySavings * 12;

        return {
            standardMonthly,
            optimizedMonthly,
            monthlySavings,
            annualSavings,
            txCount,
        };
    }, [monthlySales]);

    const fmt = (n) =>
        n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    const pct = ((stats.monthlySavings / stats.standardMonthly) * 100).toFixed(0);

    return (
        <section id="calculator" className="relative py-24 sm:py-32">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-xs sm:text-sm font-medium text-emerald-400 mb-6">
                        <Calculator className="w-4 h-4" />
                        Interactive Tool
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Profit Recovery <span className="text-gradient">Calculator</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-slate-400 text-base sm:text-lg">
                        See exactly how much you're losing to inflated processing fees — and how much you could reclaim.
                    </p>
                </div>

                {/* Calculator card */}
                <div className="glass-card p-6 sm:p-10 glow-emerald max-w-4xl mx-auto">
                    {/* Slider input */}
                    <div className="mb-10">
                        <label className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-slate-300">Monthly Sales Volume</span>
                            <span className="text-2xl sm:text-3xl font-bold text-white">{fmt(monthlySales)}</span>
                        </label>

                        <input
                            type="range"
                            min={5000}
                            max={200000}
                            step={1000}
                            value={monthlySales}
                            onChange={(e) => setMonthlySales(Number(e.target.value))}
                            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-navy-700 accent-emerald-500"
                            style={{
                                background: `linear-gradient(to right, #10b981 0%, #10b981 ${((monthlySales - 5000) / 195000) * 100}%, #334155 ${((monthlySales - 5000) / 195000) * 100}%, #334155 100%)`,
                            }}
                        />
                        <div className="flex justify-between mt-2 text-xs text-slate-500">
                            <span>$5,000</span>
                            <span>$200,000</span>
                        </div>
                    </div>

                    {/* Comparison columns */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Standard */}
                        <div className="rounded-xl bg-red-500/[0.06] border border-red-500/[0.15] p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <DollarSign className="w-4 h-4 text-red-400" />
                                </div>
                                <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                                    Standard Fees
                                </h3>
                            </div>
                            <p className="text-xs text-slate-500 mb-4">2.9% + $0.30 per transaction</p>
                            <div className="text-3xl font-bold text-red-400">
                                {fmt(stats.standardMonthly)}
                                <span className="text-sm font-normal text-slate-500"> /mo</span>
                            </div>
                            <div className="mt-2 text-sm text-slate-500">
                                ~{stats.txCount.toLocaleString()} transactions
                            </div>
                        </div>

                        {/* Optimized */}
                        <div className="rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.15] p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                </div>
                                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                                    HarisMS Optimized
                                </h3>
                            </div>
                            <p className="text-xs text-slate-500 mb-4">1.5% flat — no per-transaction fee</p>
                            <div className="text-3xl font-bold text-emerald-400">
                                {fmt(stats.optimizedMonthly)}
                                <span className="text-sm font-normal text-slate-500"> /mo</span>
                            </div>
                            <div className="mt-2 text-sm text-emerald-400/70">
                                Includes USDC rail option for even lower fees
                            </div>
                        </div>
                    </div>

                    {/* Savings banner */}
                    <div className="mt-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-500/20 p-6 text-center">
                        <p className="text-sm text-slate-400 mb-1">Your Estimated Annual Savings</p>
                        <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
                            {fmt(stats.annualSavings)}
                        </div>
                        <p className="mt-2 text-sm text-emerald-400/70">
                            That's a <span className="font-semibold text-emerald-400">{pct}%</span> reduction in processing fees
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
                        >
                            Claim Your Savings
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
