import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import Background from "./Background";
import { ChevronRight, ChevronLeft, Send, ExternalLink, TrendingUp, MapPin } from "lucide-react";

const slides = [
    // Slide 1 - Cover
    {
        id: 1,
        content: (
            <>
                <motion.h1
                    className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Lofig.io
                </motion.h1>
                <motion.p
                    className="text-2xl md:text-3xl text-neutral-400 font-light"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    One update. Applied everywhere.
                </motion.p>
                <motion.div
                    className="mt-8 text-lg text-neutral-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Your digital identity sync platform.
                </motion.div>
            </>
        )
    },
    // Slide 2 - The Problem
    {
        id: 2,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">The Problem</h2>
                <p className="text-xl md:text-2xl text-neutral-300 mb-12">
                    Changing your phone number or address sounds simple.<br />
                    In reality, it breaks your digital life:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {[
                        "OTPs stop coming",
                        "Social logins fail",
                        "Banks and apps still use old details",
                        "You get locked out",
                        "Updating 20–50 accounts manually is painful"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl backdrop-blur-sm"
                            initial={{ opacity: 0, x: Math.random() * 40 - 20, y: Math.random() * 40 - 20, rotate: Math.random() * 10 - 5 }}
                            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                            transition={{
                                delay: 0.2 + (i * 0.1),
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2, borderColor: "#ef4444" }}
                        >
                            <span className="text-red-400 mr-2">✕</span> {item}
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    className="mt-12 text-xl font-semibold text-red-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Millions face this every year.
                </motion.p>
            </>
        )
    },
    // Slide 3 - Why This Matters Now
    {
        id: 3,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Why This Matters Now</h2>
                <div className="flex flex-col gap-4 text-left max-w-2xl mx-auto">
                    {[
                        "People switch numbers more often",
                        "SIM recycling risks users’ data",
                        "Relocation is increasing worldwide",
                        "Users rely on their number for authentication",
                        "No universal update layer exists today"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center text-xl md:text-2xl text-neutral-300"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-4" />
                            {item}
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    className="mt-12 text-2xl font-light text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    A silent problem with massive impact.
                </motion.p>
            </>
        )
    },
    // Slide 4 - The Insight
    {
        id: 4,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">The Insight</h2>
                <div className="space-y-8 text-xl md:text-3xl font-light leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Your <span className="text-white font-semibold">phone number and address</span> are the backbone of your digital identity.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-red-300"
                    >
                        When they change, everything around them collapses.
                    </motion.p>
                    <motion.div
                        className="h-px w-24 bg-neutral-700 mx-auto my-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.6 }}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        But no tool handles this across apps, banks, and platforms.
                        <br />
                        <span className="text-neutral-400 text-lg mt-2 block">Everyone is left to fix it alone.</span>
                    </motion.p>
                </div>
            </>
        )
    },
    // Slide 5 - The Solution
    {
        id: 5,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">The Solution</h2>
                <h3 className="text-2xl md:text-3xl text-blue-400 mb-12">Lofig.io — The Identity Update Hub</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-4">
                        <motion.div
                            className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h4 className="text-xl font-semibold mb-2 text-white">Universal Sync</h4>
                            <p className="text-neutral-400">Update your number or address once. Lofig pushes updates everywhere.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <h4 className="text-xl font-semibold mb-2 text-white">Wide Coverage</h4>
                            <p className="text-neutral-400">Social media, banks, email, utilities, delivery apps, subscriptions.</p>
                        </motion.div>
                    </div>
                    <div className="space-y-4">
                        <motion.div
                            className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h4 className="text-xl font-semibold mb-2 text-white">Transparent</h4>
                            <p className="text-neutral-400">Clear confirmation for every update.</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                    <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                </motion.div>
                <motion.p
                    className="mt-12 text-2xl font-light tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Effortless digital migration.
                </motion.p>
            </>
        )
    },
    // Slide 6 - How It Works
    {
        id: 6,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-12">How It Works</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                    {[
                        { title: "Connect", desc: "Connect your accounts" },
                        { title: "Enter", desc: "Enter new phone/address" },
                        { title: "Sync", desc: "Lofig updates services" },
                        { title: "Done", desc: "Get status dashboard" }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 p-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl flex flex-col items-center backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.15) }}
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-4">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-neutral-400 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    className="mt-12 text-xl text-blue-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Fast, secure, transparent.
                </motion.p>
            </>
        )
    },
    // Slide 7 - Product Demo
    {
        id: 7,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Product Demo</h2>
                <div className="relative w-full max-w-3xl mx-auto aspect-video bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
                    {/* Mock UI */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 border-b border-neutral-800 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 p-8 flex flex-col items-center justify-center gap-6">
                            <div className="w-full max-w-md space-y-4">
                                <div className="h-12 bg-neutral-800 rounded-lg w-full animate-pulse" />
                                <div className="h-12 bg-neutral-800 rounded-lg w-full animate-pulse delay-75" />
                                <div className="h-12 bg-blue-600 rounded-lg w-full flex items-center justify-center text-sm font-semibold">
                                    Update Everywhere
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-16 h-16 bg-neutral-800 rounded-xl animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="mt-8 grid grid-cols-2 gap-8 text-left max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <ul className="space-y-2 text-neutral-400">
                        <li>• Minimal UI</li>
                        <li>• One unified update form</li>
                        <li>• Real-time sync statuses</li>
                    </ul>
                    <ul className="space-y-2 text-neutral-400">
                        <li>• Encryption shield</li>
                        <li>• Activity logs</li>
                        <li>• “One-click update”</li>
                    </ul>
                </motion.div>
                <motion.p
                    className="mt-8 text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Simple enough for anyone. Secure enough for enterprise.
                </motion.p>
            </>
        )
    },
    // Slide 8 - Market Size
    {
        id: 8,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-12">Market Size</h2>
                <div className="flex flex-col md:flex-row gap-8 items-end justify-center">
                    <motion.div
                        className="w-full md:w-1/3 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-neutral-400 text-lg mb-2">SOM (3-year)</h3>
                        <div className="text-4xl font-bold text-white mb-2">$75M</div>
                        <p className="text-sm text-neutral-500">5M early adopters + SIM switchers</p>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/3 p-6 bg-neutral-900/70 rounded-2xl border border-neutral-700 backdrop-blur-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-neutral-400 text-lg mb-2">SAM</h3>
                        <div className="text-5xl font-bold text-white mb-2">$6.3B</div>
                        <p className="text-sm text-neutral-500">Target: US, India, EU, Middle East</p>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/3 p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 className="text-blue-300 text-lg mb-2">TAM (Global)</h3>
                        <div className="text-6xl font-bold text-blue-400 mb-2">$18B</div>
                        <p className="text-sm text-neutral-400">1.2B people change numbers.<br />900M move homes yearly.</p>
                    </motion.div>
                </div>
                <motion.p
                    className="mt-12 text-2xl font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    A universal problem = universal market.
                </motion.p>
            </>
        )
    },
    // Slide 9 - Competition
    {
        id: 9,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Competition</h2>
                <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-neutral-800 backdrop-blur-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-900/80 text-neutral-400">
                                <th className="p-4 font-medium">Category</th>
                                <th className="p-4 font-medium">Examples</th>
                                <th className="p-4 font-medium">Gaps</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {[
                                { cat: "Password Managers", ex: "1Password, LastPass", gap: "No number/address sync" },
                                { cat: "Phone Migration", ex: "iCloud, Google", gap: "Only device data" },
                                { cat: "Govt Updates", ex: "USPS, UK Gov", gap: "Single-country, limited use" },
                                { cat: "Internal Updates", ex: "Banks, Apps", gap: "Only update within that app" },
                            ].map((row, i) => (
                                <motion.tr
                                    key={i}
                                    className="bg-black/20"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <td className="p-4 text-white">{row.cat}</td>
                                    <td className="p-4 text-neutral-400">{row.ex}</td>
                                    <td className="p-4 text-red-300">{row.gap}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <motion.div
                    className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg text-blue-300 font-semibold text-lg backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Lofig.io is first to unify all apps in one identity layer.
                </motion.div>
            </>
        )
    },
    // Slide 10 - Business Model
    {
        id: 10,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-12">Business Model</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Freemium</h3>
                        <div className="text-4xl font-bold text-neutral-500 mb-4">Free</div>
                        <ul className="text-left space-y-2 text-neutral-400 flex-1">
                            <li>• Sync up to 5 apps</li>
                            <li>• Basic support</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-800/90 border border-blue-500 relative flex flex-col transform scale-105 shadow-2xl shadow-blue-900/20 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-4">$5<span className="text-lg text-neutral-400">/mo</span></div>
                        <ul className="text-left space-y-2 text-neutral-300 flex-1">
                            <li>• Unlimited syncing</li>
                            <li>• Priority updates</li>
                            <li>• Family Plan options</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold text-neutral-500 mb-4">API</div>
                        <ul className="text-left space-y-2 text-neutral-400 flex-1">
                            <li>• Banks & Fintechs</li>
                            <li>• Utilities & Telecoms</li>
                            <li>• Bulk updates</li>
                        </ul>
                    </motion.div>
                </div>
                <motion.p
                    className="mt-12 text-xl text-neutral-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Recurring, predictable revenue.
                </motion.p>
            </>
        )
    },
    // Slide 11 - Go-To-Market Strategy
    {
        id: 11,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-12">Go-To-Market Strategy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
                    {[
                        { title: "1. B2C", desc: "Launch simple SPA → viral through users who recently changed numbers." },
                        { title: "2. Partnerships", desc: "Banks, telcos, fintechs → they want correct user data." },
                        { title: "3. API Layer", desc: "Offer “instant identity updates” for enterprises." },
                        { title: "4. Ads & SEO", desc: "Target users searching “change phone number on [app name].”" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-neutral-900 transition-colors backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-neutral-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </>
        )
    },
    // Slide 12 - Traction/Roadmap (Enhanced with Graphs & Research)
    {
        id: 12,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Roadmap & Research</h2>
                <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
                    {/* Timeline */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold text-blue-400 mb-4">Execution Plan</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    q: "Q1",
                                    items: ["Core platform", "Account integrations", "SPA launch", "Security Audit", "Beta Testing"]
                                },
                                {
                                    q: "Q2",
                                    items: ["Banking & fintech", "Multi-country rollout", "Compliance (GDPR/CCPA)", "Mobile App Beta"]
                                },
                                {
                                    q: "Q3",
                                    items: ["Enterprise API v1", "Telco partnerships", "SOC2 Certification", "Series A Prep"]
                                },
                                {
                                    q: "Q4",
                                    items: ["Smart ID automation", "Global scale", "AI Fraud Detection", "2M User Target"]
                                }
                            ].map((period, i) => (
                                <motion.div
                                    key={i}
                                    className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-xl backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <div className="text-lg font-bold text-white mb-2">{period.q}</div>
                                    <ul className="text-xs text-neutral-400 space-y-1 text-left">
                                        {period.items.map((item, j) => <li key={j}>• {item}</li>)}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Growth Graph & Research */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Graph */}
                        <motion.div
                            className="flex-1 bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 relative overflow-hidden flex flex-col backdrop-blur-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-500" /> Projected User Growth
                            </h3>

                            <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-6 relative">
                                {/* Y-Axis Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                    <div className="w-full h-px bg-white" />
                                    <div className="w-full h-px bg-white" />
                                    <div className="w-full h-px bg-white" />
                                    <div className="w-full h-px bg-white" />
                                </div>

                                {/* Bars */}
                                {[
                                    { label: "Q1", val: 20, display: "50k" },
                                    { label: "Q2", val: 45, display: "150k" },
                                    { label: "Q3", val: 80, display: "500k" },
                                    { label: "Q4", val: 140, display: "1.2M" },
                                    { label: "2026", val: 220, display: "3M+" }
                                ].map((d, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 flex-1 z-10">
                                        <motion.div
                                            className="w-full bg-blue-600/80 rounded-t-sm hover:bg-blue-500 transition-colors relative group"
                                            initial={{ height: 0 }}
                                            animate={{ height: `${d.val}px` }}
                                            transition={{ delay: 0.6 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {d.display}
                                            </div>
                                        </motion.div>
                                        <span className="text-xs text-neutral-500 font-mono">{d.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Y-Axis Labels */}
                            <div className="absolute left-2 top-16 bottom-12 flex flex-col justify-between text-[10px] text-neutral-600 font-mono">
                                <span>3M</span>
                                <span>1.5M</span>
                                <span>500k</span>
                                <span>0</span>
                            </div>
                        </motion.div>

                        {/* Verified Research Links */}
                        <motion.div
                            className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-left backdrop-blur-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-3">Verified Research</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="https://www.princeton.edu/news/2021/05/11/recycled-phone-numbers-create-security-privacy-risks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                                        <ExternalLink className="w-3 h-3" /> Princeton Study: Recycled Number Risks
                                    </a>
                                    <p className="text-neutral-500 text-xs mt-1">66% of recycled numbers linked to old accounts.</p>
                                </li>
                                <li>
                                    <a href="https://www.fcc.gov/reassigned-numbers-database" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                                        <ExternalLink className="w-3 h-3" /> FCC: Reassigned Numbers Database
                                    </a>
                                    <p className="text-neutral-500 text-xs mt-1">35 million numbers disconnected annually in US.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </>
        )
    },
    // Slide 13 - Vision
    {
        id: 13,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Vision</h2>
                <motion.p
                    className="text-2xl md:text-3xl font-light mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    To become the <span className="text-white font-semibold">universal identity update infrastructure</span>.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                    {[
                        "No missed OTP",
                        "No locked accounts",
                        "No outdated addresses",
                        "No manual updates"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg text-neutral-300 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Your identity stays synced everywhere.
                </motion.div>
            </>
        )
    },
    // Slide 14 - Financial Ask
    {
        id: 14,
        content: (
            <>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Financial Ask</h2>
                <motion.div
                    className="text-6xl md:text-8xl font-bold text-blue-500 mb-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    $500K – $1M
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-12">
                    {[
                        "API integrations",
                        "High-level security",
                        "Engineering team",
                        "Market expansion",
                        "Banking partnerships"
                    ].map((item, i) => (
                        <motion.span
                            key={i}
                            className="px-4 py-2 bg-neutral-800 rounded-full text-neutral-300 border border-neutral-700 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (i * 0.05) }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    className="text-2xl font-light text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Aim: Become the identity sync OS in 24 months.
                </motion.div>
            </>
        )
    },
    // Slide 15 - Investor Form (Updated with Slider & FormSubmit)
    {
        id: 15,
        content: (
            <InvestorSlide />
        )
    },
    // Slide 16 - Closing
    {
        id: 16,
        content: (
            <>
                <motion.h1
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Lofig.io
                </motion.h1>
                <motion.p
                    className="text-2xl md:text-4xl text-neutral-300 font-light mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Your identity. Updated everywhere.
                </motion.p>
                <div className="flex gap-8 text-xl text-neutral-500">
                    {["Simple.", "Secure.", "Effortless."].map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (i * 0.2) }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </>
        )
    }
];

// Extracted Investor Slide Component for State Management
function InvestorSlide() {
    const [investment, setInvestment] = useState(50000);
    const projectedReturn = investment * 15; // 15x return assumption

    return (
        <>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Invest in Lofig.io</h2>
            <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
                {/* Left Column: Returns Slider & Transparency */}
                <motion.div
                    className="flex-1 text-left space-y-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Returns Slider */}
                    <div className="p-6 bg-neutral-900/80 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-900/10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-400" /> Potential Return (2028)
                        </h3>

                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-neutral-400 mb-2">
                                <span>Investment: ${investment.toLocaleString()}</span>
                                <span className="text-blue-400 font-bold">Jan 2028 Value: ${projectedReturn.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                step="5000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-2">
                                <span>$10k</span>
                                <span>$1M</span>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-500 italic">
                            *Projection based on 15x valuation growth by Jan 2028. Not a guarantee of future performance.
                        </p>
                    </div>

                    {/* Transparency */}
                    <div className="space-y-4 text-neutral-300">
                        <h3 className="text-lg font-semibold text-blue-400">Investor Transparency</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 backdrop-blur-sm">
                                <h4 className="font-bold text-white text-sm mb-1">Equity & Terms</h4>
                                <p className="text-xs text-neutral-400">Standard SAFE. Valuation cap TBD.</p>
                            </div>
                            <div className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 backdrop-blur-sm">
                                <h4 className="font-bold text-white text-sm mb-1">Reporting</h4>
                                <p className="text-xs text-neutral-400">Quarterly financials & monthly updates.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    className="flex-1 bg-neutral-900 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex flex-col gap-6 items-center justify-center h-full">
                        <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>

                        <a
                            href="mailto:sayhello@timidlly.com"
                            className="w-full p-4 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl flex items-center justify-center gap-3 transition-all group"
                        >
                            <div className="p-2 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Send className="w-5 h-5" />
                            </div>
                            <span className="text-lg text-neutral-300 group-hover:text-white">sayhello@timidlly.com</span>
                        </a>

                        <a
                            href="https://t.me/thesomitrasr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full p-4 bg-blue-600 hover:bg-blue-500 border border-blue-500 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/20"
                        >
                            <Send className="w-5 h-5 text-white" />
                            <span className="text-lg font-bold text-white">Telegram: @thesomitrasr</span>
                        </a>

                        <p className="text-neutral-500 text-sm mt-4">
                            We usually respond within 24 hours.
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default function PitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide(c => c + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(c => c - 1);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    return (
        <div className="w-full h-screen text-white overflow-hidden relative font-sans selection:bg-blue-500/30">
            {/* 3D Background */}
            <Background currentSlide={currentSlide} />

            {/* Header */}
            <div className="absolute top-0 left-0 w-full h-16 border-b border-neutral-800 bg-black/50 backdrop-blur-md flex items-center justify-between px-6 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="font-semibold text-sm tracking-wide">Timidlly Product</span>
                </div>
                <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-2 text-[10px] md:text-xs text-neutral-500 text-right md:text-left">
                    <MapPin className="w-3 h-3 hidden md:block" />
                    <span>169 Madison Ave STE 13854 New York NY, United States 10016</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-16 left-0 w-full h-1 bg-neutral-900 z-50">
                <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Slide Content */}
            <div className="absolute top-16 bottom-12 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <Slide key={currentSlide} isActive={true}>
                        {slides[currentSlide].content}
                    </Slide>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-16 right-8 flex gap-4 z-50">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 disabled:opacity-30 transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 disabled:opacity-30 transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-16 left-8 text-neutral-600 font-mono text-sm">
                {currentSlide + 1} / {slides.length}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full h-12 border-t border-neutral-900 bg-black/80 backdrop-blur-md flex items-center justify-center text-sm text-neutral-500 z-50">
                <span>Parent company : <a href="https://welcome.timidlly.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Timidlly, Inc</a></span>
            </div>
        </div>
    );
}
