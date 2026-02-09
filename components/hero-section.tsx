"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* <div className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/logo.jpg"
              alt="BusinessApps Logo"
              fill
              className="object-cover"
              priority
            />
          </div> */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary max-w-4xl text-balance">
            Systems that work as hard as you do.
          </h1>
          <p className="text-xl sm:text-2xl text-foreground font-medium max-w-2xl text-balance leading-relaxed">
            BusinessApps is built by someone who runs businesses — not just
            writes code.
          </p>
          <p className="text-lg text-foreground/80 max-w-xl">
            We build simple, practical apps for food, rental, and small
            businesses that want clarity instead of complex software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg"
            >
              See How It Works <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-full px-10 h-14 text-lg bg-transparent"
              onClick={() => {
                window.location.href = "mailto:bpxailabs@gmail.com";
              }}
            >
              Message Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
