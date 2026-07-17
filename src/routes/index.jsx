import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { sendContactEmail } from "@/lib/emailjs";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import pawsense from "@/assets/pawsense-hero.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
const Route = createFileRoute("/")({
  component: Portfolio
});
function Portfolio() {
  useReveal();
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-background text-foreground" }, /* @__PURE__ */ React.createElement(TopBar, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Marquee, null), /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Experience, null), /* @__PURE__ */ React.createElement(Projects, null), /* @__PURE__ */ React.createElement(Skills, null), /* @__PURE__ */ React.createElement(Contact, null), /* @__PURE__ */ React.createElement(Footer, null));
}
function TopBar() {
  return /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-40 border-b border-ink/10 bg-background/80 backdrop-blur" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10" }, /* @__PURE__ */ React.createElement("a", { href: "#top", className: "font-display text-lg tracking-tight" }, "PK", /* @__PURE__ */ React.createElement("span", { className: "text-coral" }, ".")), /* @__PURE__ */ React.createElement("nav", { className: "hidden gap-8 text-sm font-medium md:flex" }, /* @__PURE__ */ React.createElement("a", { href: "#about", className: "hover:text-coral transition-colors nav-link-hover" }, "About"), /* @__PURE__ */ React.createElement("a", { href: "#work", className: "hover:text-coral transition-colors nav-link-hover" }, "Work"), /* @__PURE__ */ React.createElement("a", { href: "#projects", className: "hover:text-coral transition-colors nav-link-hover" }, "Projects"), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "hover:text-coral transition-colors nav-link-hover" }, "Contact")), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "mailto:prashantkumawat0823@gmail.com",
      className: "group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-coral"
    },
    "Let's talk",
    /* @__PURE__ */ React.createElement(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
  )));
}
function Hero() {
  return /* @__PURE__ */ React.createElement("section", { id: "top", className: "relative overflow-hidden bg-[#f3f0ed] text-ink grain-bg" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 flex flex-col justify-center gap-0 overflow-hidden select-none z-[1]"
    },
    [
      "CREATIVE PORTFOLIO",
      "CREATIVE PORTFOLIO",
      "CREATIVE PORTFOLIO",
      "CREATIVE PORTFOLIO",
      "CREATIVE PORTFOLIO",
      "CREATIVE PORTFOLIO"
    ].map((t, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        className: `font-display whitespace-nowrap text-[22vw] font-black leading-[0.75] tracking-tighter text-coral/15 ${i % 2 === 0 ? "pan-x" : "pan-x-alt"}`,
        style: { animationDelay: `${i * -4}s` }
      },
      t,
      " \xA0 ",
      t,
      " \xA0 ",
      t
    ))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 z-[0] bg-[radial-gradient(ellipse_at_center,rgba(255,140,105,0.35),transparent_55%)]"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "relative mx-auto flex min-h-[100vh] w-full max-w-[1800px] flex-col px-8 py-12 md:px-16 md:py-16" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-8 top-4 z-[10] flex flex-col items-start gap-1 md:left-16 md:top-8 fade-up" }, /* @__PURE__ */ React.createElement("div", { className: "h-6 w-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", className: "h-full w-full" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M50 5 L58 42 L95 42 L65 64 L75 100 L50 78 L25 100 L35 64 L5 42 L42 42 Z",
      fill: "currentColor"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "font-display text-xs md:text-sm leading-tight tracking-widest font-semibold" }, "PRASHANT", /* @__PURE__ */ React.createElement("br", null), "KUMAWAT")), /* @__PURE__ */ React.createElement("div", { className: "absolute right-8 top-12 z-[10] text-right md:right-16 md:top-16 fade-up" }, /* @__PURE__ */ React.createElement("div", { className: "font-display text-base md:text-lg font-semibold uppercase tracking-wider" }, /* @__PURE__ */ React.createElement("br", null), "DEVELOPER")), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-6 left-8 z-[10] font-display text-base md:text-lg tracking-[0.2em] md:bottom-8 md:left-16 fade-up" }, "2026"), /* @__PURE__ */ React.createElement("h1", { className: "pointer-events-none absolute left-1/2 top-[50%] z-[8] w-[90%] -translate-x-1/2 -translate-y-1/2 text-center font-display font-black leading-[0.75] tracking-tighter text-coral" }, /* @__PURE__ */ React.createElement("span", { className: "block overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "kinetic-line block text-[10vw] md:text-[12vw]",
      style: { animationDelay: "0.15s" }
    },
    "FULL-STACK"
  )), /* @__PURE__ */ React.createElement("span", { className: "block overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "kinetic-line block text-[10vw] md:text-[12vw]",
      style: { animationDelay: "0.35s" }
    },
    "DEVELOPER"
  )))));
}
function Stat({ k, v }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-display text-3xl md:text-4xl" }, k), /* @__PURE__ */ React.createElement("div", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground" }, v));
}
function Marquee() {
  const items = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "UI / UX",
    "Responsive",
    "Git",
    "Figma",
    "Web Performance"
  ];
  const row = [...items, ...items];
  return /* @__PURE__ */ React.createElement("div", { className: "border-y border-ink/10 bg-ink py-3 text-cream overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "marquee flex w-max gap-8 whitespace-nowrap font-display text-2xl md:text-4xl" }, row.map((t, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "flex items-center gap-8" }, t, /* @__PURE__ */ React.createElement("span", { className: "text-coral" }, "\u25CF")))));
}
function About() {
  return /* @__PURE__ */ React.createElement("section", { id: "about", className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4 reveal" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink" }, "01 \u2014 ABOUT"), /* @__PURE__ */ React.createElement("h2", { className: "font-display mt-6 text-2xl md:text-3xl text-ink" }, "HELLO,", /* @__PURE__ */ React.createElement("br", null), "I'M NOVA.")), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 space-y-6 text-lg leading-relaxed md:col-span-8 md:pl-16 reveal" }, /* @__PURE__ */ React.createElement("p", null, "I'm a passionate ", /* @__PURE__ */ React.createElement("b", null, "Front-End & Web Developer"), " with hands-on experience creating responsive, user-focused websites using React, JavaScript, HTML and CSS. Currently pursuing a B.Sc. in Computer Applications, with a growing interest in UI/UX and modern web tech."), /* @__PURE__ */ React.createElement("p", null, "Beyond code, I spent two years with an eSports organization where I sharpened team collaboration, creative direction and digital branding \u2014 skills I now bring straight into my development work."), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground" }, "Driven by curiosity and creativity, I keep exploring new tech to build modern, engaging, high-performance web experiences."), /* @__PURE__ */ React.createElement("dl", { className: "mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 text-sm" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground" }, "BASED IN"), /* @__PURE__ */ React.createElement("dd", { className: "mt-1 font-medium" }, "Pune, Maharashtra, India")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground" }, "STUDYING"), /* @__PURE__ */ React.createElement("dd", { className: "mt-1 font-medium" }, "B.Sc. Computer Applications")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground" }, "PRONOUNS"), /* @__PURE__ */ React.createElement("dd", { className: "mt-1 font-medium" }, "He / Him")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground" }, "FOCUS"), /* @__PURE__ */ React.createElement("dd", { className: "mt-1 font-medium" }, "React \xB7 UI \xB7 Interactions"))))));
}
function Experience() {
  return /* @__PURE__ */ React.createElement("section", { id: "work", className: "bg-ink text-cream" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between reveal" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-cream" }, "02 \u2014 Experience"), /* @__PURE__ */ React.createElement("h2", { className: "font-display mt-6 text-2xl md:text-3xl text-cream" }, "WHERE I'VE", /* @__PURE__ */ React.createElement("br", null), "BEEN WORKING")), /* @__PURE__ */ React.createElement("span", { className: "hidden font-mono text-xs uppercase tracking-widest text-cream/60 md:block" }, "2022 \u2014 Present")), /* @__PURE__ */ React.createElement("div", { className: "mt-16 divide-y divide-cream/15 border-y border-cream/15" }, /* @__PURE__ */ React.createElement(
    ExpRow,
    {
      years: "Mar 2022 \u2014 Feb 2024",
      role: "Revenue Manager",
      company: "Teenager Esports",
      meta: "Full-time \xB7 India \xB7 On-site",
      body: "Revenue strategist for esports \u2014 turning IT and networking into revenue-driving assets. Optimized revenue through innovative pricing, data-driven insights and user-centric improvements at Teenager Esports."
    }
  ), /* @__PURE__ */ React.createElement(
    ExpRow,
    {
      years: "2024 \u2014 Now",
      role: "Front-End Developer",
      company: "Independent / Freelance",
      meta: "Remote \xB7 Building",
      body: "Designing and building responsive interfaces in React and modern CSS. Shipping polished side-projects, exploring UI/UX and motion, and collaborating with small teams on the web."
    }
  ), /* @__PURE__ */ React.createElement(
    ExpRow,
    {
      years: "2023 \u2014 Present",
      role: "B.Sc. Computer Applications",
      company: "Undergraduate \u2014 3rd year",
      meta: "Pune, India",
      body: "Deepening the fundamentals \u2014 data structures, web technologies and design principles \u2014 while turning coursework into real, shipped projects."
    }
  ))));
}
function ExpRow({
  years,
  role,
  company,
  meta,
  body
}) {
  return /* @__PURE__ */ React.createElement("article", { className: "group grid grid-cols-12 gap-6 py-10 transition-colors hover:bg-cream/[0.03]" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-3" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-xs uppercase tracking-widest text-coral" }, years), /* @__PURE__ */ React.createElement("div", { className: "mt-2 text-sm text-cream/60" }, meta)), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-5" }, /* @__PURE__ */ React.createElement("h3", { className: "font-display text-3xl md:text-4xl" }, role), /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-cream/70" }, company)), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-cream/80 leading-relaxed" }, body)));
}
function Projects() {
  return /* @__PURE__ */ React.createElement("section", { id: "projects", className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between reveal" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink" }, "03 \u2014 Selected work"), /* @__PURE__ */ React.createElement("h2", { className: "font-display mt-6 text-2xl md:text-3xl text-ink" }, "PROJECTS")), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/http-nova",
      target: "_blank",
      rel: "noreferrer",
      className: "hidden items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-coral md:inline-flex"
    },
    "View all on GitHub ",
    /* @__PURE__ */ React.createElement(ArrowUpRight, { className: "h-4 w-4" })
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-16 grid grid-cols-12 gap-6" }, /* @__PURE__ */ React.createElement(
    ProjectCard,
    {
      featured: true,
      n: "01",
      title: "PawSense",
      tag: "React \xB7 UI \xB7 Live demo",
      body: "A pet-focused web experience \u2014 clean, playful UI with a friendly information architecture, built with React and modern CSS.",
      href: "https://http-nova.github.io/pawsense/",
      img: pawsense
    }
  ), /* @__PURE__ */ React.createElement(
    ProjectCard,
    {
      n: "02",
      title: "Esports Ops Toolkit",
      tag: "Case study",
      body: "Two years leading revenue ops at Teenager Esports: pricing experiments, dashboards, and streamlined workflows for a fast-moving team."
    }
  ), /* @__PURE__ */ React.createElement(
    ProjectCard,
    {
      n: "03",
      title: "Portfolio '26",
      tag: "Design + build",
      body: "This site. An editorial-style portfolio built with React, TypeScript and Tailwind \u2014 big type, warm palette, no filler."
    }
  ))));
}
function ProjectCard({
  n,
  title,
  tag,
  body,
  href,
  img,
  featured
}) {
  const Wrap = href ? "a" : "div";
  return /* @__PURE__ */ React.createElement(
    Wrap,
    {
      ...href ? { href, target: "_blank", rel: "noreferrer" } : {},
      className: `group relative flex flex-col overflow-hidden rounded-md border border-ink/10 bg-card p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-ink hover:shadow-xl md:p-8 ${featured ? "col-span-12 lg:col-span-8" : "col-span-12 md:col-span-6 lg:col-span-4"} reveal-zoom`
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground" }, n, " / ", tag), /* @__PURE__ */ React.createElement(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground transition-all group-hover:text-coral group-hover:translate-x-1 group-hover:-translate-y-1" })),
    /* @__PURE__ */ React.createElement("h3", { className: `font-display mt-6 ${featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} text-ink` }, title),
    /* @__PURE__ */ React.createElement("p", { className: "mt-4 max-w-md text-muted-foreground" }, body),
    img && /* @__PURE__ */ React.createElement("div", { className: "mt-8 overflow-hidden rounded-md" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: img,
        alt: title,
        width: 1200,
        height: 800,
        loading: "lazy",
        className: "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      }
    ))
  );
}
function Skills() {
  const groups = [
    {
      title: "Front-end",
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind", "Responsive design"]
    },
    {
      title: "Craft",
      items: [
        "UI / UX principles",
        "Layout & typography",
        "Micro-interactions",
        "Accessibility basics"
      ]
    },
    {
      title: "Workflow",
      items: ["Git & GitHub", "Figma", "Vite / modern tooling", "Debugging & DevTools"]
    },
    {
      title: "Beyond code",
      items: ["Team collaboration", "Creative direction", "Digital branding", "Project management"]
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-paper" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink" }, "04 \u2014 Toolkit"), /* @__PURE__ */ React.createElement("h2", { className: "font-display mt-6 text-2xl md:text-3xl text-ink" }, "SKILLS"), /* @__PURE__ */ React.createElement("div", { className: "mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4" }, groups.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.title }, /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3 border-b border-ink/20 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "h-2 w-2 rounded-full bg-coral" }), /* @__PURE__ */ React.createElement("h3", { className: "font-display text-2xl" }, g.title)), /* @__PURE__ */ React.createElement("ul", { className: "mt-4 space-y-2 text-sm" }, g.items.map((it) => /* @__PURE__ */ React.createElement("li", { key: it, className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", null, it), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-muted-foreground" }, "\u25CF")))))))));
}
const blockedEmailDomains = /* @__PURE__ */ new Set([
  "mailinator.com",
  "guerrillamail.com",
  "yopmail.com",
  "temp-mail.org",
  "10minutemail.com"
]);
const MessageFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address.").refine((email) => {
    const domain = email.split("@")[1]?.toLowerCase() ?? "";
    return domain.length > 0 && !blockedEmailDomains.has(domain);
  }, "Please use a permanent email address."),
  message: z.string().trim().min(20, "Please share a few more details about your request.").max(1200, "Message must be 1200 characters or fewer."),
  permissionGranted: z.boolean().refine(Boolean, {
    message: "Only project, collaboration, or hiring inquiries are accepted."
  }),
  website: z.string().max(0, "Permission denied.")
});
function Contact() {
  const [open, setOpen] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(MessageFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      permissionGranted: false,
      website: ""
    }
  });
  const messageLength = watch("message")?.length ?? 0;
  const openMessageDialog = () => {
    setOpen(true);
  };
  const onEntryKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMessageDialog();
    }
  };
  const onSubmit = async (data) => {
    if (data.website) {
      setError("permissionGranted", {
        type: "server",
        message: "Only project, collaboration, or hiring inquiries are accepted."
      });
      toast.error("Message not sent", { description: "Permission denied." });
      return;
    }
    console.log("[Contact Form] Submitting with data:", data);
    try {
      await sendContactEmail({
        fullName: data.fullName,
        email: data.email,
        message: data.message
      });
      toast.success("Message sent", {
        description: "Thanks for reaching out. A response should follow soon."
      });
      reset();
      setOpen(false);
    } catch (error) {
      console.error("[Contact Form] Full error details:", error);
      console.error("[Contact Form] Error status:", error?.status);
      console.error("[Contact Form] Error text:", error?.text);
      console.error("[Contact Form] Error response:", error?.response);
      
      let message = "Something went wrong while sending your message.";
      if (error instanceof Error) {
        message = error.message;
      } else if (error?.text) {
        message = error.text;
      } else if (error?.response?.statusText) {
        message = `EmailJS error: ${error.response.statusText}`;
      }
      
      if (message.toLowerCase().includes("permission")) {
        setError("permissionGranted", {
          type: "server",
          message: "Only project, collaboration, or hiring inquiries are accepted."
        });
      }
      toast.error("Message not sent", {
        description: message
      });
    }
  };
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "relative overflow-hidden bg-coral text-cream" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-cream reveal" }, "05 \u2014 Let's collaborate"), /* @__PURE__ */ React.createElement("h2", { className: "font-display mt-6 text-3xl md:text-5xl text-cream reveal" }, "LET'S BUILD", /* @__PURE__ */ React.createElement("br", null), "SOMETHING GOOD."), /* @__PURE__ */ React.createElement("div", { className: "mt-14 grid grid-cols-1 gap-10 md:grid-cols-3" }, /* @__PURE__ */ React.createElement(
    ContactRow,
    {
      icon: /* @__PURE__ */ React.createElement(Mail, { className: "h-5 w-5" }),
      label: "Email",
      value: "prashantkumawat0823@gmail.com",
      href: "mailto:prashantkumawat0823@gmail.com"
    }
  ), /* @__PURE__ */ React.createElement(
    ContactRow,
    {
      icon: /* @__PURE__ */ React.createElement(Phone, { className: "h-5 w-5" }),
      label: "Phone",
      value: "+91 91722 00424",
      href: "tel:+919172200424"
    }
  ), /* @__PURE__ */ React.createElement(
    ContactRow,
    {
      icon: /* @__PURE__ */ React.createElement(MapPin, { className: "h-5 w-5" }),
      label: "Location",
      value: "Pune, Maharashtra, India"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "button",
      tabIndex: 0,
      onClick: openMessageDialog,
      onKeyDown: onEntryKeyDown,
      className: "group rounded-[1.75rem] border border-cream/25 bg-ink/20 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream/50 hover:bg-ink/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70 md:p-8 glow-pulse"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-[0.32em] text-cream/70" }, "Message"), /* @__PURE__ */ React.createElement("h3", { className: "mt-4 font-display text-4xl text-cream md:text-5xl" }, "SEND MESSAGE"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 max-w-xl text-sm leading-relaxed text-cream/75 md:text-base" }, "Open the message form for project inquiries, collaboration requests, and hiring conversations.")), /* @__PURE__ */ React.createElement("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cream/40 text-cream transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" }, /* @__PURE__ */ React.createElement(Send, { className: "h-5 w-5" })))
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://www.linkedin.com/in/prashantkumawat0",
      target: "_blank",
      rel: "noreferrer",
      className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-cream/10"
    },
    /* @__PURE__ */ React.createElement(Linkedin, { className: "h-4 w-4" }),
    " LinkedIn"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/http-nova",
      target: "_blank",
      rel: "noreferrer",
      className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-cream/10"
    },
    /* @__PURE__ */ React.createElement(Github, { className: "h-4 w-4" }),
    " GitHub"
  ))), /* @__PURE__ */ React.createElement(Dialog, { open, onOpenChange: setOpen }, /* @__PURE__ */ React.createElement(DialogContent, { className: "w-[calc(100%-1.5rem)] max-w-[820px] border-none bg-transparent p-0 text-cream shadow-none" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-[2rem] border border-cream/20 bg-[#111111] p-6 shadow-2xl md:p-10" }, /* @__PURE__ */ React.createElement("div", { className: "mb-8 flex items-start justify-between gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-[0.32em] text-coral" }, "Contact"), /* @__PURE__ */ React.createElement("h3", { className: "mt-4 font-display text-4xl text-cream md:text-5xl" }, "SEND A MESSAGE"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 max-w-2xl text-sm leading-relaxed text-cream/70 md:text-base" }, "Share your brief, timeline, and goals. Only genuine project, collaboration, or hiring inquiries are accepted.")), /* @__PURE__ */ React.createElement(DialogClose, { asChild: true }, /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "icon",
      className: "shrink-0 rounded-full border border-cream/15 text-cream hover:bg-white/5 hover:text-cream"
    },
    /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "Close message form"),
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, className: "text-lg leading-none" }, "\xD7")
  ))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-8" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      tabIndex: -1,
      autoComplete: "off",
      className: "hidden",
      "aria-hidden": "true",
      ...register("website")
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 md:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    Label,
    {
      htmlFor: "fullName",
      className: "font-mono text-xs uppercase tracking-[0.32em] text-coral"
    },
    "Full Name"
  ), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "fullName",
      placeholder: "Your full name",
      ...register("fullName"),
      className: "h-14 rounded-none border-0 border-b border-cream/20 bg-transparent px-0 text-base text-cream placeholder:text-cream/35 focus-visible:ring-0"
    }
  ), errors.fullName && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-red-300" }, errors.fullName.message)), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    Label,
    {
      htmlFor: "email",
      className: "font-mono text-xs uppercase tracking-[0.32em] text-coral"
    },
    "Email Address"
  ), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "email",
      type: "email",
      placeholder: "you@example.com",
      ...register("email"),
      className: "h-14 rounded-none border-0 border-b border-cream/20 bg-transparent px-0 text-base text-cream placeholder:text-cream/35 focus-visible:ring-0"
    }
  ), errors.email && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-red-300" }, errors.email.message))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement(
    Label,
    {
      htmlFor: "message",
      className: "font-mono text-xs uppercase tracking-[0.32em] text-coral"
    },
    "Your Message"
  ), /* @__PURE__ */ React.createElement("span", { className: "text-xs uppercase tracking-[0.24em] text-cream/45" }, messageLength, "/1200")), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "message",
      placeholder: "Tell me about the project, timeline, scope, and anything that matters.",
      rows: 7,
      maxLength: 1200,
      ...register("message"),
      className: "min-h-[180px] rounded-none border-0 border-b border-cream/20 bg-transparent px-0 pb-4 text-base text-cream placeholder:text-cream/35 focus-visible:ring-0 resize-none"
    }
  ), errors.message && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-red-300" }, errors.message.message)), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 rounded-2xl border border-cream/12 bg-white/[0.02] p-4" }, /* @__PURE__ */ React.createElement(
    Controller,
    {
      control,
      name: "permissionGranted",
      render: ({ field }) => /* @__PURE__ */ React.createElement("label", { className: "flex cursor-pointer items-start gap-3" }, /* @__PURE__ */ React.createElement(
        Checkbox,
        {
          checked: field.value,
          onCheckedChange: (checked) => field.onChange(Boolean(checked)),
          className: "mt-0.5 border-cream/40 data-[state=checked]:bg-coral data-[state=checked]:text-cream"
        }
      ), /* @__PURE__ */ React.createElement("span", { className: "text-sm leading-relaxed text-cream/78" }, "I confirm this message is for a real project, collaboration, or hiring conversation."))
    }
  ), errors.permissionGranted && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-red-300" }, errors.permissionGranted.message), /* @__PURE__ */ React.createElement("p", { className: "text-xs leading-relaxed text-cream/50" }, "Temporary email addresses and automated submissions are blocked.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3 pt-2 sm:flex-row" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "submit",
      disabled: isSubmitting,
      className: "min-h-14 flex-1 rounded-full bg-coral px-8 text-sm font-semibold uppercase tracking-[0.24em] text-cream hover:bg-coral/90"
    },
    isSubmitting ? "Sending..." : "Send Message"
  ), /* @__PURE__ */ React.createElement(DialogClose, { asChild: true }, /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "button",
      variant: "secondary",
      className: "min-h-14 rounded-full bg-cream/10 px-8 text-sm font-semibold uppercase tracking-[0.24em] text-cream hover:bg-cream/20"
    },
    "Cancel"
  ))))))));
}
function ContactRow({
  icon,
  label,
  value,
  href
}) {
  const inner = /* @__PURE__ */ React.createElement("div", { className: "border-t border-cream/30 pt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream/70" }, icon, " ", label), /* @__PURE__ */ React.createElement("div", { className: "mt-3 text-xl font-medium md:text-2xl break-words" }, value));
  return href ? /* @__PURE__ */ React.createElement("a", { href, className: "block transition-opacity hover:opacity-80" }, inner) : inner;
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-ink text-cream/70" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 text-xs uppercase tracking-widest md:flex-row md:items-center md:px-10" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 Prashant Kumawat"), /* @__PURE__ */ React.createElement("span", { className: "font-mono" }, "Designed & built with care \xB7 Pune, IN"), /* @__PURE__ */ React.createElement("a", { href: "#top", className: "hover:text-coral" }, "Back to top \u2191")));
}
export {
  Route
};
