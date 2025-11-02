import { Rocket, Home, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-rose-700 ring-1 ring-rose-200 backdrop-blur">
          <Rocket className="h-4 w-4" />
          Now inviting founding hosts
        </div>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-geist text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              List your home with confidence.
              <br />
              Earn more with seamless hosting.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Join the owners waitlist for our new marketplace inspired by Airbnb —
              with smarter pricing, guest screening, and delightful tools that put
              you in control.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600/40"
              >
                Join the waitlist
              </a>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Smart pricing</span>
                <span className="inline-flex items-center gap-2"><Home className="h-4 w-4 text-emerald-500" /> Host-first tools</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-100/60 via-transparent to-emerald-100/60" />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
                alt="Modern living room"
                className="h-64 w-full rounded-2xl object-cover sm:h-80"
              />
              <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-2xl font-semibold text-gray-900">+22%</p>
                  <p className="text-xs text-gray-500">Avg. earnings</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-2xl font-semibold text-gray-900">98%</p>
                  <p className="text-xs text-gray-500">Host satisfaction</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-2xl font-semibold text-gray-900">24/7</p>
                  <p className="text-xs text-gray-500">Partner support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
