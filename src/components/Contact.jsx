import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Download, Globe, Mail, MapPin, Phone } from "lucide-react";
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
    { icon: Phone, label: "Phone / WhatsApp", value: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
    { icon: Globe, label: "Website", value: profile.websiteLabel, href: profile.website },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="Let's build something."
      intro="Hiring for AI automation, web / app development or data analysis? I usually reply within a day."
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 print-flat">
        <div
          aria-hidden="true"
          className="no-print pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_0%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_300px_at_100%_100%,rgba(46,242,181,0.12),transparent_60%)]"
        />
        <motion.div {...container} className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <motion.p {...item} className="font-display text-3xl font-bold text-white md:text-4xl">
              {profile.email}
            </motion.p>
            <motion.div {...item} className="no-print mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`} className="btn btn-primary">
                  <Mail size={16} /> Email me
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
              <motion.li key={label} {...item} className="glass print-flat rounded-2xl p-4">
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
