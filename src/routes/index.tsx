import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import aprilRose from "@/assets/april-rose.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "April Rose Deocampo — General Virtual Assistant" },
      { name: "description", content: "A calm, detail-obsessed General Virtual Assistant helping founders, executives and small teams reclaim their week — inbox, calendar, CRM, research and data, handled." },
      { property: "og:title", content: "April Rose Deocampo — General Virtual Assistant" },
      { property: "og:description", content: "10+ years of admin, customer-care and data experience. Now available remotely as a General VA." },
    ],
  }),
  component: Index,
});

const services = [
  {
    no: "01",
    title: "Inbox & Calendar Care",
    body: "Triaged inboxes, drafted replies in your voice, scheduled meetings across time zones, and quiet follow-ups so nothing slips.",
    tools: ["Gmail", "Outlook", "Google Calendar", "Calendly"],
  },
  {
    no: "02",
    title: "Client Communications",
    body: "Front-line responses, warranty & support tickets, professional escalations — a warm, brand-aligned voice for every customer.",
    tools: ["Zendesk", "Intercom", "WhatsApp Biz", "Email"],
  },
  {
    no: "03",
    title: "Executive & Admin Support",
    body: "Travel itineraries, meeting prep, minutes & action-item follow-through, document drafting, and confidential correspondence.",
    tools: ["Google Workspace", "MS 365", "Notion", "Zoom"],
  },
  {
    no: "04",
    title: "Data Entry & CRM Hygiene",
    body: "High-volume, accurate data input, reconciliations, repayment tracking, and tidy records you can actually report from.",
    tools: ["Excel", "Google Sheets", "Orgmeter", "BizMate"],
  },
  {
    no: "05",
    title: "Order, Repair & Vendor Ops",
    body: "Purchase Orders, Service Orders, vendor follow-ups, and end-to-end coordination for products in motion.",
    tools: ["PO/SO workflows", "Trello", "Asana", "ClickUp"],
  },
  {
    no: "06",
    title: "Research & Light Reporting",
    body: "Prospect lists, supplier shortlists, weekly status notes, and clean summaries that respect your time.",
    tools: ["Sheets", "Docs", "Loom", "Slack"],
  },
];

const experience = [
  {
    period: "Aug 2024 — Present",
    role: "Data & Operations Assistant",
    company: "BIZCAP UK  ·  Remote",
    bullets: [
      "Owns daily input and reconciliation of high-volume merchant loan data across Orgmeter and BizMate — zero-defect mindset.",
      "Maintains an Excel control sheet for repayments, deductions and exceptions, surfacing anomalies before they become escalations.",
      "Builds quiet little automations and templates that shave hours off recurring back-office tasks.",
    ],
  },
  {
    period: "2017 — 2024",
    role: "Customer Success & Coordination Lead",
    company: "EMCOR Inc.",
    bullets: [
      "Acted as the human face of the brand for warranty claims, phone inquiries and walk-in concerns across Samsung, Panasonic, Electrolux and more.",
      "Coordinated daily technician dispatch schedules and end-to-end repair workflows — inbound, outbound and follow-through.",
      "Generated Purchase Orders and Service Orders, kept records audit-ready, and partnered closely with sales to keep customers moving.",
      "Reported directly to the Customer Service Manager; trusted with sensitive accounts and difficult conversations.",
    ],
  },
  {
    period: "2014 — 2017",
    role: "Executive Assistant to Senior Management",
    company: "Sophia Jewellery Inc.",
    bullets: [
      "Ran the manager's day: calendar, correspondence, reports and a steady stream of confidential documents.",
      "Planned travel and accommodation end-to-end — itineraries, logistics, and the small details executives shouldn't have to think about.",
      "Sat in on Management Committee (Mancom) meetings, captured detailed minutes, and chased action items to completion.",
    ],
  },
];

const toolkit = [
  { name: "Google Workspace", url: "https://workspace.google.com/dashboard" },
  { name: "Microsoft 365", url: "https://login.microsoftonline.com/" },
  { name: "Excel · Pivot & VLOOKUP", url: "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3A%2F%2Foffice.live.com%2Fstart%2FExcel.aspx" },
  { name: "Notion", url: "https://www.notion.so/login" },
  { name: "Trello", url: "https://trello.com/login" },
  { name: "Asana", url: "https://app.asana.com/-/login" },
  { name: "ClickUp", url: "https://app.clickup.com/login" },
  { name: "Slack", url: "https://slack.com/signin" },
  { name: "Zoom", url: "https://zoom.us/signin" },
  { name: "Canva", url: "https://www.canva.com/login" },
  { name: "Calendly", url: "https://calendly.com/login" },
  { name: "Zendesk", url: "https://www.zendesk.com/login/" },
  { name: "Orgmeter", url: "https://www.orgmeter.com/" },
  { name: "BizMate", url: "https://bizmate.biz/" },
  { name: "CRM Hygiene" },
  { name: "Inbox Zero" },
  { name: "Minute-taking" },
  { name: "PO / SO Workflows" },
];

const testimonials = [
  {
    quote:
      "Reliable, organised and unfailingly calm under pressure — exactly the kind of teammate every service floor wants beside them.",
    name: "Jojet A. Datiles",
    role: "Service Supervisor, EMCOR Inc.",
  },
  {
    quote:
      "April Rose owns her work. She handled difficult customers with grace and our internal coordination never missed a beat.",
    name: "Jayza L. Booc",
    role: "Manager, EMCOR Inc.",
  },
  {
    quote:
      "Warm, articulate and incredibly organised. She brings a quiet professionalism to every conversation.",
    name: "Maria Rizza A. Bonita",
    role: "ESL Teacher",
  },
];

function Index() {
  useEffect(() => {
    // Scroll reveal
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    // Click ripple for elements with .click-pop
    const onClick = (ev: MouseEvent) => {
      const target = (ev.target as HTMLElement).closest<HTMLElement>(".click-pop");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${ev.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${ev.clientY - rect.top - size / 2}px`;
      const prevPos = getComputedStyle(target).position;
      if (prevPos === "static") target.style.position = "relative";
      target.style.overflow = "hidden";
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    };
    document.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Experience />
      <Toolkit />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-foreground text-background font-display text-lg">a</span>
          <span className="font-display text-lg">April Rose</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#toolkit" className="hover:text-foreground transition">Toolkit</a>
          <a href="#words" className="hover:text-foreground transition">Kind words</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 transition"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-10 relative">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4">
            <img
              src={aprilRose.url}
              alt="April Rose Deocampo"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border border-border shadow-sm rotate-[-3deg]"
            />
            <div className="flex items-center gap-3 text-xs font-mono-quirk uppercase tracking-widest text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
              Available · Remote · PH-based VA → Worldwide
            </div>
          </div>
          <h1 className="font-display mt-6 text-[12vw] sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-tighter">
            The quiet
            <br />
            engine behind
            <br />
            <em className="italic text-[var(--terracotta)]">busy people.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">April Rose</span> — a General Virtual Assistant with 2 years
            as a Data Entry Specialist, backed by a decade across customer care and executive
            support. I take the small, recurring, easy-to-drop things off your plate so you can
            stay on the work that actually grows the business.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--terracotta)] text-white px-6 py-3 text-sm font-medium hover:translate-y-[-1px] transition"
            >
              Book a discovery call
              <span aria-hidden>↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm hover:bg-foreground hover:text-background transition"
            >
              See what I handle
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-border space-y-8">
          <Stat k="10+" v="years of admin & service experience" />
          <Stat k="3" v="industries — retail, jewellery, fintech" />
          <Stat k="∞" v="inboxes brought back to zero" />
          <div className="rounded-2xl bg-card p-5 border border-border">
            <p className="font-mono-quirk text-[10px] uppercase tracking-widest text-muted-foreground">
              Currently
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Supporting <span className="font-medium">BIZCAP UK</span> as a remote Data & Operations Assistant — and opening
              a couple of part-time client seats.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-5xl text-foreground">{k}</div>
      <div className="mt-1 text-sm text-muted-foreground">{v}</div>
    </div>
  );
}

function Marquee() {
  const words = [
    "Inbox Zero", "Calendar Tetris", "Minute-perfect Minutes",
    "CRM Hygiene", "Quiet Follow-ups", "Spotless Spreadsheets",
    "PO / SO Wizardry", "Travel, Booked", "Customers, Heard",
  ];
  const row = [...words, ...words];
  return (
    <div className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="flex gap-10 py-5 ticker whitespace-nowrap font-display text-2xl text-foreground/70">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span aria-hidden className="text-[var(--terracotta)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">
          (01) About
        </p>
        <h2 className="font-display text-5xl mt-4 leading-tight">
          Hi, I'm <em className="italic text-[var(--terracotta)]">April Rose.</em>
        </h2>
      </div>
      <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          For more than a decade, I've worked where customer experience, organization and operations
          meet — from supporting executives in the jewellery industry, to managing warranty and
          customer service operations for global brands like <span className="font-medium">Samsung, Panasonic and Electrolux</span>,
          and later helping maintain accurate business data for a UK-based company.
        </p>
        <p>
          Different industries, same approach: <em className="italic">I pay attention to the details, solve problems before they become issues, and create systems that keep things running smoothly.</em>
        </p>
        <p>
          Today, I bring that experience to my work as a General Virtual Assistant. I'm outgoing,
          dependable and highly organized, with a natural ability to anticipate needs and keep
          priorities moving forward.
        </p>
        <p className="text-muted-foreground">
          I work best with founders, entrepreneurs and small teams who need more than just
          administrative support — they need a calm, trustworthy second brain who can bring order to
          the chaos, communicate with care, and help the business operate more efficiently. If you're
          looking for someone who takes initiative, values accuracy, and genuinely enjoys helping
          people succeed, I'd love to be part of your team.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">
              (02) Services
            </p>
            <h2 className="font-display text-5xl lg:text-6xl mt-4 max-w-2xl leading-[1]">
              Everything you keep meaning to delegate.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Pick a lane or hand me the whole back office — I shape my week around what your
            business actually needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <article key={s.no} className="bg-card p-8 group hover:bg-background transition">
              <div className="flex items-baseline justify-between">
                <span className="font-mono-quirk text-xs text-muted-foreground">{s.no}</span>
                <span className="opacity-0 group-hover:opacity-100 transition text-[var(--terracotta)]">→</span>
              </div>
              <h3 className="font-display text-2xl mt-6 leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <li key={t} className="text-[11px] font-mono-quirk uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">
            (03) Experience
          </p>
          <h2 className="font-display text-5xl mt-4 leading-[1]">
            A decade behind the scenes, keeping things running.
          </h2>
        </div>
        <p className="lg:col-span-8 text-muted-foreground self-end max-w-2xl">
          A decade spent behind the scenes keeping operations organized, customers supported and
          data accurate. From five years in customer service to two years in data management, I've
          built the skills businesses rely on in an Executive Virtual Assistant today.
        </p>
      </div>

      <ol className="space-y-4">
        {experience.map((job, i) => (
          <li
            key={i}
            className="group grid lg:grid-cols-12 gap-6 lg:gap-10 p-6 lg:p-8 rounded-2xl border border-border hover:border-foreground/40 hover:bg-card transition"
          >
            <div className="lg:col-span-3">
              <div className="font-mono-quirk text-xs uppercase tracking-widest text-[var(--terracotta)]">
                {job.period}
              </div>
            </div>
            <div className="lg:col-span-9">
              <h3 className="font-display text-3xl leading-tight">{job.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--terracotta)] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border p-6">
          <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">Education</p>
          <p className="mt-3 font-display text-xl">Bachelor of Arts, Major in English</p>
          <p className="text-sm text-muted-foreground">Western Mindanao State University · 2006–2010</p>
        </div>
        <div className="rounded-2xl border border-border p-6">
          <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
          <p className="mt-3 font-display text-xl">English · Tagalog</p>
          <p className="text-sm text-muted-foreground">Fluent, written and spoken</p>
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section id="toolkit" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono-quirk text-xs uppercase tracking-widest text-background/60">
              (04) Toolkit
            </p>
            <h2 className="font-display text-5xl mt-4 leading-[1]">
              Comfortable across the stack you're already using.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-3 content-start">
            {toolkit.map((t) =>
              t.url ? (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="click-pop relative overflow-hidden rounded-full border border-background/25 px-4 py-2 text-sm hover:bg-background hover:text-foreground transition"
                  title={`Open ${t.name} login`}
                >
                  {t.name}
                  <span aria-hidden className="ml-1.5 opacity-60">↗</span>
                </a>
              ) : (
                <span
                  key={t.name}
                  className="rounded-full border border-background/25 px-4 py-2 text-sm opacity-80"
                >
                  {t.name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="words" className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
      <div className="mb-14">
        <p className="font-mono-quirk text-xs uppercase tracking-widest text-muted-foreground">
          (05) Kind words
        </p>
        <h2 className="font-display text-5xl mt-4 leading-[1] max-w-2xl">
          From the people I've worked beside.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl bg-card border border-border p-7 flex flex-col">
            <span className="font-display text-5xl text-[var(--terracotta)] leading-none">“</span>
            <blockquote className="mt-2 text-lg leading-relaxed font-display text-foreground/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 relative">
        <div className="rounded-3xl bg-[var(--terracotta)] text-white p-10 lg:p-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="font-mono-quirk text-xs uppercase tracking-widest text-white/70">
              (06) Let's work together
            </p>
            <h2 className="font-display text-5xl lg:text-7xl mt-4 leading-[0.95]">
              Hand me the
              <br />
              <em className="italic">small stuff.</em>
            </h2>
            <p className="mt-6 max-w-md text-white/85 leading-relaxed">
              Tell me what's eating your week. I'll reply within one business day with a short note
              on where I can help and how we'd start.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <ContactRow label="Email" value="ardeocampo042490@gmail.com" href="mailto:ardeocampo042490@gmail.com" />
            <ContactRow label="Phone" value="+63 955 460 8537" href="tel:+639554608537" />
            <ContactRow label="Based in" value="Zamboanga City, Philippines · Remote" />
            <a
              href="mailto:ardeocampo042490@gmail.com?subject=VA%20enquiry"
              className="mt-4 w-full inline-flex items-center justify-between rounded-2xl bg-white text-[var(--terracotta)] px-6 py-4 text-base font-medium hover:bg-white/90 transition"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/25 pb-3">
      <span className="font-mono-quirk text-[10px] uppercase tracking-widest text-white/60">{label}</span>
      <span className="font-display text-lg text-right">{value}</span>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90 transition">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} April Rose T. Deocampo — General Virtual Assistant.</p>
        <p className="font-mono-quirk text-xs uppercase tracking-widest">Built with care · PH-based VA ⇄ Worldwide</p>
      </div>
    </footer>
  );
}
