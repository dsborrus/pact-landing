function AppStoreButton() {
  return (
    <a
      href="https://apps.apple.com/app/pact"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
      </svg>
      Download on the App Store
    </a>
  );
}

const steps = [
  {
    emoji: "\u{1F91D}",
    title: "Form a Pact",
    description:
      "Start a Pact and invite your friends with a simple code. No sign-ups, no passwords.",
  },
  {
    emoji: "\u{1F3AF}",
    title: "Set your daily goal",
    description:
      "Pick one thing you want to do every day. Meditate, read, run \u2014 it\u2019s your promise.",
  },
  {
    emoji: "\u{1F440}",
    title: "Show up or get shamed",
    description:
      "Check in daily. Watch your friends\u2019 bubbles light up. If you skip? Everyone knows.",
  },
];

const screenshots = [
  { label: "Bubbles Screen", file: "bubbles.png" },
  { label: "Stats Screen", file: "stats.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-2xl">
          Keep your habits.
          <br />
          Together.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/60 max-w-lg leading-relaxed">
          Show up every day, or be the odd one out!
        </p>
        <div className="mt-10">
          <AppStoreButton />
        </div>
      </section>

      {/* What is Pact? */}
      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80">
          <p>
            Do you have that goal that you keep putting off? Like to practice
            your Spanish? Meditate? Stretch? Journal? If only there was some way
            to motivate you to hit that daily goal.
          </p>
          <p>
            <span className="text-foreground font-semibold">
              Pact can help with that.
            </span>{" "}
            You and your friends &mdash; two to five of you &mdash; form a Pact.
            Each person sets one daily goal, and every day, you check in when
            you&apos;ve done it.
          </p>
          <p className="font-medium text-foreground">
            Simple. Social. Sexy.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 sm:py-28 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl" role="img" aria-label={step.title}>
                  {step.emoji}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {screenshots.map((shot) => (
              <div
                key={shot.label}
                className="relative aspect-[390/844] rounded-3xl overflow-hidden shadow-lg bg-foreground/5 flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/screenshots/${shot.file}`}
                  alt={shot.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="relative text-foreground/30 text-lg font-medium pointer-events-none">
                  {shot.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="flex flex-col items-center text-center px-6 py-20 sm:py-28 bg-foreground/[0.02]">
        <h2 className="text-3xl sm:text-4xl font-bold max-w-lg">
          Your goals aren&apos;t going to complete themselves.
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-foreground/60">
          But a bit of social pressure will make sure you do.
        </p>
        <div className="mt-10">
          <AppStoreButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 flex items-center justify-between text-sm text-foreground/40">
        <span>Pact &copy; 2025</span>
        <a
          href="/privacy"
          className="hover:text-foreground/60 transition-colors"
        >
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}
