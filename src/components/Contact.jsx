import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Download, Globe, Mail, MapPin, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "./Brand.jsx";
import { profile } from "../data/resume.js";
import { Magnetic, Section } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Contact() {
  const { container, item } = useReveal();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const rows = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: profile.whatsapp, href: profile.whatsappHref },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
    { icon: Globe, label: "Website", value: profile.websiteLabel, href: profile.website },
    { icon: MapPin, label: "Hubs", value: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="// 06 · Initiate transmission · Kolkata & Downtown Dubai"
      title={
        <>
          Let's build <span className="gradient-text">what's next</span>
        </>
      }
      intro="Hiring for AI automation, full-stack or data roles? Or need a website, Flutter app, SaaS product, 3D game or live training? I reply within a day, and Omebly quotes fixed prices within 48 hours."
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-mint/40 bg-ink-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_0%,rgba(188,19,254,0.16),transparent_60%),radial-gradient(700px_300px_at_100%_100%,rgba(0,243,255,0.14),transparent_60%)]"
        />
        <motion.div {...container} className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <motion.p {...item} className="break-all font-display text-3xl font-bold text-white md:text-4xl">
              {profile.email}
            </motion.p>
            <motion.p {...item} className="mt-2 font-mono text-sm text-mist">
              {profile.availability}
            </motion.p>
            <motion.div {...item} className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`} className="btn btn-primary">
                  <Mail size={16} /> Email me
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </Magnetic>
              <Magnetic>
                <button onClick={copyEmail} className="btn btn-ghost">
                  {copied ? <Check size={16} className="text-mint" /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy email"}
                </button>
              </Magnetic>
              <Magnetic>
                <a href={profile.resumePdf} download className="btn btn-ghost">
                  <Download size={16} /> Resume PDF
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.ul {...container} className="grid gap-3 sm:grid-cols-2">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <motion.li key={label} {...item} className="glass rounded-2xl p-4">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  <Icon size={12} className="text-mint" /> {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 block break-words text-sm font-semibold text-white hover:text-mint"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </Section>
  );
}
