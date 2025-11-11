"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Gauge,
  LineChart,
  MessageSquare,
  Settings2,
  Users2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

type NavItem = {
  label: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Pulse",
    description: "Live overview of key health indicators",
    icon: Gauge
  },
  {
    label: "Analytics",
    description: "Deep dives powered by predictive insights",
    icon: LineChart
  },
  {
    label: "Projects",
    description: "Monitor delivery and unlock roadblocks fast",
    icon: FolderKanban,
    badge: "3"
  },
  {
    label: "Team",
    description: "Spot collaboration patterns & velocity shifts",
    icon: Users2
  },
  {
    label: "Schedule",
    description: "Synchronize the next sprint and rituals",
    icon: CalendarCheck
  },
  {
    label: "Messages",
    description: "One inbox for async check-ins & standups",
    icon: MessageSquare,
    badge: "12"
  },
  {
    label: "Controls",
    description: "Tune automations, rules, and governance",
    icon: Settings2
  }
];

const sidebarVariants = {
  open: { width: 320, transition: { type: "spring", stiffness: 140, damping: 16 } },
  collapsed: {
    width: 96,
    transition: { type: "spring", stiffness: 260, damping: 28 }
  }
};

const navItemVariants = {
  initial: { opacity: 0, x: -12 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 30 }
  },
  exit: { opacity: 0, x: -12, transition: { duration: 0.12 } }
};

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].label);

  const subtitle = useMemo(() => {
    const match = NAV_ITEMS.find((item) => item.label === activeItem);
    return match?.description ?? "Navigate with confidence.";
  }, [activeItem]);

  return (
    <motion.aside
      initial={false}
      animate={collapsed ? "collapsed" : "open"}
      variants={sidebarVariants}
      className="relative flex h-full min-h-[640px] flex-col overflow-hidden rounded-3xl border border-white/6 bg-white/4 backdrop-blur-2xl"
      style={{
        background:
          "linear-gradient(160deg, rgba(28,38,83,0.85) 0%, rgba(12,15,34,0.96) 38%, rgba(7,8,17,0.95) 100%)"
      }}
    >
      <div className="mask-gradient" />
      <div className="flex items-center justify-between gap-2 px-5 pb-2 pt-5">
        <motion.div
          key={collapsed ? "logo-collapsed" : "logo-expanded"}
          layout
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_30px_-12px_rgba(72,191,255,0.9)]">
            <span className="text-xl font-semibold tracking-tight">Λ</span>
          </div>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                variants={navItemVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="flex flex-col"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Atlas One
                </span>
                <span className="text-2xl font-semibold leading-6 text-white">
                  Control Center
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={collapsed ? "open" : "close"}
              initial={{ rotate: collapsed ? -90 : 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: collapsed ? -90 : 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="flex"
            >
              {collapsed ? (
                <ChevronRight size={20} strokeWidth={2.4} />
              ) : (
                <ChevronLeft size={20} strokeWidth={2.4} />
              )}
            </motion.span>
          </AnimatePresence>
          <span className="absolute -bottom-8 w-max translate-y-2 rounded-full bg-black/70 px-3 py-1 text-xs text-white/80 opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
            Toggle sidebar
          </span>
        </button>
      </div>

      <div className="relative mt-2 flex-1 space-y-6 px-2 pb-6">
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === activeItem;
            return (
              <motion.button
                key={item.label}
                type="button"
                layout
                onClick={() => setActiveItem(item.label)}
                className={`group relative flex w-full items-center rounded-2xl px-3 py-3 text-left text-sm text-slate-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400/60 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
                whileHover={{ scale: collapsed ? 1.08 : 1.02 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                <motion.span
                  layout
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    isActive
                      ? "border-cyan-400/80 bg-cyan-400/10 text-cyan-200"
                      : "border-white/6 bg-white/5 text-slate-200/80 group-hover:border-cyan-400/40 group-hover:text-cyan-200"
                  }`}
                >
                  <item.icon size={20} strokeWidth={2.2} />
                </motion.span>
                <AnimatePresence initial={false}>
                  {!collapsed && (
                    <motion.span
                      variants={navItemVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="ml-4 flex flex-1 flex-col leading-tight"
                    >
                      <span className="text-base font-medium">{item.label}</span>
                      <span className="text-xs text-slate-300/70">
                        {item.description}
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                  {item.badge && !collapsed && (
                    <motion.span
                      variants={navItemVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className={`ml-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        isActive
                          ? "bg-cyan-400/20 text-cyan-100"
                          : "bg-white/10 text-slate-200/80 group-hover:bg-cyan-400/20 group-hover:text-cyan-100"
                      }`}
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>

        <motion.div
          layout
          className="relative overflow-hidden rounded-3xl border border-white/6 bg-white/5 p-4 text-xs text-slate-200/90 shadow-[0_30px_60px_-30px_rgba(22,196,255,0.25)]"
        >
          <motion.div
            layout
            className="absolute -top-8 -right-12 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
          />
          <motion.div
            key={subtitle}
            variants={navItemVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative space-y-3"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200/70">
              Mission Control
            </p>
            <p className="text-sm leading-tight text-white/90">{subtitle}</p>
          </motion.div>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                variants={navItemVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative mt-6 flex items-center justify-between gap-4 rounded-2xl bg-black/20 px-4 py-3 text-[13px]"
              >
                <div className="flex flex-col text-slate-200/80">
                  <span className="text-xs uppercase tracking-[0.25em] text-cyan-200/90">
                    Live Sync
                  </span>
                  <span className="text-base font-semibold text-white">
                    99.3% Uptime
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_0_rgba(74,222,128,0.8)]" />
                  <span className="text-xs text-slate-300/70">Streaming</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.aside>
  );
}
