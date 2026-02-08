import { ShieldCheck, WifiOff, Repeat, Cpu } from "lucide-react";

export function DifferentiationSection() {
  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
              System, Not Software.
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Most small businesses don’t need "digital transformation"—they
              need clarity. We build repeatable systems that solve daily pain
              points, not bloated enterprise tools.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#af9cb1]/20 p-2 rounded-lg text-[#af9cb1]">
                  <Repeat size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    "If we build it once, we build it for many."
                  </h4>
                  <p className="text-foreground/70">
                    We focus on repeatable tools for food and rental businesses,
                    ensuring high reliability and continuous improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#ead5c6]/30 p-2 rounded-lg text-[#866475]">
                  <WifiOff size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    Built for Philippine internet realities.
                  </h4>
                  <p className="text-foreground/70">
                    Our apps are offline-capable and low-connectivity aware.
                    Your business doesn't stop when the internet does.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#789ac0]/20 p-2 rounded-lg text-primary">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    Invisible AI.
                  </h4>
                  <p className="text-foreground/70">
                    Where helpful, we use automation and AI quietly in the
                    background to reduce manual work—never to complicate it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-muted relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ead5c6]/20 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Owner exits the store.
              </h3>
              <p className="text-lg text-foreground/80 mb-6 italic">
                "Our single strongest promise: BusinessApps is built so owners
                can leave the store and still know what is happening."
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <span className="font-medium text-foreground">
                  Validated on real Philippine businesses like SnackPax.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
