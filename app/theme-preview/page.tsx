export default function ThemePreviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed left-0 top-0 z-[80] h-1 w-full bg-border/40">
        <div data-scroll-progress className="ff-pulse-line h-full w-full bg-accent" />
      </div>

      <section data-hero data-reveal className="border-b border-border bg-foreground/[0.02] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="ff-fade-up mb-3 text-sm uppercase tracking-[0.2em] text-secondary">LewkAI Theme</p>
          <h1
            className="ff-fade-up ff-delay-1 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Website Theme Preview
          </h1>
          <p className="ff-fade-up ff-delay-2 mt-6 max-w-2xl text-lg text-secondary">
            KISS motion preview: soft entrance, subtle card movement, and smooth scrolling.
          </p>
        </div>
      </section>

      <section data-reveal className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold">Color Tokens</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Swatch name="background" className="bg-background border border-border" />
            <Swatch name="foreground" className="bg-foreground" textClassName="text-background" />
            <Swatch name="accent" className="bg-accent" textClassName="text-white" />
            <Swatch name="secondary" className="bg-secondary" textClassName="text-white" />
            <Swatch name="border" className="bg-border" />
          </div>
        </div>
      </section>

      <section data-reveal className="border-y border-border bg-foreground/[0.02] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">
              Primary Action
            </button>
            <button className="rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:border-foreground">
              Secondary Action
            </button>
            <button className="rounded-xl px-6 py-3 font-medium text-accent underline-offset-4 hover:underline">
              Text Link Action
            </button>
          </div>
        </div>
      </section>

      <section data-reveal className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div data-parallax>
            <ThemeCard
              title="Minimal, Premium, Calm"
              body="The UI keeps contrast strong and layout quiet. Accent color is intentional, not noisy."
            />
          </div>
          <div data-parallax>
            <ThemeCard
              title="Readable by Default"
              body="Outfit for body copy and Space Grotesk for key headings. Clear hierarchy, simple spacing."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div data-pin className="mx-auto max-w-5xl rounded-2xl border border-border bg-foreground/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-secondary">Pinned Scroll Demo</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">This block pins while you scroll</h2>
          <p className="mt-4 max-w-2xl text-secondary">
            This simulates the richer, guided motion from the video. It is intentionally stronger
            than the normal site motion so you can validate the interaction style.
          </p>
        </div>
      </section>

      <section data-reveal className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold">Form Preview</h2>
          <form className="grid gap-4 rounded-2xl border border-border bg-background p-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 md:col-span-1">
              <span className="text-sm text-secondary">Name</span>
              <input
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-accent/40"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-1">
              <span className="text-sm text-secondary">Email</span>
              <input
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-accent/40"
                placeholder="you@company.com"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm text-secondary">Message</span>
              <textarea
                className="min-h-28 rounded-xl border border-border bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-accent/40"
                placeholder="Tell us what you want to build"
              />
            </label>
            <div className="md:col-span-2">
              <button className="rounded-xl bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="h-[35vh]" />
    </main>
  );
}

function Swatch({
  name,
  className,
  textClassName = "text-foreground",
}: {
  name: string;
  className: string;
  textClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-border p-3">
      <div className={`h-20 rounded-lg ${className}`} />
      <p className={`mt-3 text-sm capitalize ${textClassName}`}>{name}</p>
    </div>
  );
}

function ThemeCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="ff-fade-up ff-delay-3 rounded-2xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-secondary">{body}</p>
    </article>
  );
}
