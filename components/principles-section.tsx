import { Eye, Keyboard, Zap, Smartphone, UserCheck } from "lucide-react";

const principles = [
  {
    title: "Daily Visibility",
    description: "Always know what is happening in your business right now.",
    icon: Eye,
  },
  {
    title: "Minimal Input",
    description:
      "Designed for busy operators. Get data in with the fewest clicks possible.",
    icon: Keyboard,
  },
  {
    title: "No Training Required",
    description:
      "Simple enough that your team can use it in 5 minutes without a manual.",
    icon: Zap,
  },
  {
    title: "Works on Cheap Androids",
    description:
      "Built for the phones your staff actually use. Fast even on low-spec hardware.",
    icon: Smartphone,
  },
  {
    title: "Owner-First Design",
    description:
      "Built so you can leave the store and still have full control of your operations.",
    icon: UserCheck,
  },
];

export function PrinciplesSection() {
  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Our Operating Principles
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            We don't sell features. We sell operating systems for small
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 border border-muted transition-all hover:shadow-md"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <principle.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {principle.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
