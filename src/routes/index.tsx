import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Phone, Github, Dribbble, MessageCircle, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/abhiram-portrait.jpg";
import s1 from "@/assets/work-social-1.jpg";
import s2 from "@/assets/work-social-2.jpg";
import s3 from "@/assets/work-social-3.jpg";
import s4 from "@/assets/work-social-4.jpg";
import s5 from "@/assets/work-social-5.jpg";
import s6 from "@/assets/work-social-6.jpg";
import s7 from "@/assets/work-social-7.jpg";
import s8 from "@/assets/work-social-8.jpg";
import s9 from "@/assets/work-social-9.jpg";
import s10 from "@/assets/work-social-10.jpg";
import s11 from "@/assets/work-social-11.jpg";
import s12 from "@/assets/work-social-12.jpg";
import wBranding from "@/assets/work-branding.jpg";
import wPackaging from "@/assets/work-packaging.jpg";
import wAds from "@/assets/work-ads.jpg";
import wApp from "@/assets/work-app.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Abhiram Krishnan — Graphic Designer & UI/UX Aspirant" },
      {
        name: "description",
        content:
          "Portfolio of Abhiram Krishnan — freelance graphic designer crafting branding, packaging, social, advertising and app interfaces.",
      },
      { property: "og:title", content: "Abhiram Krishnan — Graphic Designer" },
      {
        property: "og:description",
        content: "Selected works across branding, packaging, advertising, and app design.",
      },
    ],
  }),
});

const socials = [
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { name: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
  { name: "Behance", href: "https://behance.net", Icon: Github },
  { name: "Mail", href: "mailto:hello@abhiramkrishnan.com", Icon: Mail },
];

const socialFeed = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <SelectedWorks />
      <Branding />
      <Packaging />
      <Advertisements />
      <AppDesign />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-black tracking-tight text-lg">
          AK<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.18em]">
          <a href="#works" className="hover:text-primary transition-colors">Works</a>
          <a href="#branding" className="hover:text-primary transition-colors">Branding</a>
          <a href="#packaging" className="hover:text-primary transition-colors">Packaging</a>
          <a href="#ads" className="hover:text-primary transition-colors">Ads</a>
          <a href="#app" className="hover:text-primary transition-colors">App</a>
        </nav>
        <a
          href="#contact"
          className="text-xs font-bold uppercase tracking-[0.18em] bg-primary text-primary-foreground px-4 py-2 hover:bg-foreground transition-colors"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Available for freelance · 2026
            </span>
          </div>
          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[15vw] sm:text-[12vw] lg:text-[9vw]">
            <span className="block">Abhiram</span>
            <span className="block text-primary">Krishnan<span className="text-foreground">.</span></span>
          </h1>
          <div className="mt-10 max-w-xl">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Experienced freelance designer & <span className="text-foreground font-semibold">UI/UX aspirant</span>.
              I build identities, packaging, and digital interfaces that don't apologise for being loud.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#works" className="bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2 hover:bg-foreground transition-colors">
                See selected works <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="border border-foreground/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full bg-primary" aria-hidden />
            <img
              src={portrait}
              alt="Portrait of Abhiram Krishnan"
              width={896}
              height={1120}
              className="relative w-full aspect-[4/5] object-cover grayscale"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground">
              <span className="bg-background px-2 py-1">Designer</span>
              <span className="bg-primary text-primary-foreground px-2 py-1">est. 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Branding", "Packaging", "Social Media", "UI / UX", "Advertising", "Editorial", "Hoardings", "Identity"];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span key={i} className="text-2xl lg:text-4xl font-black uppercase tracking-tight px-8 flex items-center gap-8">
            {t}
            <span className="text-primary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, num }: { kicker: string; title: string; num: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-6 mb-10">
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{kicker}</div>
        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">{title}</h2>
      </div>
      <span className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground">{num}</span>
    </div>
  );
}

function SelectedWorks() {
  return (
    <section id="works" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeader kicker="01 — Selected Works" title="Social Media Feed" num="12 Posts" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar socials */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Follow / Connect
              </div>
              <ul className="flex lg:flex-col gap-2">
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border border-border px-3 py-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        <span className="hidden lg:inline text-xs font-bold uppercase tracking-[0.15em]">{name}</span>
                      </span>
                      <ArrowUpRight className="hidden lg:block h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* 3 x 4 grid of 4:5 posts */}
          <div className="lg:col-span-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {socialFeed.map((src, i) => (
                <figure key={i} className="group relative overflow-hidden bg-muted">
                  <img
                    src={src}
                    alt={`Social media post ${i + 1}`}
                    width={640}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                      Post · {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection({
  id, kicker, title, num, image, blurb, alt, reverse,
}: {
  id: string; kicker: string; title: string; num: string; image: string; blurb: string; alt: string; reverse?: boolean;
}) {
  return (
    <section id={id} className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeader kicker={kicker} title={title} num={num} />
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-full w-full bg-primary -z-10" aria-hidden />
              <img
                src={image}
                alt={alt}
                width={1280}
                height={896}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{blurb}</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Role</span><span className="font-bold">Lead Designer</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Year</span><span className="font-bold">2025</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Tools</span><span className="font-bold">Figma, Illustrator</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Branding() {
  return (
    <ShowcaseSection
      id="branding"
      kicker="02 — Branding"
      title="Identity Systems"
      num="Studio Work"
      image={wBranding}
      alt="Branding identity mockup"
      blurb="Logos, marks, type systems and full visual identities for hospitality, fashion, and tech-forward brands. Every system ships with a usage guide."
    />
  );
}

function Packaging() {
  return (
    <ShowcaseSection
      id="packaging"
      kicker="03 — Packaging"
      title="Things You Can Hold"
      num="Retail"
      image={wPackaging}
      alt="Packaging design mockup"
      blurb="Structural and surface design for FMCG, beauty, and specialty retail — built for shelf-stand and unboxing moments worth filming."
      reverse
    />
  );
}

function Advertisements() {
  return (
    <ShowcaseSection
      id="ads"
      kicker="04 — Advertisements & Hoardings"
      title="Loud, Outside"
      num="OOH / Print"
      image={wAds}
      alt="Outdoor advertising hoarding"
      blurb="Outdoor campaigns, hoardings, transit and print advertising. Built for the 3-second glance from across an intersection."
    />
  );
}

function AppDesign() {
  return (
    <ShowcaseSection
      id="app"
      kicker="05 — App Design"
      title="Interfaces, Designed"
      num="UI / UX"
      image={wApp}
      alt="Mobile app design"
      blurb="Mobile-first product design — flows, components, and prototypes. Currently sharpening my UX craft on real shipping projects."
      reverse
    />
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-foreground text-background mt-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-background/60 mb-4">Let's collaborate</div>
            <h2 className="text-5xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
              Have a brief?<br />
              <span className="text-primary">Let's talk.</span>
            </h2>
            <a
              href="mailto:hello@abhiramkrishnan.com"
              className="mt-10 inline-flex items-center gap-3 text-2xl lg:text-4xl font-black underline underline-offset-8 decoration-primary decoration-4 hover:text-primary transition-colors"
            >
              hello@abhiramkrishnan.com
              <ArrowUpRight className="h-7 w-7" />
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-background/60 mb-6">Contact</div>
            <ul className="space-y-4 text-sm">
              <ContactRow Icon={Mail} label="Email" value="hello@abhiramkrishnan.com" href="mailto:hello@abhiramkrishnan.com" />
              <ContactRow Icon={Phone} label="Phone" value="+91 98 4567 1234" href="tel:+919845671234" />
              <ContactRow Icon={MessageCircle} label="WhatsApp" value="+91 98 4567 1234" href="https://wa.me/919845671234" />
              <ContactRow Icon={Linkedin} label="LinkedIn" value="/in/abhiramkrishnan" href="https://linkedin.com" />
              <ContactRow Icon={Instagram} label="Instagram" value="@abhiram.designs" href="https://instagram.com" />
              <ContactRow Icon={Dribbble} label="Dribbble" value="/abhiramkrishnan" href="https://dribbble.com" />
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/20 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs uppercase tracking-[0.2em] text-background/60">
          <span>© 2026 Abhiram Krishnan — All Rights Reserved</span>
          <span>Designed & Built in Kerala, India</span>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group flex items-center justify-between border-b border-background/20 py-3 hover:border-primary transition-colors"
      >
        <span className="flex items-center gap-4">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-background/60 w-20">{label}</span>
          <span className="font-semibold group-hover:text-primary transition-colors">{value}</span>
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" />
      </a>
    </li>
  );
}
