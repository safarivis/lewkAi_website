import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lewkai",
  description:
    "Meet the team behind LewkAI. Louis du Plessis and Kelly are building AI systems that transform how businesses operate.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="LewkAI home">
            <LogoMark />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About LewkAI
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            We&apos;re a South African AI implementation company on a mission to turn 
            AI chaos into working systems. Founded in 2024 by Louis du Plessis and Kelly.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              LewkAI was born from a simple observation: AI is everywhere, but most companies 
              are drowning in it. We saw organizations collecting AI tools like trophies but 
              lacking the orchestration, strategy, and ownership to make AI actually work.
            </p>
            <p>
              Founded in Cape Town in 2024, we set out to bridge the gap between AI potential 
              and operational reality. We don&apos;t sell tools. We design AI teams—intelligent 
              agents that work safely, strategically, and at scale.
            </p>
            <p>
              Our mission is simple: <strong>Turn AI chaos into working systems.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Our Team
          </h2>

          {/* Louis */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                LdP
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Louis du Plessis</h3>
                <p className="text-secondary mb-4">Co-Founder & AI Agent Architect</p>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Louis is an AI Agent Architect with hands-on experience deploying 20+ 
                    production AI agents across WhatsApp, Telegram, Discord, and enterprise 
                    channels. He deployed and configured Clawdbot/Moltbot as his personal AI 
                    gateway, building custom skills and multi-channel integrations. He specializes 
                    in agent orchestration, multi-channel platforms, and human-agent interfaces.
                  </p>
                  <p>
                    With 15+ years of business transformation experience scaling companies 
                    from R2M to R40M revenue, Louis combines deep technical expertise with 
                    real-world operational knowledge. He believes AI agents represent a paradigm 
                    shift as significant as the browser revolution.
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://linkedin.com/in/louis-du-plessis-72a95923a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href="https://github.com/safarivis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Kelly */}
          <div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                K
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Kelly</h3>
                <p className="text-secondary mb-4">Co-Founder</p>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Kelly leads operations and strategy at LewkAI, ensuring our AI implementations 
                    align with business goals and deliver measurable results.
                  </p>
                  <p>
                    With a focus on client relationships and operational excellence, Kelly 
                    ensures that every LewkAI engagement is built on clear communication, 
                    realistic expectations, and genuine partnership.
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://linkedin.com/company/lewkai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why LewkAI?</h2>
          <p className="text-secondary leading-relaxed mb-8">
            We sit at the intersection of business reality, AI capability, and human trust. 
            We answer the question no one else is answering well: <strong>"How do we actually 
            live with AI?"</strong> Not theoretically. Operationally, today.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Work With Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <LogoMark />
          <p className="text-sm text-secondary">
            Powered by LewkAI ·{" "}
            <a
              href="https://lewkai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              lewkai.com
            </a>
          </p>
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} LewkAI. Cape Town, South Africa.
          </p>
        </div>
      </footer>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="lewkaiLogoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#00ccff" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="17" fill="url(#lewkaiLogoGradient)" />
        <circle cx="76" cy="24" r="15" fill="var(--background)" />
      </svg>
      <span className="text-xl font-bold tracking-tight">LewkAI</span>
    </span>
  );
}
