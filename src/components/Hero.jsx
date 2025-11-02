import { Rocket, Home, Star } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-rose-700 ring-1 ring-white/40 backdrop-blur"
          >
            <Rocket className="h-4 w-4" />
            Now inviting founding hosts
          </motion.div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="font-geist text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl"
              >
                List your home with confidence.
                <br />
                Earn more with seamless hosting.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-6 max-w-xl text-lg text-white/85"
              >
                Join the owners waitlist for our new marketplace inspired by Airbnb —
                with smarter pricing, guest screening, and delightful tools that put
                you in control.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600/40"
                >
                  Join the waitlist
                </a>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-400" /> Smart pricing</span>
                  <span className="inline-flex items-center gap-2"><Home className="h-4 w-4 text-emerald-300" /> Host-first tools</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern living room"
                  className="h-64 w-full rounded-2xl object-cover sm:h-80"
                />
                <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-xl bg-white/20 p-4 text-white backdrop-blur">
                    <p className="text-2xl font-semibold">+22%</p>
                    <p className="text-xs text-white/80">Avg. earnings</p>
                  </div>
                  <div className="rounded-xl bg-white/20 p-4 text-white backdrop-blur">
                    <p className="text-2xl font-semibold">98%</p>
                    <p className="text-xs text-white/80">Host satisfaction</p>
                  </div>
                  <div className="rounded-xl bg-white/20 p-4 text-white backdrop-blur">
                    <p className="text-2xl font-semibold">24/7</p>
                    <p className="text-xs text-white/80">Partner support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
