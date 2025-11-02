import { CheckCircle2, Calendar, Wallet } from "lucide-react";

const steps = [
  {
    title: "Apply to join",
    desc: "Tell us about your property and hosting goals. It takes less than 3 minutes.",
    icon: CheckCircle2,
  },
  {
    title: "Get early access",
    desc: "We’ll invite owners in waves and help get your listing ready to shine.",
    icon: Calendar,
  },
  {
    title: "Start earning",
    desc: "Publish your listing, sync calendars, and get paid fast with transparent fees.",
    icon: Wallet,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-white to-rose-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-geist text-3xl font-semibold text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-gray-600">
            Simple steps to list, optimize, and delight your guests.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <li
              key={title}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {idx + 1}. {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
