"use client";

import { motion } from "framer-motion";
import { Activity, Flame, Sparkles, TrendingUp } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

const spotlightCardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 20, delay: 0.12 }
  }
};

const analyticsCards = [
  {
    label: "Engagement Lift",
    value: "+37%",
    trend: "vs. last sprint",
    icon: TrendingUp,
    accent:
      "linear-gradient(150deg, rgba(56,189,248,0.22), rgba(30,64,175,0.08))"
  },
  {
    label: "Focus Hours",
    value: "5h 12m",
    trend: "per teammate",
    icon: Activity,
    accent:
      "linear-gradient(150deg, rgba(16,185,129,0.28), rgba(6,182,212,0.08))"
  },
  {
    label: "Momentum Score",
    value: "92",
    trend: "team-wide composite",
    icon: Flame,
    accent:
      "linear-gradient(150deg, rgba(236,72,153,0.25), rgba(249,115,22,0.12))"
  }
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-8">
      <div className="mask-gradient" />
      <div className="relative grid h-[720px] w-full max-w-6xl grid-cols-[auto,1fr] gap-8">
        <Sidebar />
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 text-white shadow-[0_40px_80px_-28px_rgba(16,24,64,0.8)] backdrop-blur-2xl"
        >
          <motion.div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200/70">
              <Sparkles size={16} strokeWidth={2} />
              Live insights
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Orchestrate every ritual from a single command surface
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-200/80">
              Track momentum, align the team, and automate critical check-ins with a
              tactile, animated control center that feels as alive as your roadmap.
            </p>
          </motion.header>

          <motion.div
            variants={spotlightCardVariants}
            initial="initial"
            animate="animate"
            className="relative mt-10 grid flex-1 grid-cols-1 gap-6 md:grid-cols-3"
          >
            {analyticsCards.map((card, index) => (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 24,
                  delay: 0.08 * index
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/6 bg-black/40 p-6"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-60 transition group-hover:opacity-90"
                  style={{ backgroundImage: card.accent }}
                />
                <div className="relative flex flex-col justify-between gap-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-inner">
                      <card.icon size={20} strokeWidth={2.4} />
                    </div>
                    <motion.span
                      className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-100/80"
                      animate={{
                        backgroundColor: ["rgba(255,255,255,0.1)", "rgba(56,189,248,0.25)", "rgba(255,255,255,0.1)"]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      calibrated
                    </motion.span>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-slate-200/70">
                      {card.label}
                    </h2>
                    <p className="mt-4 text-4xl font-semibold text-white">
                      {card.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-200/60">
                      {card.trend}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.footer
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            className="relative mt-8 flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-black/30 p-5 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4 text-sm text-slate-200/80">
              <div className="h-10 w-10 rounded-full border border-cyan-300/40 bg-cyan-400/10" />
              <div>
                <p className="font-semibold text-white">Momentum Sync Queue</p>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                  12 playbooks primed for launch
                </p>
              </div>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_-24px_rgba(56,189,248,0.8)]"
            >
              Launch Automation
            </motion.button>
          </motion.footer>
        </motion.section>
      </div>
    </main>
  );
}
