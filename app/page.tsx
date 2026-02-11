import DownloadForm from './components/DownloadForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight">lewkai</span>
          <a
            href="#contact"
            className="text-sm text-secondary hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Discipline is the advantage.
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            A strategic system for software companies navigating the speed and rate of change in AI. We don&apos;t chase trends — we build the frameworks to master them.
          </p>
          <a
            href="#problem"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            See Our Approach
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section id="problem" className="py-32 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            The speed of AI is not the problem. The lack of a system to manage it is.
          </h2>
          <p className="text-lg text-secondary mb-12 text-center leading-relaxed">
            AI capabilities are advancing faster than most organisations can evaluate, adopt, or integrate them. Without a structured system, companies fall into four predictable failure modes:
          </p>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Paralysis</h3>
              <p className="text-secondary text-lg">
                Waiting for the &ldquo;right&rdquo; tool. Waiting for the landscape to settle. Never shipping.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Overengineering</h3>
              <p className="text-secondary text-lg">
                Building elaborate solutions to simple problems. Shipping late, bloated, and brittle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cognitive bias</h3>
              <p className="text-secondary text-lg">
                Making decisions based on hype rather than evidence. Shipping the wrong thing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bolting on</h3>
              <p className="text-secondary text-lg">
                Adding AI features without rethinking the fundamentals. Decorating a structural problem rather than solving it.
              </p>
            </div>
          </div>
          <p className="text-2xl font-semibold text-center mt-16">
            We eliminate all four.
          </p>
        </div>
      </section>

      {/* Section 3: The Structural Shift */}
      <section id="shift" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            The per-seat pricing model is breaking.
          </h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              For two decades, enterprise software charged per seat — revenue scaled with headcount. That model breaks when AI agents do the work without logging in.
            </p>
            <p>
              The threat is not replacement. It is repricing. Buyers are already using AI as fee negotiation leverage — pointing at AI to demand lower prices for the same services. This cascade is just beginning.
            </p>
          </div>
          <blockquote className="my-12 py-8 border-y border-border">
            <p className="text-2xl md:text-3xl font-medium italic text-center">
              &ldquo;The threat is not replacement. The threat is repricing.&rdquo;
            </p>
          </blockquote>
          <p className="text-lg text-secondary leading-relaxed">
            There are two responses: bolt AI onto what exists, or rebuild from the ground up. We chose to rebuild.
          </p>
        </div>
      </section>

      {/* Section 4: The Six Pillars */}
      <section id="pillars" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
            Six pillars. One system.
          </h2>
          <p className="text-secondary text-center mb-16 max-w-2xl mx-auto text-lg">
            Our strategic framework for navigating AI velocity — drawn from decision science, engineering discipline, innovation history, and proven turnaround playbooks.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <PillarCard
              number="01"
              title="Critical Thinking & Decision Science"
              description="We use structured frameworks from cognitive science to make AI decisions based on evidence, not hype."
              source="Source: Mindware — Richard Nisbett, University of Michigan"
            />
            <PillarCard
              number="02"
              title="First Principles Thinking"
              description="We decompose every problem to its fundamentals before building. No analogies. No 'best practices' from six months ago."
            />
            <PillarCard
              number="03"
              title="Radical Simplicity"
              description="The simplest viable approach wins. Complexity is a liability, not a feature. We measure success by what we remove."
            />
            <PillarCard
              number="04"
              title="Incremental Innovation & Compounding"
              description="No single breakthrough transforms overnight. We compound hundreds of small, disciplined improvements — and win over time."
              source="Inspired by: The Most Powerful Idea in the World — William Rosen"
            />
            <PillarCard
              number="05"
              title="Test-Driven Development"
              description="We define what success looks like before we build. Every AI integration ships with tests, not hopes."
            />
            <PillarCard
              number="06"
              title="The Optimization Engine"
              description="Proprietary AI platform. Proprietary decision tools. Elite talent density. We don't just build — we systematically optimise."
              source="Inspired by: Bending Spoons' turnaround methodology"
            />
          </div>
        </div>
      </section>

      {/* Section 5: The Articulation Problem */}
      <section id="moat" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            AI can write code. We solve the harder problem.
          </h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed text-left">
            <p>
              When a VP of Sales says &ldquo;I need a better way to track the pipeline,&rdquo; that sentence contains less than 5% of the information required to build a useful tool.
            </p>
            <p>
              The other 95% is buried in how the team actually works — the unspoken conventions, the exceptions that matter, what &ldquo;better&rdquo; actually means in context.
            </p>
            <p>
              This is the Articulation Problem — and it&apos;s our competitive moat. AI can write code fast. Understanding what to build requires human judgment, first-principles reasoning, and deep customer empathy. That&apos;s what we do.
            </p>
          </div>
          <p className="text-xl font-semibold mt-12">
            We build what you actually need. Not what you said you wanted.
          </p>
        </div>
      </section>

      {/* Section 6: Markets */}
      <section id="markets" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
            South Africa to the world.
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <MarketCard
              region="South Africa"
              description="First-mover as the local AI enablement leader. Built here, engineered to global standards."
            />
            <MarketCard
              region="United States"
              description="The optimisation engine for enterprises drowning in AI options."
            />
            <MarketCard
              region="United Kingdom"
              description="AI with the rigour your regulators expect and your customers deserve."
            />
            <MarketCard
              region="European Union"
              description="Compliant by design, not by afterthought."
            />
          </div>
        </div>
      </section>

      {/* Section 7: How We Work */}
      <section id="approach" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
            Our approach.
          </h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Shared AI Platform</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Every team plugs into a common AI infrastructure. Every project makes the platform better. The platform makes every project faster.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Proprietary Tooling</h3>
              <p className="text-secondary text-lg leading-relaxed">
                We build our own decision-making tools. Data in, insights out. No committee meetings required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Talent Density</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Fewer people. Better people. AI amplifies their judgment, not replaces it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Lifetime Ownership</h3>
              <p className="text-secondary text-lg leading-relaxed">
                We don&apos;t build projects. We build systems we improve for decades. Every improvement compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: The Accountability Layer */}
      <section id="accountability" className="py-32 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            We are the ringable neck.
          </h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              In an age of autonomous agents and vibe-coded prototypes, enterprises still need a phone number to call at 2am. A contract that says someone is accountable. A team that shows up when things break.
            </p>
            <p className="text-xl font-medium text-foreground">
              AI agents don&apos;t sign contracts. We do.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Download Framework */}
      <section id="framework" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The AI Decision Framework
          </h2>
          <p className="text-lg text-secondary mb-8 leading-relaxed">
            A one-page checklist to evaluate any AI investment before committing resources.
            Based on our Six Pillars methodology.
          </p>
          <DownloadForm />
        </div>
      </section>

      {/* Section 10: Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-2xl font-semibold tracking-tight">lewkai</span>
              <p className="text-secondary mt-2">Cape Town, South Africa</p>
            </div>
            <div className="text-left md:text-right">
              <a
                href="mailto:hello@lewkai.com"
                className="text-lg font-medium hover:text-accent transition-colors"
              >
                hello@lewkai.com
              </a>
              <div className="mt-3">
                <a
                  href="https://linkedin.com/company/lewkai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary">
              Built with discipline.
            </p>
            <p className="text-sm text-secondary">
              &copy; {new Date().getFullYear()} Lewkai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PillarCard({
  number,
  title,
  description,
  source
}: {
  number: string;
  title: string;
  description: string;
  source?: string;
}) {
  return (
    <div className="p-8 border border-border rounded-lg bg-background hover:border-accent/50 transition-colors">
      <span className="text-sm text-accent font-mono">{number}</span>
      <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
      <p className="text-secondary">{description}</p>
      {source && (
        <p className="text-sm text-secondary/70 mt-4 italic">{source}</p>
      )}
    </div>
  );
}

function MarketCard({
  region,
  description
}: {
  region: string;
  description: string;
}) {
  return (
    <div className="p-8 border border-border rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{region}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
