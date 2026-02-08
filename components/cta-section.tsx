"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-muted"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
          Turn spreadsheets into systems.
        </h2>
        <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Ready to get daily visibility and reclaim your time? Message us to see
          how we can streamline your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              window.location.href =
                "mailto:bpxailabs@gmail.com?subject=Interested%20in%20BusinessApps";
            }}
          >
            <MessageCircle className="mr-2 h-6 w-6" /> Message us to get started
          </Button>
          <a
            href="https://bpxai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors font-medium"
          >
            A product of BPxAI
          </a>
        </div>
      </div>
    </section>
  );
}
