import {
  about,
  ecosystem,
  education,
  experience,
  featuredProject as fp,
  languages,
  profile,
  skillGroups,
  ventures,
} from "../data/resume.js";

/**
 * Compact, classic resume layout used only for print / "Download PDF".
 * The animated site is hidden in print; this is shown instead.
 */
export default function PrintResume() {
  const H2 = ({ children }) => (
    <h2 className="mb-1.5 mt-4 border-b-2 border-[#0e7490] pb-0.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-[#0e7490]">
      {children}
    </h2>
  );

  return (
    <div className="hidden print:block font-sans text-[10px] leading-[1.38] text-[#111]">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="font-display text-[25px] font-bold leading-none tracking-tight">{profile.name}</h1>
          <p className="mt-1.5 text-[11.5px] font-semibold text-[#0e7490]">
            {profile.title} · Full-Stack & Flutter Architect · AI Automation · Data Analytics
          </p>
          <p className="mt-1.5 text-[9px] text-[#444]">
            {profile.email} · WhatsApp {profile.whatsapp} · {profile.location}
            <br />
            {profile.linkedinLabel} · {profile.githubLabel} · {profile.websiteLabel}
          </p>
        </div>
        <img src={profile.photo} alt="" className="h-[74px] w-[74px] rounded-xl object-cover" />
      </header>

      <H2>Summary</H2>
      <p>{profile.tagline}</p>
      <p className="mt-1">{about.paragraphs[0]}</p>

      <H2>Skills</H2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {skillGroups.map((g) => (
          <p key={g.id} className="break-inside-avoid">
            <span className="font-semibold">{g.label}: </span>
            {g.skills.map((s) => s.name).join(", ")}
          </p>
        ))}
      </div>

      <H2>Experience</H2>
      <div className="space-y-2">
        {experience.map((e) => (
          <article key={`${e.company}-${e.period}`} className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[11px] font-bold">
                {e.role} <span className="font-semibold text-[#0e7490]">· {e.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-[8.5px] text-[#444]">
                {e.period} · {e.location}
              </p>
            </div>
            <ul className="mt-0.5 list-disc space-y-0.5 pl-4">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <H2>Products & Projects</H2>
      <div className="space-y-1">
        {ecosystem.map((p) => (
          <p key={p.name} className="break-inside-avoid">
            <span className="font-bold">{p.name}</span> — {p.text}
          </p>
        ))}
        <p className="break-inside-avoid">
          <span className="font-bold">{fp.name}</span> <span className="text-[#444]">({fp.version}, {fp.licence})</span> — {fp.description}{" "}
          <span className="text-[#444]">Stack: {fp.stack.join(", ")}.</span>
        </p>
        {ventures.map((v) => (
          <p key={v.name} className="break-inside-avoid">
            <span className="font-bold">{v.name}</span> — {v.text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-6">
        <div>
          <H2>Education & Teaching</H2>
          <div className="space-y-1">
            {education.map((e) => (
              <p key={e.title} className="break-inside-avoid">
                <span className="font-bold">{e.title}</span> <span className="text-[#444]">· {e.org}</span>
                <br />
                {e.text}
              </p>
            ))}
          </div>
        </div>
        <div>
          <H2>Languages</H2>
          <p>{languages.join(" · ")}</p>
          <H2>Availability</H2>
          <p>{profile.availability}. Hubs in Kolkata and Downtown Dubai; clients across {profile.regions}.</p>
        </div>
      </div>
    </div>
  );
}
