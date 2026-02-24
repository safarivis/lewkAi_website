export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="inline-flex items-center gap-2.5" aria-label="LewkAI home">
            <LogoMark />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-secondary mb-6">
            Full-Service AI Implementation Partner
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Navigate AI with Confidence
          </h1>
          <p className="text-lg text-secondary mb-4 max-w-xl mx-auto">
            We&apos;re not just an AI vendor. We&apos;re your long-term implementation partner&mdash;from strategy to support, for businesses of all sizes.
          </p>
          <p className="text-lg font-medium text-foreground mb-12">
            Because the best AI integration isn&apos;t just smart&mdash;it&apos;s human.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Start Your AI Journey
            </a>
            <a
              href="https://calendly.com/louisrdup/needs-assesment-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:border-foreground transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              lewkAi is a South African AI implementation company on a mission to make artificial intelligence accessible and practical for every business.
            </p>
            <p>
              We&apos;re a full-service implementation partner working with companies of all sizes&mdash;from small businesses taking their first steps with AI to enterprises scaling automation across departments. We serve every industry because AI&apos;s potential isn&apos;t limited by sector&mdash;it&apos;s limited by implementation expertise.
            </p>
            <p>
              In uncertain times, businesses need more than AI tools. They need a trusted partner who understands both the technology and the human side of transformation. That&apos;s lewkAi.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
            Our Services
          </h2>
          <p className="text-secondary text-center mb-16 max-w-2xl mx-auto text-lg">
            From process automation to custom solutions, we handle every aspect of AI implementation. One partner. Complete coverage.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Process Automation"
              description="Streamline workflows and free your team from repetitive tasks to focus on high-value strategy."
              items={['Workflow automation', 'Document processing & data entry', 'Administrative task elimination', 'Intelligent routing systems']}
              outcome="Reduce operational costs, increase team productivity, eliminate bottlenecks"
            />
            <ServiceCard
              title="Customer Service AI"
              description="Enhance customer experience through intelligent automation that builds brand loyalty."
              items={['AI chatbots & virtual assistants', 'Email automation & ticket routing', '24/7 customer engagement', 'Personalized customer interactions']}
              outcome="Improve response times, increase customer satisfaction, scale without headcount"
            />
            <ServiceCard
              title="Data Analytics & Insights"
              description="Transform raw data into actionable intelligence for data-driven decision-making."
              items={['Predictive analytics', 'Business intelligence dashboards', 'Pattern recognition & forecasting', 'Automated reporting systems']}
              outcome="Make faster, smarter decisions backed by real insights"
            />
            <ServiceCard
              title="Custom AI Solutions"
              description="Tailored implementations for unique business requirements where off-the-shelf tools fail."
              items={['Bespoke AI models', 'Industry-specific solutions', 'Integration with existing systems', 'Scalable AI infrastructure']}
              outcome="Solve your specific challenges with precision-built solutions"
            />
            <ServiceCard
              title="AI Agents"
              description="Deploy task-specific AI agents that execute workflows, coordinate tools, and support your team in real time."
              items={['Lead qualification and follow-up agents', 'Internal operations and support agents', 'Multi-step task orchestration', 'CRM, helpdesk, and tool integrations']}
              outcome="Increase output, speed up execution, and keep teams focused on higher-value work"
            />
            <ServiceCard
              title="Website Services"
              description="Build and optimize modern websites that convert visitors and connect seamlessly with your AI and business systems."
              items={['Website design and development', 'Landing pages and conversion optimization', 'CMS setup and content workflows', 'Analytics, forms, and automation integrations']}
              outcome="Launch faster, improve conversion rates, and create a stronger digital presence"
            />
          </div>
        </div>
      </section>

      {/* Section 4: How We're Different */}
      <section id="difference" className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
            How We&apos;re Different
          </h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Partnership, Not Transactions</h3>
              <p className="text-secondary text-lg leading-relaxed">
                We&apos;re not a vendor delivering a product and disappearing. We&apos;re your long-term AI partner, invested in your success at every stage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Human-Centered Implementation</h3>
              <p className="text-secondary text-lg leading-relaxed">
                AI should empower people, not replace them. We design implementations that enhance human capability and create better work environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">No Business Left Behind</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Too often, AI feels like it&apos;s only for tech giants with massive budgets. We believe every business deserves access to AI&apos;s transformative power.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Clarity Over Complexity</h3>
              <p className="text-secondary text-lg leading-relaxed">
                We translate AI jargon into plain business language. You&apos;ll understand what we&apos;re doing, why we&apos;re doing it, and what outcomes to expect.
              </p>
            </div>
          </div>
          <div className="mt-16 p-8 border border-border rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">South African Roots, Global Standards</h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Based in Cape Town, we understand the unique challenges of South African businesses while delivering world-class AI solutions. We&apos;re POPIA compliant, King IV aligned, and committed to ethical, responsible AI.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Our Promise */}
      <section id="promise" className="py-32 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Our Promise
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            In uncertain times, businesses need more than cutting-edge technology. They need a trusted partner who understands that AI transformation is as much about people as it is about algorithms.
          </p>
          <p className="text-xl font-medium text-foreground">
            We promise to listen first, recommend honestly, implement expertly, and support continuously. Your success is our success.
          </p>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 px-6 bg-foreground/[0.02]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Implement AI the Right Way?
          </h2>
          <p className="text-lg text-secondary mb-12 leading-relaxed">
            In uncertain times, you need more than technology. You need a trusted partner who understands both AI and your business&mdash;someone who will listen, recommend honestly, implement expertly, and support you continuously.
          </p>
          <a
            href="https://calendly.com/louisrdup/needs-assesment-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Section 7: Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <LogoMark />
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
              AI Implementation with the Human Touch
            </p>
            <p className="text-sm text-secondary">
              &copy; {new Date().getFullYear()} LewkAI. All rights reserved.
            </p>
          </div>
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
      <span
        className="text-2xl font-bold tracking-tight leading-none"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        LewkAI
      </span>
    </span>
  );
}

function ServiceCard({
  title,
  description,
  items,
  outcome
}: {
  title: string;
  description: string;
  items: string[];
  outcome: string;
}) {
  return (
    <div className="p-8 border border-border rounded-lg bg-background hover:border-accent/50 transition-colors">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {items.map((item, index) => (
          <li key={index} className="text-secondary text-sm flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm font-medium text-foreground border-t border-border pt-4">
        {outcome}
      </p>
    </div>
  );
}
