import { useState } from "react";
import { Mail, Home, User } from "lucide-react";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate success UX for now.
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: "success", message: "You're on the waitlist! We'll be in touch shortly." });
      e.target.reset();
    }, 900);
  };

  return (
    <section id="waitlist" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-geist text-3xl font-semibold text-gray-900 sm:text-4xl">
              Be a founding host
            </h2>
            <p className="mt-3 text-gray-600">
              Get priority onboarding, early feature access, and personalized support.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Early-bird fee discounts</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Smart pricing setup session</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-500" /> Priority support channel</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Full name</label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@host.com"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g., Austin"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Number of properties</label>
                  <div className="relative">
                    <Home className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      name="properties"
                      min={1}
                      defaultValue={1}
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2.5 text-gray-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                I agree to receive early access emails and product updates.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-lg bg-rose-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-rose-500 disabled:opacity-60"
              >
                {loading ? "Joining..." : "Join the waitlist"}
              </button>

              {status?.type === "success" && (
                <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
