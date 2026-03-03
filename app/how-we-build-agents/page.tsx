import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Build AI Agents | Lewkai",
  description:
    "The LewkAI Agent Architecture Methodology. Based on 20+ production deployments and the AI Velocity System. Critical thinking, first principles, radical simplicity.",
};

export default function MethodologyPage() {
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
              href="/about"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              About
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
          <p className="text-sm uppercase tracking-widest text-secondary mb-6">
            Our Methodology
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            How We Build AI Agents
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            The LewkAI Agent Architecture Methodology. Based on 20+ production deployments 
            and the AI Velocity System.
          </p>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Problem with Most AI Agents</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Most AI agents fail before they ship. They fail because teams skip the hard thinking 
              and jump straight to building. They cobble together LangChain tutorials, copy-paste 
              prompts from Reddit, and pray the demo doesn't break in production.
            </p>
            <p>
              The result? Fragile systems that work for 10 minutes but collapse at scale. Agents 
              that hallucinate when data changes. Pipelines that nobody can debug. Integration 
              nightmares that require full-time babysitting.
            </p>
            <p>
              We've seen it repeatedly: teams spend 3 months building an "intelligent automation 
              system" that gets abandoned because it costs more to maintain than the problem it solved.
            </p>
            <p>
              The root cause isn't technical incompetence—it's rushing to build before understanding 
              what should be built. Most agent projects fail not because the AI is bad, but because 
              the thinking behind the architecture was lazy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Six Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Our Approach — The Six Pillars
          </h2>
          <p className="text-secondary text-center mb-12">
            We don't just build agents. We engineer systems using six disciplined principles 
            derived from decision science, first principles thinking, and proven engineering methodologies.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Critical Thinking First</h3>
              <p className="text-secondary leading-relaxed">
                Before writing code, we complete a structured decision framework: What's the base 
                rate of success for this type of agent? What must be true for this to work? What 
                would make this fail in 6 months? This prevents chasing shiny objects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. First Principles Architecture</h3>
              <p className="text-secondary leading-relaxed">
                We decompose problems to fundamentals. What does the customer actually need? What 
                can the technology reliably do today—not in the roadmap? We build from verified 
                capabilities, not vendor demos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Radical Simplicity (KISS)</h3>
              <p className="text-secondary leading-relaxed">
                The simplest viable approach wins. We measure engineering excellence by what we 
                remove, not what we add. Every component must justify its existence or be deleted.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Test-Driven Development</h3>
              <p className="text-secondary leading-relaxed">
                We define success before building. Every agent has explicit tests for output format, 
                quality thresholds, edge cases, latency, and fallback behavior. No vibes-based development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">5. Compounding Improvements</h3>
              <p className="text-secondary leading-relaxed">
                We don't build projects—we build systems we own and improve for decades. Every 
                deployment teaches us something that improves the next one.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">6. Optimization Engine</h3>
              <p className="text-secondary leading-relaxed">
                Like Bending Spoons, we ruthlessly optimize for paying users. We build proprietary 
                internal tooling that compounds—each agent makes the next one faster to deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tech Stack */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The LewkAI Agent Stack</h2>
          <p className="text-secondary mb-8">
            We use a curated, battle-tested stack—not the framework of the week. Our agents are built with:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Core Runtime</h3>
              <p className="text-secondary text-sm">
                TypeScript/Node.js (primary), Python (when necessary). We value type safety and predictable execution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">AI Models</h3>
              <p className="text-secondary text-sm">
                Claude API (primary reasoning engine), OpenAI (when specific capabilities needed), local models (for latency-sensitive operations).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Memory & Context</h3>
              <p className="text-secondary text-sm">
                mem0 for persistent agent memory, custom RAG pipelines for domain knowledge, Zep for conversation context.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tool Orchestration</h3>
              <p className="text-secondary text-sm">
                Model Context Protocol (MCP) for extensible tool composition. We build tools that compose cleanly.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Multi-Channel Delivery</h3>
              <p className="text-secondary text-sm">
                WhatsApp Business API, Telegram Bot API, Discord, web interfaces, voice (STT/TTS). One agent, multiple surfaces.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Infrastructure</h3>
              <p className="text-secondary text-sm">
                Docker containers, Nix for reproducible environments, Tailscale for secure networking, PostgreSQL/Neon for persistence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Development Workflow</h3>
              <p className="text-secondary text-sm">
                Claude Code as primary IDE (we're power users), TDD with Jest/Vitest, CI/CD with GitHub Actions, automated deployment to Railway/Vercel.
              </p>
            </div>
          </div>

          <p className="text-secondary text-sm mt-8 italic">
            This stack isn't trendy—it's reliable. We optimize for systems that still work in 5 years.
          </p>
        </div>
      </section>

      {/* Section 4: Real-World Example */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Real-World Application</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Here's how this works in practice. We recently deployed a customer service agent for 
              a fibre infrastructure company. Traditional approach: build a chatbot, hope it answers questions.
            </p>
            <p>
              Our approach: First, we asked "Why?" until we found the real problem: customers weren't 
              getting status updates on outages, flooding support with repetitive inquiries. The fix 
              wasn't smarter AI—it was connecting outage data to proactive notifications.
            </p>
            <p>
              We built a minimal viable agent in 2 weeks that handled 60% of inquiries through WhatsApp. 
              It integrated with Airtable CRM, checked infrastructure status in real-time, and escalated 
              complex issues to humans with full context.
            </p>
            <p>
              But we didn't stop. Week 3: added voice message transcription. Week 4: improved handoff 
              quality. Week 6: the agent was handling 80% of tier-1 support without human intervention.
            </p>
            <p>
              The result: support team focused on complex problems, customers got instant answers, and 
              the system improved continuously through incremental optimization—not through rewrites.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Why This Matters */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why This Matters for Your Business</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              AI agents aren't magic—they're software systems. And like all software, they require 
              disciplined engineering to be reliable, maintainable, and valuable.
            </p>
            <p>
              Most companies treat agents like experiments. We treat them like products with 
              decades-long lifecycles. This mindset changes everything: architecture decisions, 
              testing practices, deployment strategies, and maintenance planning.
            </p>
            <p>
              When you work with LewkAI, you don't get a demo that impresses in a meeting but breaks 
              in production. You get systems engineered with the rigor your business demands.
            </p>
            <p>
              We don't chase every new LLM release or framework hype cycle. We build on fundamentals 
              that don't change: clear thinking, simple architectures, comprehensive testing, and 
              continuous optimization.
            </p>
            <p>
              The result is agents that actually work—reliably, at scale, for years. Not prototypes. 
              Production systems that compound value over time.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Multi-Channel</h3>
              <p className="text-secondary text-sm">WhatsApp, Telegram, Slack, Discord, Web, Voice</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Memory Systems</h3>
              <p className="text-secondary text-sm">Persistent user memory, conversation context, RAG knowledge bases</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Tool Integration</h3>
              <p className="text-secondary text-sm">CRM, ERP, helpdesk, databases via MCP</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-secondary text-sm">Unit, integration, and behavioral tests for all agent outputs</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-secondary text-sm">Docker containers, automated CI/CD, zero-downtime updates</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Compliance</h3>
              <p className="text-secondary text-sm">POPIA compliant, EU AI Act aligned by design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Source & CTA */}
      <section className="py-16 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">The Source</h2>
          <p className="text-secondary mb-6">
            This methodology is documented in our open-source agent reference implementation. 
            It's not a product—it's a reference for how we think about agent systems.
          </p>
          <a
            href="https://github.com/safarivis/agents_eva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:border-foreground transition-colors mb-12"
          >
            View on GitHub →
          </a>

          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-4">Let's Build Something That Lasts</h2>
            <p className="text-secondary mb-8">
              We don't do demos. We do disciplined engineering.
            </p>
            <a
              href="mailto:hello@lewkai.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Discuss Your Agent Architecture
            </a>
          </div>
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
