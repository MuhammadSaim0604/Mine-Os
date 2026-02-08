import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cpu,
  Wallet,
  Zap,
  ShieldCheck,
  Download,
  TrendingUp,
  Smartphone,
  Globe,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import type { InsertSubscriber } from "@shared/schema";

// Components
import { NeonButton } from "@/components/ui/neon-button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Input } from "@/components/ui/input";

// Assets
import dashboardImg from "../assets/generated_images/mineos_mobile_dashboard_screen.png";
import walletImg from "../assets/generated_images/mineos_mobile_wallet_screen.png";
import miningImg from "../assets/generated_images/mineos_mining_session_screen.png";
import appIcon from "../assets/generated_images/mineos_app_icon.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const createSubscriber = useCreateSubscriber();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
  });

  const onSubmit = (data: InsertSubscriber) => {
    createSubscriber.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  const handleDownload = () => {
    window.open("/mineos.apk", "_blank");
  };

  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 glass-panel border-b-0 border-x-0 rounded-none bg-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={appIcon} alt="MineOS" className="w-8 h-8 rounded-lg" />
            <span className="font-display font-bold text-xl tracking-wider">
              MINE<span className="text-primary">OS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a onClick={
              () => {
                  const el = document.getElementById("features");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    try {
                      window.history.replaceState(null, "", "#features");
                    } catch {}
                  } else {
                    window.location.hash = "#features";
                  }
                }
            }
            className="hover:text-white transition-colors">
              Features
            </a>
            <a
              onClick={
              () => {
                  const el = document.getElementById("tutorial");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    try {
                      window.history.replaceState(null, "", "#tutorial");
                    } catch {}
                  } else {
                    window.location.hash = "#tutorial";
                  }
                }
            } 
              className="hover:text-white transition-colors"
            >
              How it Works
            </a>
            <a onClick={
              () => {
                  const el = document.getElementById("stats");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    try {
                      window.history.replaceState(null, "", "#stats");
                    } catch {}
                  } else {
                    window.location.hash = "#stats";
                  }
                }
            } 
            className="hover:text-white transition-colors">
              Stats
            </a>
          </div>
          <NeonButton
            variant="primary"
            className="h-10 px-6 text-sm"
            onClick={handleDownload}
          >
            Get App
          </NeonButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 Live Now
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
              MINE CRYPTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">
                ON MOBILE
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Turn your idle phone into a powerful mining rig. No expensive
              hardware. No technical knowledge. Just pure, passive income.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NeonButton
                className="w-full sm:w-auto gap-2"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5" />
                Download APK
              </NeonButton>
              <NeonButton
                variant="outline"
                className="w-full sm:w-auto gap-2"
                onClick={() => {
                  const el = document.getElementById("tutorial");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    try {
                      window.history.replaceState(null, "", "#tutorial");
                    } catch {}
                  } else {
                    window.location.hash = "#tutorial";
                  }
                }}
              >
                <Globe className="w-5 h-5" />
                View Tutorial
              </NeonButton>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {[
                  { name: "Alice", src: "/1.jpg" },
                  { name: "Ben", src: "/2.jpg" },
                  { name: "Carlos", src: "/3.jpg" },
                  { name: "Dana", src: "/4.jpg" },
                ].map((p, idx) => (
                  <div
                    key={p.name + idx}
                    className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden relative"
                    aria-hidden={false}
                    title={p.name}
                  >
                    {/* Fallback initials behind image */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      {p.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <img
                      src={p.src}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // hide broken image so initials remain visible
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-white font-bold">10k+</span> Active Miners
                Today
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - Floating Icon + Dashboard */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <motion.div style={{ y }} className="relative">
              {/* Rotating 3D Icon Effect */}
              <motion.img
                src={appIcon}
                alt="App Icon"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-32 h-32 md:w-48 md:h-48 rounded-3xl shadow-[0_0_50px_rgba(57,255,20,0.3)] z-20 hidden md:block"
              />

              <PhoneMockup
                src={dashboardImg}
                alt="Dashboard Screen"
                className="rotate-[-6deg] hover:rotate-0 transition-transform duration-500 scale-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Stats Ticker */}
      <section
        id="stats"
        className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                label: "Active Nodes",
                value: "124,592",
                color: "text-primary",
              },
              {
                label: "Total Hashrate",
                value: "854 PH/s",
                color: "text-white",
              },
              {
                label: "Blocks Mined",
                value: "1.2M+",
                color: "text-secondary",
              },
              { label: "Paid Out", value: "$45M+", color: "text-white" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`text-3xl md:text-4xl font-display font-bold mb-1 ${stat.color} text-glow`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              POWERFUL FEATURES
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to mine, manage, and withdraw your crypto
              earnings.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            <FeatureCard
              icon={Cpu}
              title="Instant CPU Mining"
              description="Our optimized algorithm utilizes unused CPU cycles without overheating your device."
              delay={0.1}
            />
            <FeatureCard
              icon={Zap}
              title="Low Latency"
              description="Connect to the nearest mining pool automatically for maximum efficiency."
              delay={0.2}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Bank-Grade Security"
              description="Your wallet is encrypted locally. We never store your private keys."
              delay={0.3}
            />
          </div>

          {/* Feature Highlight: Wallet */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 lg:order-1">
              <PhoneMockup
                src={walletImg}
                alt="Wallet Screen"
                glowColor="purple"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Integrated{" "}
                <span className="text-secondary text-glow-purple">
                  Multi-Chain Wallet
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Manage your earnings directly in the app. Swap between BTC, ETH,
                and USDT instantly with zero fees on internal transfers.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time fiat conversion rates",
                  "QR code payments supported",
                  "Biometric security lock",
                  "Instant withdrawal to external wallets",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <TrendingUp className="w-3 h-3" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Highlight: Mining */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Live{" "}
                <span className="text-primary text-glow">
                  Performance Analytics
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Monitor your hashrate, temperature, and power consumption in
                real-time. Adjust intensity settings to balance performance and
                battery life.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-mono font-bold text-primary mb-1">
                    45.2 MH/s
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Current Hashrate
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-mono font-bold text-orange-400 mb-1">
                    65°C
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Device Temp
                  </div>
                </div>
              </div>
            </div>
            <div>
              <PhoneMockup
                src={miningImg}
                alt="Mining Screen"
                glowColor="green"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">TUTORIAL</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to set up and use MineOS with our step-by-step video
              tutorial.
            </p>
          </div>

          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <video
              controls
              className="absolute inset-0 w-full h-full rounded-xl bg-black"
            >
              <source src="/tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.{' '}
              <a
                href="https://youtu.be/etluT8UC-nw?si=qmXqSYlL2hnULDUk"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Watch on YouTube
              </a>
            </video>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center glass-panel p-8 md:p-12 rounded-3xl neon-border">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            START MINING TODAY
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of users earning passive income. Sign up for early
            access updates.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="w-full">
              <Input
                {...register("email")}
                placeholder="Enter your email"
                className="bg-black/50 border-white/20 h-12 text-lg focus-visible:ring-primary"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <NeonButton
              type="submit"
              disabled={createSubscriber.isPending}
              className="h-12 w-full sm:w-auto whitespace-nowrap"
            >
              {createSubscriber.isPending ? "Joining..." : "Join Waitlist"}
            </NeonButton>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-black/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src={appIcon}
              alt="MineOS"
              className="w-8 h-8 rounded-lg grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <span className="font-display font-bold text-xl tracking-wider text-muted-foreground">
              MINE<span className="text-primary/50">OS</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 MineOS Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}
