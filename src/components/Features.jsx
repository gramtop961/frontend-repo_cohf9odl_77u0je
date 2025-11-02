import { Shield, Users, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smarter pricing",
    desc: "Adaptive pricing that reacts to demand, seasonality, and events to maximize occupancy and revenue.",
    icon: Star,
    color: "text-amber-600",
  },
  {
    title: "Guest screening",
    desc: "Built-in verification and behavior signals help you host confidently with fewer surprises.",
    icon: Shield,
    color: "text-emerald-600",
  },
  {
    title: "Owner-friendly terms",
    desc: "Transparent fees and instant payouts. You keep more of what you earn, always.",
    icon: Users,
    color: "text-rose-600",
  },
  {
    title: "Local insights",
    desc: "Neighborhood demand, local regulations, and trends at a glance for smarter decisions.",
    icon: MapPin,
    color: "text-sky-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="relative border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-geist text-3xl font-semibold text-gray-900 sm:text-4xl">
            Built to help you host smarter
          </h2>
          <p className="mt-3 text-gray-600">
            Tools inspired by the best of Airbnb, designed with real owners.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ title, desc, icon: Icon, color }) => (
            <motion.div
              variants={item}
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
