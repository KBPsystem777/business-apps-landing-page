import { HeroSection } from "@/components/hero-section";
import { PrinciplesSection } from "@/components/principles-section";
import { DifferentiationSection } from "@/components/differentiation-section";
import { CTASection } from "@/components/cta-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      {/* Navigation - Minimal and Floating for Mobile/PWA feel */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/60 backdrop-blur-md border border-white/20 rounded-full z-50 py-3 px-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-primary tracking-tight">
            BusinessApps
          </div>
          <div className="flex gap-6 items-center flex-wrap justify-center">
            <a
              href="#principles"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Principles
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Why
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <PrinciplesSection />
      <DifferentiationSection />
      <CTASection />

      <footer className="py-12 px-4 text-center border-t border-muted/30">
        <p className="text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} BusinessApps by BPxAI. Simple.
          Practical. Clear.
        </p>
      </footer>
    </main>
  );
}
